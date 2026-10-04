// Shared browser-only Excel quiz parsing for fileConverter.html and quizEditor.html.
// Workbook bytes stay in the page. SheetJS must already be loaded before import or export.

function QX_Header_Key(value) {
    return String(value == null ? "" : value).trim().toLowerCase().replace(/[\s_-]+/g, "");
}

function QX_Header_Index(headerRow) {
    const columns = {};
    if (!headerRow || !headerRow.length) return columns;
    for (let i = 0; i < headerRow.length; i++) {
        const key = QX_Header_Key(headerRow[i]);
        if (key && columns[key] === undefined) columns[key] = i;
    }
    return columns;
}

function QX_Cell(row, index) {
    if (index < 0 || !row || index >= row.length) return undefined;
    return row[index];
}

function QX_Cell_Text(value) {
    if (value === null || value === undefined) return "";
    if (typeof value === "string") return value;
    if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
    if (typeof value === "number") {
        if (Number.isFinite(value) && Math.abs(value - Math.round(value)) < 1e-9) return String(Math.round(value));
        return String(value);
    }
    if (Object.prototype.toString.call(value) === "[object Date]") {
        const month = String(value.getMonth() + 1).padStart(2, "0");
        const day = String(value.getDate()).padStart(2, "0");
        return value.getFullYear() + "-" + month + "-" + day;
    }
    return String(value);
}

function QX_Choice_Text(choice) {
    if (choice && typeof choice === "object") return choice.text == null ? "" : String(choice.text);
    return choice == null ? "" : String(choice);
}

// File Converter named layout: questionText plus option1 through option4 only.
function QX_Named_Columns(headerRow) {
    const columns = QX_Header_Index(headerRow);
    if (columns.questiontext === undefined || columns.option1 === undefined) return null;
    const options = [];
    ["option1", "option2", "option3", "option4"].forEach(function (name) {
        if (columns[name] !== undefined) options.push(columns[name]);
    });
    return {
        question: columns.questiontext,
        answer: columns.answer !== undefined ? columns.answer : -1,
        options: options,
        reference: columns.reference !== undefined ? columns.reference : -1,
        term: columns.term !== undefined ? columns.term : -1,
        status: columns.status !== undefined ? columns.status : -1
    };
}

function QX_Legacy_Columns() {
    return {
        question: 0,
        answer: 1,
        options: [2, 3, 4, 5],
        reference: 6,
        term: 7,
        status: 8,
        image: -1
    };
}

function QX_Named_Layout(columns, questionKey) {
    if (columns[questionKey] === undefined || columns.option1 === undefined) return null;
    const options = [];
    for (let n = 1; n <= 50; n++) {
        if (columns["option" + n] !== undefined) options.push(columns["option" + n]);
    }
    if (!options.length) return null;
    return {
        question: columns[questionKey],
        answer: columns.answer !== undefined ? columns.answer : -1,
        options: options,
        reference: columns.reference !== undefined ? columns.reference : -1,
        term: columns.term !== undefined ? columns.term : -1,
        image: columns.image !== undefined ? columns.image : -1,
        status: columns.status !== undefined ? columns.status : -1
    };
}

function QX_Detect_Layout(headerRow) {
    const columns = QX_Header_Index(headerRow);
    const named = QX_Named_Layout(columns, "questiontext");
    if (named) return { mode: "named", columns: named };

    if (columns.question !== undefined && columns.option1 !== undefined) {
        const answerAt = columns.answer;
        const optionAt = columns.option1;
        if (answerAt === undefined || optionAt < answerAt) {
            const alias = QX_Named_Layout(columns, "question");
            if (alias) return { mode: "named", columns: alias };
        }
    }

    const legacyHeader = columns.question !== undefined && columns.answer !== undefined
        && (columns.option1 === undefined || columns.answer < columns.option1);
    const positional = QX_Header_Key(headerRow && headerRow[0]) === "question"
        && QX_Header_Key(headerRow && headerRow[1]) === "answer";
    if (legacyHeader || positional) return { mode: "legacy", columns: QX_Legacy_Columns() };
    return null;
}

function QX_Is_Blank_Row(row) {
    if (!row || !row.length) return true;
    for (let i = 0; i < row.length; i++) {
        if (row[i] !== null && row[i] !== undefined && row[i] !== "") return false;
    }
    return true;
}

function QX_Questions_From_Rows(rows, layout) {
    const questions = [];
    const map = layout.columns;
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (QX_Is_Blank_Row(row)) continue;
        const choices = [];
        map.options.forEach(function (index) {
            const value = QX_Cell(row, index);
            if (value === undefined || value === null || value === "") return;
            choices.push(QX_Cell_Text(value));
        });
        const question = {
            question: QX_Cell_Text(QX_Cell(row, map.question)),
            answer: map.answer < 0 ? "" : QX_Cell_Text(QX_Cell(row, map.answer)),
            choices: choices,
            reference: map.reference < 0 ? "" : QX_Cell_Text(QX_Cell(row, map.reference)),
            term: map.term < 0 ? "" : QX_Cell_Text(QX_Cell(row, map.term))
        };
        if (map.image >= 0) {
            const image = QX_Cell_Text(QX_Cell(row, map.image));
            if (image !== "") question.image = image;
        }
        if (map.status >= 0) {
            const status = QX_Cell_Text(QX_Cell(row, map.status));
            if (status !== "") question.status = status;
        }
        questions.push(question);
    }
    return questions;
}

var QX_INFO_FIELDS = {
    title: "Title",
    subject: "Subject",
    term: "Term",
    description: "Description",
    lastmodified: "LastModified",
    authors: "Authors",
    references: "References"
};

function QX_Parse_Quiz_Info(rows) {
    const info = {};
    if (!rows) return info;
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        if (!row) continue;
        const field = QX_INFO_FIELDS[QX_Header_Key(row[0])];
        if (!field) continue;
        const value = row.length > 1 ? row[1] : "";
        if (field === "LastModified" && typeof value === "number" && typeof XLSX !== "undefined" && XLSX.SSF && value > 20000 && value < 80000) {
            const formatted = XLSX.SSF.format("yyyy-mm-dd", value);
            info[field] = formatted || QX_Cell_Text(value);
            continue;
        }
        const text = QX_Cell_Text(value);
        if (field === "Authors" || field === "References") {
            info[field] = text.split(/\r?\n/).map(function (line) { return line.trim(); }).filter(function (line) { return line !== ""; });
        } else {
            info[field] = text;
        }
    }
    return info;
}

function QX_Find_Sheet(workbook, key) {
    const names = workbook.SheetNames || [];
    for (let i = 0; i < names.length; i++) {
        if (QX_Header_Key(names[i]) === key) return workbook.Sheets[names[i]];
    }
    return null;
}

function QX_Sheet_Rows(sheet) {
    return XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: null });
}

function QX_Import_Workbook(arrayBuffer) {
    if (typeof XLSX === "undefined") {
        throw new Error("Excel support did not load. Refresh the page and try again.");
    }
    let workbook;
    try {
        const bytes = arrayBuffer instanceof Uint8Array ? arrayBuffer : new Uint8Array(arrayBuffer);
        workbook = XLSX.read(bytes, { type: "array" });
    } catch (error) {
        throw new Error("This workbook could not be opened. Choose a .xlsx or .xls quiz file.");
    }
    const names = workbook.SheetNames || [];
    if (!names.length) throw new Error("This workbook has no worksheets.");

    let sheet = QX_Find_Sheet(workbook, "quiz");
    if (!sheet) {
        for (let i = 0; i < names.length; i++) {
            if (QX_Header_Key(names[i]) === "quizinfo") continue;
            sheet = workbook.Sheets[names[i]];
            break;
        }
    }
    if (!sheet) throw new Error("This workbook has no question worksheet.");

    const rows = QX_Sheet_Rows(sheet);
    if (!rows.length) throw new Error("This workbook has no question rows.");
    const layout = QX_Detect_Layout(rows[0] || []);
    if (!layout) {
        throw new Error("This workbook was not recognized as a quiz. Use headers questionText, option1, option2, option3, option4, and answer, or the legacy headers question, answer, option1, option2, option3, and option4.");
    }
    const questions = QX_Questions_From_Rows(rows, layout);
    if (!questions.length) throw new Error("This workbook has column headers but no question rows.");

    const infoSheet = QX_Find_Sheet(workbook, "quizinfo");
    return {
        mode: layout.mode,
        questions: questions,
        quizInfo: infoSheet ? QX_Parse_Quiz_Info(QX_Sheet_Rows(infoSheet)) : null
    };
}

function QX_Export_Workbook(quizInfo, quizData) {
    if (typeof XLSX === "undefined") {
        throw new Error("Excel support did not load. Refresh the page and try again.");
    }
    const questions = Array.isArray(quizData) ? quizData : [];
    let optionCount = 4;
    questions.forEach(function (question) {
        const count = question && Array.isArray(question.choices) ? question.choices.length : 0;
        if (count > optionCount) optionCount = count;
    });

    const headers = ["questionText"];
    for (let n = 1; n <= optionCount; n++) headers.push("option" + n);
    headers.push("answer", "reference", "term", "image");

    const grid = [headers];
    questions.forEach(function (question) {
        const choices = question && Array.isArray(question.choices) ? question.choices : [];
        const row = [question && question.question != null ? String(question.question) : ""];
        for (let n = 0; n < optionCount; n++) {
            row.push(n < choices.length ? QX_Choice_Text(choices[n]) : "");
        }
        row.push(question && question.answer != null ? String(question.answer) : "");
        row.push(question && question.reference != null ? String(question.reference) : "");
        row.push(question && question.term != null ? String(question.term) : "");
        row.push(question && question.image != null ? String(question.image) : "");
        grid.push(row);
    });

    const info = quizInfo || {};
    const authors = Array.isArray(info.Authors) ? info.Authors.join("\n") : (info.Authors == null ? "" : String(info.Authors));
    const references = Array.isArray(info.References) ? info.References.join("\n") : (info.References == null ? "" : String(info.References));
    const infoGrid = [
        ["Field", "Value"],
        ["Title", info.Title == null ? "" : String(info.Title)],
        ["Subject", info.Subject == null ? "" : String(info.Subject)],
        ["Term", info.Term == null ? "" : String(info.Term)],
        ["Description", info.Description == null ? "" : String(info.Description)],
        ["LastModified", info.LastModified == null ? "" : String(info.LastModified)],
        ["Authors", authors],
        ["References", references]
    ];

    const book = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, XLSX.utils.aoa_to_sheet(grid), "Quiz");
    XLSX.utils.book_append_sheet(book, XLSX.utils.aoa_to_sheet(infoGrid), "QuizInfo");
    return book;
}

// File Converter entry point. Keeps the original four-choice positional fallback.
function QX_Convert_Sheet_Rows(jsonData, flags) {
    const named = QX_Named_Columns(jsonData[0] || []);
    const convertedData = [];

    for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i];
        if (!row || row.every(function (cell) {
            return cell === null || cell === undefined || cell === "";
        })) {
            continue;
        }

        const preprocessedRow = row.map(function (cell) {
            if (typeof cell === "string") {
                return cell.replace(/\b(TRUE|FALSE)\b/g, "$1 ");
            }
            return cell;
        });

        const convertedRow = {};
        if (flags.question) {
            convertedRow.question = named ? QX_Cell(preprocessedRow, named.question) : preprocessedRow[0];
        }
        if (flags.answer) {
            convertedRow.answer = named ? QX_Cell(preprocessedRow, named.answer) : preprocessedRow[1];
        }
        if (flags.choices) {
            const choices = [];
            if (named) {
                named.options.forEach(function (index) {
                    const value = QX_Cell(preprocessedRow, index);
                    if (value) choices.push(value);
                });
            } else {
                for (let j = 2; j < 6; j++) {
                    if (preprocessedRow[j]) choices.push(preprocessedRow[j]);
                }
            }
            convertedRow.choices = choices;
        }
        if (flags.reference) {
            convertedRow.reference = named ? QX_Cell(preprocessedRow, named.reference) : preprocessedRow[6];
        }
        if (flags.term) {
            convertedRow.term = named ? QX_Cell(preprocessedRow, named.term) : preprocessedRow[7];
        }
        if (flags.status) {
            convertedRow.status = named ? QX_Cell(preprocessedRow, named.status) : preprocessedRow[8];
        }
        convertedData.push(convertedRow);
    }

    return { mode: named ? "named" : "legacy", rows: convertedData };
}

function FC_Header_Key(value) {
    return QX_Header_Key(value);
}

function FC_Named_Columns(headerRow) {
    return QX_Named_Columns(headerRow);
}

function FC_Convert_Sheet_Rows(jsonData, flags) {
    return QX_Convert_Sheet_Rows(jsonData, flags);
}
