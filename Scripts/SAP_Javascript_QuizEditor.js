// Same fence formatting as Scripts/SAP_Javascript_QuizPlayer.js and QuizOutliner.js.
function Quiz_Format_Code_Fence(infoLine, newline, code) {
    const info = String(infoLine || "").replace(/\r/g, "").trim();
    const languages = {
        "java": { badge: "Java", className: "language-java" },
        "javascript": { badge: "JavaScript", className: "language-javascript" },
        "js": { badge: "JavaScript", className: "language-javascript" },
        "c": { badge: "C", className: "language-c" },
        "cpp": { badge: "C++", className: "language-cpp" },
        "c++": { badge: "C++", className: "language-cpp" },
        "csharp": { badge: "C#", className: "language-csharp" },
        "cs": { badge: "C#", className: "language-csharp" },
        "c#": { badge: "C#", className: "language-csharp" },
        "sql": { badge: "SQL", className: "language-sql" }
    };
    const key = info.toLowerCase();
    if (Object.prototype.hasOwnProperty.call(languages, key)) {
        return { info: languages[key], body: code };
    }
    if (newline && /^[A-Za-z][A-Za-z0-9+#]*$/.test(info)) {
        const classToken = key.replace(/[^a-z0-9]+/g, "") || "text";
        return {
            info: { badge: info, className: "language-" + classToken },
            body: code
        };
    }
    if (info === "") {
        return { info: languages.java, body: code };
    }
    return {
        info: languages.java,
        body: String(infoLine || "") + (newline || "") + code
    };
}

function Quiz_Escape_HTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function Format_Quiz_Text(rawText) {
    if (rawText === null || rawText === undefined) return "";
    if (typeof rawText !== "string") return String(rawText);

    let text = rawText.replace(/\s*\[cite:\s*[\d,\s]+\]/gi, "");
    text = text.replace(/`(\s*`){2,}/g, "```");
    text = text.replace(/`{4,}/g, "```");

    const codeBlocks = [];
    text = text.replace(/```([^\n`]*)(\n)?([\s\S]*?)```/g, function (match, infoLine, newline, code) {
        const fence = Quiz_Format_Code_Fence(infoLine, newline, code);
        const placeholder = "___CODE_BLOCK_" + codeBlocks.length + "___";
        const trimmedCode = String(fence.body || "").replace(/\r/g, "").replace(/^\n+|\n+$/g, "");
        const className = fence.info.className;
        const badge = Quiz_Escape_HTML(fence.info.badge);
        codeBlocks.push(
            '<div class="Quiz_Code_Block_Container ' + className + '">' +
                '<div class="Quiz_Code_Header">' +
                    '<span class="Quiz_Code_Lang_Badge ' + className + '">' + badge + "</span>" +
                    '<button type="button" class="Quiz_Code_Copy_Btn" onclick="Quiz_Copy_Code(this)">Copy</button>' +
                "</div>" +
                '<pre class="Quiz_Code_Block"><code class="' + className + '">' + Quiz_Escape_HTML(trimmedCode) + "</code></pre>" +
            "</div>"
        );
        return placeholder;
    });

    const inlineCodes = [];
    text = text.replace(/`([^`\n]+)`/g, function (match, inlineCode) {
        const placeholder = "___INLINE_CODE_" + inlineCodes.length + "___";
        inlineCodes.push('<code class="Quiz_Inline_Code">' + Quiz_Escape_HTML(inlineCode) + "</code>");
        return placeholder;
    });

    text = Quiz_Escape_HTML(text);
    text = text.replace(/\n\n+/g, '<div class="Quiz_Question_Paragraph_Spacer"></div>');
    text = text.replace(/\n/g, "<br>");

    inlineCodes.forEach(function (codeHtml, idx) {
        text = text.replace("___INLINE_CODE_" + idx + "___", codeHtml);
    });
    codeBlocks.forEach(function (blockHtml, idx) {
        text = text.replace("___CODE_BLOCK_" + idx + "___", blockHtml);
    });
    return text;
}

function Quiz_Copy_Code(btn) {
    const container = btn.closest(".Quiz_Code_Block_Container");
    if (!container) return;
    const codeEl = container.querySelector("code");
    if (!codeEl) return;
    const textToCopy = codeEl.innerText;
    const done = function () {
        const originalText = btn.innerText;
        btn.innerText = "Copied!";
        btn.classList.add("Copied");
        setTimeout(function () {
            btn.innerText = originalText;
            btn.classList.remove("Copied");
        }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(done).catch(done);
    }
}

var QE_Quiz = null;

function QE_Today() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return now.getFullYear() + "-" + month + "-" + day;
}

function QE_Clean_Name(name, fallback) {
    const cleaned = String(name || fallback || "quiz").replace(/[\\/:*?"<>|]+/g, "").trim();
    return cleaned || (fallback || "quiz");
}

function QE_Base_Name(name) {
    let cleaned = QE_Clean_Name(name, "quiz");
    let previous = "";
    while (cleaned !== previous) {
        previous = cleaned;
        cleaned = cleaned.replace(/\.(json|xlsx|xls)$/i, "");
    }
    cleaned = cleaned.replace(/[. ]+$/g, "");
    return cleaned || "quiz";
}

function QE_File_Kind(file) {
    const name = String(file && file.name || "").toLowerCase();
    if (/\.json$/i.test(name)) return "json";
    if (/\.(xlsx|xls)$/i.test(name)) return "excel";
    const type = String(file && file.type || "").toLowerCase();
    if (type.indexOf("json") !== -1) return "json";
    if (type.indexOf("sheet") !== -1 || type.indexOf("excel") !== -1) return "excel";
    return "";
}

function QE_Lines(id) {
    return String(document.getElementById(id).value || "")
        .split(/\r?\n/)
        .map(function (line) { return line.trim(); })
        .filter(function (line) { return line !== ""; });
}

function QE_Blank_Question() {
    return {
        question: "",
        answer: "",
        choices: ["", "", "", ""],
        reference: "",
        term: ""
    };
}

function QE_Choice_Text(choice) {
    if (choice && typeof choice === "object") return choice.text == null ? "" : String(choice.text);
    return choice == null ? "" : String(choice);
}

function QE_Choice_Image(choice) {
    if (choice && typeof choice === "object" && choice.image != null) return String(choice.image);
    return "";
}

function QE_Build_Choice(original, text, image) {
    const imageText = image == null ? "" : String(image);
    if (original && typeof original === "object") {
        const copy = Object.assign({}, original);
        copy.text = text;
        if (imageText.trim()) copy.image = imageText;
        else delete copy.image;
        return copy;
    }
    if (imageText.trim()) return { text: text, image: imageText };
    return text;
}

function QE_Export_Choice(choice) {
    if (choice && typeof choice === "object") {
        const copy = Object.assign({}, choice);
        if (copy.image == null || String(copy.image).trim() === "") delete copy.image;
        if (Object.keys(copy).length === 1 && Object.prototype.hasOwnProperty.call(copy, "text")) {
            return copy.text;
        }
        return copy;
    }
    return choice;
}

function QE_Export_Question(question) {
    const copy = Object.assign({}, question);
    copy.choices = (question.choices || []).map(QE_Export_Choice);
    if (copy.image == null || String(copy.image).trim() === "") delete copy.image;
    return copy;
}

function QE_Normalize_Question(raw) {
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
    const question = Object.assign({}, raw);
    question.question = question.question == null ? "" : String(question.question);
    question.answer = question.answer == null ? "" : String(question.answer);
    if (!Array.isArray(question.choices)) question.choices = [];
    question.choices = question.choices.map(function (choice) {
        if (choice && typeof choice === "object" && !Array.isArray(choice)) {
            const copy = Object.assign({}, choice);
            copy.text = copy.text == null ? "" : String(copy.text);
            if (copy.image != null) copy.image = String(copy.image);
            return copy;
        }
        return choice == null ? "" : String(choice);
    });
    question.reference = question.reference == null ? "" : String(question.reference);
    question.term = question.term == null ? "" : String(question.term);
    if (question.image != null) question.image = String(question.image);
    return question;
}

function QE_Info_Text(info, key) {
    if (info[key] == null) info[key] = "";
    else info[key] = String(info[key]);
}

function QE_Normalize_Document(parsed) {
    if (Array.isArray(parsed)) {
        if (!parsed.length) {
            throw new Error("The question list is empty. Upload a quiz with a quizData array, or a JSON array of questions.");
        }
        return {
            wrapped: true,
            extra: {},
            baseName: "quiz",
            sourceName: "quiz.json",
            quizInfo: {
                Subject: "",
                Term: "",
                Title: "",
                Description: "",
                LastModified: QE_Today(),
                Authors: [],
                References: []
            },
            quizData: parsed.map(function (item, index) {
                const question = QE_Normalize_Question(item);
                if (!question) {
                    throw new Error("Question " + (index + 1) + " is not an object. Each item needs question, answer, and choices.");
                }
                return question;
            }),
            selected: 0
        };
    }
    if (!parsed || typeof parsed !== "object") {
        throw new Error("Upload a quiz JSON object, or a JSON array of questions from the File Converter.");
    }
    if (!Array.isArray(parsed.quizData)) {
        throw new Error("This file has no quizData array. Upload a quiz JSON file, or a JSON array of questions from the File Converter.");
    }
    const info = parsed.quizInfo && typeof parsed.quizInfo === "object" && !Array.isArray(parsed.quizInfo)
        ? Object.assign({}, parsed.quizInfo)
        : {};
    ["Title", "Subject", "Term", "Description", "LastModified"].forEach(function (key) {
        QE_Info_Text(info, key);
    });
    if (!Array.isArray(info.Authors)) info.Authors = info.Authors ? [String(info.Authors)] : [];
    if (!Array.isArray(info.References)) info.References = info.References ? [String(info.References)] : [];
    const extra = {};
    Object.keys(parsed).forEach(function (key) {
        if (key !== "quizInfo" && key !== "quizData") extra[key] = parsed[key];
    });
    return {
        wrapped: false,
        extra: extra,
        baseName: "quiz",
        sourceName: "quiz.json",
        quizInfo: info,
        quizData: parsed.quizData.map(function (item, index) {
            const question = QE_Normalize_Question(item);
            if (!question) {
                throw new Error("Question " + (index + 1) + " is not an object. Each quizData item needs question, answer, and choices.");
            }
            return question;
        }),
        selected: 0
    };
}

function QE_Load_Text(text, fileName) {
    let parsed;
    try {
        parsed = JSON.parse(String(text || "").replace(/^\uFEFF/, ""));
    } catch (error) {
        throw new Error("This file is not valid JSON. " + (error && error.message ? error.message : "Check the file and try again."));
    }
    const loaded = QE_Normalize_Document(parsed);
    QE_Remember_File(loaded, fileName || "quiz.json");
    QE_Show_Loaded(loaded);
    const problems = QE_Problems();
    if (loaded.wrapped) {
        const wrapNote = "The uploaded file was a list of questions, so it was wrapped into quizInfo and quizData.";
        QE_Banner(problems.length ? wrapNote + " " + problems[0] : wrapNote, problems.length ? "error" : "ok");
    } else if (problems.length) {
        QE_Banner("Loaded " + loaded.quizData.length + " questions from " + loaded.sourceName + ". " + problems[0], "error");
    } else {
        QE_Banner("Loaded " + loaded.quizData.length + " questions from " + loaded.sourceName + ". Every answer matches a choice.", "ok");
    }
}

function QE_Remember_File(loaded, fileName) {
    loaded.baseName = QE_Base_Name(fileName);
    loaded.sourceName = QE_Clean_Name(fileName, "quiz");
}

function QE_Excel_Info(imported) {
    const info = {
        Subject: "",
        Term: "",
        Title: "",
        Description: "",
        LastModified: QE_Today(),
        Authors: [],
        References: []
    };
    const source = imported && imported.quizInfo;
    if (!source) return info;
    ["Title", "Subject", "Term", "Description", "LastModified"].forEach(function (key) {
        if (Object.prototype.hasOwnProperty.call(source, key)) info[key] = source[key] == null ? "" : String(source[key]);
    });
    if (Array.isArray(source.Authors)) info.Authors = source.Authors;
    if (Array.isArray(source.References)) info.References = source.References;
    return info;
}

function QE_Load_Excel(buffer, fileName) {
    if (typeof QX_Import_Workbook !== "function") {
        throw new Error("Excel support did not load. Refresh the page and try again.");
    }
    const imported = QX_Import_Workbook(buffer);
    const loaded = {
        wrapped: false,
        extra: {},
        baseName: "quiz",
        sourceName: "quiz.xlsx",
        quizInfo: QE_Excel_Info(imported),
        quizData: imported.questions.map(function (item, index) {
            const question = QE_Normalize_Question(item);
            if (!question) throw new Error("Question " + (index + 1) + " could not be read.");
            return question;
        }),
        selected: 0
    };
    QE_Remember_File(loaded, fileName || "quiz.xlsx");
    QE_Show_Loaded(loaded);
    const problems = QE_Problems();
    const modeLabel = imported.mode === "named" ? "named columns" : "the legacy column layout";
    let message = "Loaded " + loaded.quizData.length + " questions from " + loaded.sourceName + " using " + modeLabel + ".";
    if (problems.length) message += " " + problems[0];
    QE_Banner(message, problems.length ? "error" : "ok");
}

function QE_Show_Loaded(loaded) {
    if (!loaded.quizData.length) loaded.quizData.push(QE_Blank_Question());
    QE_Quiz = loaded;
    QE_Show();
}

function QE_Read_File(file) {
    if (!file) return;
    const kind = QE_File_Kind(file);
    if (!kind) {
        QE_Banner("Choose a .json, .xlsx, or .xls quiz file.", "error");
        return;
    }
    const reader = new FileReader();
    reader.onerror = function () {
        QE_Banner("That file could not be read. Choose a .json, .xlsx, or .xls quiz and try again.", "error");
    };
    reader.onload = function () {
        try {
            if (kind === "excel") QE_Load_Excel(reader.result, file.name || "quiz.xlsx");
            else QE_Load_Text(String(reader.result || ""), file.name || "quiz.json");
        } catch (error) {
            QE_Banner(error.message || "That quiz file could not be opened.", "error");
        }
    };
    if (kind === "excel") reader.readAsArrayBuffer(file);
    else reader.readAsText(file);
}

function QE_Banner(message, state) {
    const banner = document.getElementById("QE_Banner");
    banner.hidden = false;
    banner.setAttribute("data-state", state || "ok");
    banner.textContent = message;
}

function QE_Answer_Index(question, preferred) {
    const choices = Array.isArray(question.choices) ? question.choices : [];
    if (typeof preferred === "number" && preferred >= 0 && preferred < choices.length) {
        if (question.answer === QE_Choice_Text(choices[preferred])) return preferred;
    }
    for (let i = 0; i < choices.length; i++) {
        if (question.answer === QE_Choice_Text(choices[i])) return i;
    }
    return -1;
}

function QE_Preferred_Answer_Index() {
    const select = document.getElementById("QE_Answer");
    if (!select || select.value === "") return -1;
    const index = Number(select.value);
    return Number.isFinite(index) ? index : -1;
}

function QE_Problems() {
    const problems = [];
    if (!QE_Quiz || !QE_Quiz.quizData.length) {
        problems.push("Add at least one question before downloading.");
        return problems;
    }
    QE_Quiz.quizData.forEach(function (question, index) {
        const label = "Question " + (index + 1);
        if (!question.choices || !question.choices.length) {
            problems.push(label + " needs at least one choice.");
            return;
        }
        if (QE_Answer_Index(question) < 0) {
            problems.push(label + " has an answer that does not exactly match any choice.");
        }
    });
    return problems;
}

function QE_Flush() {
    if (!QE_Quiz) return;
    const info = QE_Quiz.quizInfo;
    info.Title = document.getElementById("QE_Info_Title").value;
    info.Subject = document.getElementById("QE_Info_Subject").value;
    info.Term = document.getElementById("QE_Info_Term").value;
    info.Description = document.getElementById("QE_Info_Description").value;
    info.LastModified = document.getElementById("QE_Info_Modified").value;
    info.Authors = QE_Lines("QE_Info_Authors");
    info.References = QE_Lines("QE_Info_References");
    const question = QE_Quiz.quizData[QE_Quiz.selected];
    const questionInput = document.getElementById("QE_Question");
    if (!question || !questionInput) return;
    question.question = questionInput.value;
    question.reference = document.getElementById("QE_Reference").value;
    question.term = document.getElementById("QE_TermField").value;
    const image = document.getElementById("QE_Image").value;
    if (image.trim()) question.image = image;
    else delete question.image;
    document.querySelectorAll("[data-qe-choice]").forEach(function (node) {
        const index = Number(node.getAttribute("data-qe-choice"));
        const text = node.querySelector("[data-qe-choice-text]").value;
        const choiceImage = node.querySelector("[data-qe-choice-image]").value;
        question.choices[index] = QE_Build_Choice(question.choices[index], text, choiceImage);
    });
    const answerSelect = document.getElementById("QE_Answer");
    const selectedChoice = answerSelect ? answerSelect.value : "";
    if (selectedChoice !== "") {
        const index = Number(selectedChoice);
        if (Number.isFinite(index) && question.choices[index] != null) {
            question.answer = QE_Choice_Text(question.choices[index]);
        }
    }
}

function QE_Payload() {
    const payload = Object.assign({}, QE_Quiz.extra);
    payload.quizInfo = Object.assign({}, QE_Quiz.quizInfo);
    payload.quizData = QE_Quiz.quizData.map(QE_Export_Question);
    return payload;
}

function QE_Export_Ready() {
    if (!QE_Quiz) {
        QE_Banner("Upload a quiz or start a new one before downloading.", "error");
        return false;
    }
    QE_Flush();
    const problems = QE_Problems();
    QE_Render_Answer(true);
    QE_Update_Status();
    QE_Render_List();
    if (problems.length) {
        QE_Banner(problems.join(" "), "error");
        return false;
    }
    return true;
}

function QE_Save_Blob(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
}

function QE_Download_JSON() {
    if (!QE_Export_Ready()) return;
    const json = JSON.stringify(QE_Payload(), null, 2) + "\n";
    const name = QE_Quiz.baseName + ".json";
    QE_Save_Blob(new Blob([json], { type: "application/json" }), name);
    QE_Banner("Downloaded " + name + ". Every answer matches one of its choices.", "ok");
}

function QE_Download_Excel() {
    if (!QE_Export_Ready()) return;
    try {
        const book = QX_Export_Workbook(QE_Quiz.quizInfo, QE_Quiz.quizData.map(QE_Export_Question));
        const bytes = XLSX.write(book, { bookType: "xlsx", type: "array" });
        const name = QE_Quiz.baseName + ".xlsx";
        QE_Save_Blob(new Blob([bytes], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        }), name);
        QE_Banner("Downloaded " + name + ". Every answer matches one of its choices.", "ok");
    } catch (error) {
        QE_Banner(error.message || "The Excel file could not be created.", "error");
    }
}

function QE_Snippet(question) {
    const text = String(question || "")
        .replace(/```[\s\S]*?```/g, " [code] ")
        .replace(/`/g, "")
        .replace(/\s+/g, " ")
        .trim();
    if (!text) return "Untitled question";
    return text.length > 90 ? text.slice(0, 90) + "…" : text;
}

function QE_Fill_Meta() {
    const info = QE_Quiz.quizInfo;
    document.getElementById("QE_Info_Title").value = info.Title || "";
    document.getElementById("QE_Info_Subject").value = info.Subject || "";
    document.getElementById("QE_Info_Term").value = info.Term || "";
    document.getElementById("QE_Info_Description").value = info.Description || "";
    document.getElementById("QE_Info_Modified").value = info.LastModified || "";
    document.getElementById("QE_Info_Authors").value = (info.Authors || []).join("\n");
    document.getElementById("QE_Info_References").value = (info.References || []).join("\n");
    document.getElementById("QE_FileName").textContent = QE_Quiz.baseName;
}

function QE_Update_Status() {
    const problems = QE_Problems();
    const status = document.getElementById("QE_Status");
    if (!status || !QE_Quiz) return;
    status.textContent = QE_Quiz.quizData.length + " questions"
        + (problems.length ? " · " + problems.length + " to fix" : " · answers match");
}

function QE_Render_List() {
    const list = document.getElementById("QE_List");
    list.innerHTML = "";
    QE_Quiz.quizData.forEach(function (question, index) {
        const item = document.createElement("div");
        item.className = "QE_List_Item";
        item.setAttribute("data-qe-index", String(index));
        item.setAttribute("data-selected", index === QE_Quiz.selected ? "true" : "false");
        item.setAttribute("data-valid", QE_Answer_Index(question) >= 0 && question.choices.length ? "true" : "false");

        const main = document.createElement("button");
        main.type = "button";
        main.className = "QE_List_Item_Main";
        const number = document.createElement("span");
        number.className = "QE_List_Item_Number";
        number.textContent = String(index + 1);
        const text = document.createElement("span");
        text.className = "QE_List_Item_Text";
        text.textContent = QE_Snippet(question.question);
        main.appendChild(number);
        main.appendChild(text);

        const actions = document.createElement("div");
        actions.className = "QE_List_Item_Actions";
        [["up", "↑"], ["down", "↓"], ["duplicate", "⧉"], ["delete", "×"]].forEach(function (pair) {
            const button = document.createElement("button");
            button.type = "button";
            button.setAttribute("data-qe-action", pair[0]);
            button.textContent = pair[1];
            button.title = pair[0];
            actions.appendChild(button);
        });

        item.appendChild(main);
        item.appendChild(actions);
        list.appendChild(item);
    });
    const selected = list.querySelector('[data-selected="true"]');
    if (selected && selected.scrollIntoView) {
        selected.scrollIntoView({ block: "nearest" });
    }
}

function QE_Render_Choices() {
    const question = QE_Quiz.quizData[QE_Quiz.selected];
    const host = document.getElementById("QE_Choices");
    host.innerHTML = "";
    const match = QE_Answer_Index(question);
    question.choices.forEach(function (choice, index) {
        const row = document.createElement("div");
        row.className = "QE_Choice";
        row.setAttribute("data-qe-choice", String(index));
        if (index === match) row.setAttribute("data-match", "true");

        const top = document.createElement("div");
        top.className = "QE_Choice_Top";
        const label = document.createElement("strong");
        label.textContent = "Choice " + (index + 1);
        const actions = document.createElement("div");
        actions.className = "QE_Choice_Actions";
        [["up", "Up"], ["down", "Down"], ["delete", "Delete"]].forEach(function (pair) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "General_Button";
            button.setAttribute("data-qe-choice-action", pair[0]);
            button.setAttribute("data-qe-choice-index", String(index));
            button.textContent = pair[1];
            actions.appendChild(button);
        });
        top.appendChild(label);
        top.appendChild(actions);

        const textLabel = document.createElement("label");
        textLabel.className = "QE_Field";
        textLabel.appendChild(document.createTextNode("Text"));
        const text = document.createElement("textarea");
        text.rows = 2;
        text.spellcheck = false;
        text.setAttribute("data-qe-choice-text", "");
        text.value = QE_Choice_Text(choice);
        textLabel.appendChild(text);

        const imageLabel = document.createElement("label");
        imageLabel.className = "QE_Field";
        imageLabel.appendChild(document.createTextNode("Image"));
        const image = document.createElement("input");
        image.type = "text";
        image.autocomplete = "off";
        image.placeholder = "Optional image URL or path";
        image.setAttribute("data-qe-choice-image", "");
        image.value = QE_Choice_Image(choice);
        imageLabel.appendChild(image);

        row.appendChild(top);
        row.appendChild(textLabel);
        row.appendChild(imageLabel);
        host.appendChild(row);
    });
}

function QE_Update_Preview() {
    const question = QE_Quiz.quizData[QE_Quiz.selected];
    const preview = document.getElementById("QE_Preview");
    preview.innerHTML = "";
    const text = document.createElement("div");
    text.className = "Quiz_Form_Question QE_Preview_Question";
    text.innerHTML = Format_Quiz_Text(question.question);
    preview.appendChild(text);

    if (question.image && String(question.image).trim()) {
        const image = document.createElement("img");
        image.className = "QE_Preview_Image";
        image.alt = "";
        image.draggable = false;
        image.src = question.image;
        image.onerror = function () { image.style.display = "none"; };
        preview.appendChild(image);
    }

    const choices = document.createElement("div");
    choices.className = "QE_Preview_Choices";
    const match = QE_Answer_Index(question, QE_Preferred_Answer_Index());
    (question.choices || []).forEach(function (choice, index) {
        const item = document.createElement("div");
        item.className = "QE_Preview_Choice";
        if (index === match) item.setAttribute("data-match", "true");
        const label = document.createElement("div");
        label.innerHTML = Format_Quiz_Text(QE_Choice_Text(choice));
        item.appendChild(label);
        const choiceImage = QE_Choice_Image(choice);
        if (choiceImage.trim()) {
            const image = document.createElement("img");
            image.alt = "";
            image.src = choiceImage;
            image.onerror = function () { image.style.display = "none"; };
            item.appendChild(image);
        }
        choices.appendChild(item);
    });
    preview.appendChild(choices);

    const note = document.getElementById("QE_MatchNote");
    if (match >= 0) {
        note.textContent = "Answer exactly matches choice " + (match + 1) + ".";
        note.setAttribute("data-state", "ok");
    } else {
        const previewText = String(question.answer || "").replace(/\s+/g, " ").trim();
        const short = previewText.length > 120 ? previewText.slice(0, 120) + "…" : previewText;
        note.textContent = short
            ? "Saved answer does not exactly match any choice: " + short
            : "Answer does not exactly match any choice.";
        note.setAttribute("data-state", "error");
    }
    document.querySelectorAll("[data-qe-choice]").forEach(function (row) {
        const index = Number(row.getAttribute("data-qe-choice"));
        if (index === match) row.setAttribute("data-match", "true");
        else row.removeAttribute("data-match");
    });
}

function QE_Answer_Label(choice, index) {
    const preview = QE_Choice_Text(choice).replace(/\s+/g, " ").trim();
    const short = preview.length > 80 ? preview.slice(0, 80) + "…" : preview;
    return short ? "Choice " + (index + 1) + " — " + short : "Choice " + (index + 1);
}

var QE_Rendering_Answer = false;

function QE_Render_Answer(keepSelection) {
    if (!QE_Quiz || QE_Rendering_Answer) return;
    const question = QE_Quiz.quizData[QE_Quiz.selected];
    const select = document.getElementById("QE_Answer");
    if (!question || !select) return;
    const preferred = keepSelection ? QE_Preferred_Answer_Index() : -1;
    const match = QE_Answer_Index(question, preferred);
    QE_Rendering_Answer = true;
    select.innerHTML = "";
    if (match < 0) {
        const unmatched = document.createElement("option");
        unmatched.value = "";
        const preview = String(question.answer || "").replace(/\s+/g, " ").trim();
        const short = preview.length > 80 ? preview.slice(0, 80) + "…" : preview;
        unmatched.textContent = short ? "Unmatched: " + short : "Select the correct choice";
        unmatched.selected = true;
        select.appendChild(unmatched);
    }
    (question.choices || []).forEach(function (choice, index) {
        const option = document.createElement("option");
        option.value = String(index);
        option.textContent = QE_Answer_Label(choice, index);
        if (index === match) option.selected = true;
        select.appendChild(option);
    });
    if (!select.options.length) {
        const empty = document.createElement("option");
        empty.value = "";
        empty.textContent = "Add a choice first";
        empty.selected = true;
        select.appendChild(empty);
    }
    select.setAttribute("data-state", match >= 0 ? "ok" : "error");
    QE_Rendering_Answer = false;
}

function QE_Render_Editor() {
    const question = QE_Quiz.quizData[QE_Quiz.selected];
    document.getElementById("QE_Question_Heading").textContent =
        "Question " + (QE_Quiz.selected + 1) + " of " + QE_Quiz.quizData.length;
    document.getElementById("QE_Question").value = question.question || "";
    document.getElementById("QE_Reference").value = question.reference || "";
    document.getElementById("QE_TermField").value = question.term || "";
    document.getElementById("QE_Image").value = question.image || "";
    QE_Render_Choices();
    QE_Render_Answer(false);
    QE_Update_Preview();
    QE_Update_Status();
}

function QE_Show() {
    document.getElementById("QE_Empty").hidden = true;
    document.getElementById("QE_Workspace").hidden = false;
    document.getElementById("QE_Add").disabled = false;
    document.getElementById("QE_Download_JSON").disabled = false;
    document.getElementById("QE_Download_Excel").disabled = false;
    QE_Fill_Meta();
    QE_Render_List();
    QE_Render_Editor();
}

function QE_New() {
    QE_Quiz = {
        wrapped: false,
        extra: {},
        baseName: "quiz",
        sourceName: "quiz.json",
        quizInfo: {
            Subject: "",
            Term: "",
            Title: "",
            Description: "",
            LastModified: QE_Today(),
            Authors: [],
            References: []
        },
        quizData: [QE_Blank_Question()],
        selected: 0
    };
    QE_Show();
    QE_Banner("New quiz started. The answer must exactly match one of the choices before download.", "ok");
}

function QE_Select(index) {
    if (!QE_Quiz || index === QE_Quiz.selected || index < 0 || index >= QE_Quiz.quizData.length) return;
    QE_Flush();
    QE_Quiz.selected = index;
    QE_Render_List();
    QE_Render_Editor();
}

function QE_Add_Question() {
    if (!QE_Quiz) return;
    QE_Flush();
    QE_Quiz.quizData.push(QE_Blank_Question());
    QE_Quiz.selected = QE_Quiz.quizData.length - 1;
    QE_Render_List();
    QE_Render_Editor();
}

function QE_Duplicate() {
    QE_Flush();
    const copy = JSON.parse(JSON.stringify(QE_Quiz.quizData[QE_Quiz.selected]));
    QE_Quiz.quizData.splice(QE_Quiz.selected + 1, 0, copy);
    QE_Quiz.selected += 1;
    QE_Render_List();
    QE_Render_Editor();
}

function QE_Delete() {
    QE_Flush();
    QE_Quiz.quizData.splice(QE_Quiz.selected, 1);
    if (!QE_Quiz.quizData.length) QE_Quiz.quizData.push(QE_Blank_Question());
    if (QE_Quiz.selected >= QE_Quiz.quizData.length) QE_Quiz.selected = QE_Quiz.quizData.length - 1;
    QE_Render_List();
    QE_Render_Editor();
}

function QE_Move(delta) {
    QE_Flush();
    const index = QE_Quiz.selected;
    const next = index + delta;
    if (next < 0 || next >= QE_Quiz.quizData.length) return;
    const item = QE_Quiz.quizData.splice(index, 1)[0];
    QE_Quiz.quizData.splice(next, 0, item);
    QE_Quiz.selected = next;
    QE_Render_List();
    QE_Render_Editor();
}

function QE_Run(action) {
    if (action === "up") QE_Move(-1);
    else if (action === "down") QE_Move(1);
    else if (action === "duplicate") QE_Duplicate();
    else if (action === "delete") QE_Delete();
}

function QE_Move_Choice(index, delta) {
    QE_Flush();
    const choices = QE_Quiz.quizData[QE_Quiz.selected].choices;
    const next = index + delta;
    if (next < 0 || next >= choices.length) return;
    const item = choices.splice(index, 1)[0];
    choices.splice(next, 0, item);
    QE_Render_Choices();
    QE_Render_Answer(false);
    QE_Update_Preview();
    QE_Update_Status();
    QE_Render_List();
}

function QE_Delete_Choice(index) {
    QE_Flush();
    QE_Quiz.quizData[QE_Quiz.selected].choices.splice(index, 1);
    QE_Render_Choices();
    QE_Render_Answer(false);
    QE_Update_Preview();
    QE_Update_Status();
    QE_Render_List();
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("QE_Upload").addEventListener("click", function () {
        document.getElementById("QE_File").click();
    });
    document.getElementById("QE_File").addEventListener("change", function (event) {
        const file = event.target.files && event.target.files[0];
        QE_Read_File(file);
        event.target.value = "";
    });
    document.getElementById("QE_New").addEventListener("click", QE_New);
    document.getElementById("QE_Add").addEventListener("click", QE_Add_Question);
    document.getElementById("QE_Download_JSON").addEventListener("click", QE_Download_JSON);
    document.getElementById("QE_Download_Excel").addEventListener("click", QE_Download_Excel);
    document.getElementById("QE_Answer").addEventListener("change", QE_On_Edit);
    document.getElementById("QE_Move_Up").addEventListener("click", function () { QE_Move(-1); });
    document.getElementById("QE_Move_Down").addEventListener("click", function () { QE_Move(1); });
    document.getElementById("QE_Duplicate").addEventListener("click", QE_Duplicate);
    document.getElementById("QE_Delete").addEventListener("click", QE_Delete);
    document.getElementById("QE_Add_Choice").addEventListener("click", function () {
        if (!QE_Quiz) return;
        QE_Flush();
        QE_Quiz.quizData[QE_Quiz.selected].choices.push("");
        QE_Render_Choices();
        QE_Render_Answer(false);
        QE_Update_Preview();
        QE_Update_Status();
        QE_Render_List();
    });
    document.getElementById("QE_Workspace").addEventListener("input", QE_On_Edit);
    document.getElementById("QE_List").addEventListener("click", function (event) {
        const actionButton = event.target.closest("[data-qe-action]");
        const item = event.target.closest("[data-qe-index]");
        if (!item) return;
        const index = Number(item.getAttribute("data-qe-index"));
        if (actionButton) {
            QE_Select(index);
            QE_Run(actionButton.getAttribute("data-qe-action"));
            return;
        }
        QE_Select(index);
    });
    document.getElementById("QE_Choices").addEventListener("click", function (event) {
        const button = event.target.closest("[data-qe-choice-action]");
        if (!button) return;
        const index = Number(button.getAttribute("data-qe-choice-index"));
        const action = button.getAttribute("data-qe-choice-action");
        if (action === "delete") QE_Delete_Choice(index);
        else if (action === "up") QE_Move_Choice(index, -1);
        else if (action === "down") QE_Move_Choice(index, 1);
    });
});

function QE_On_Edit() {
    if (!QE_Quiz || QE_Rendering_Answer) return;
    QE_Flush();
    QE_Render_Answer(true);
    QE_Update_Preview();
    QE_Update_Status();
    const current = document.querySelector('.QE_List_Item[data-selected="true"] .QE_List_Item_Text');
    const question = QE_Quiz.quizData[QE_Quiz.selected];
    if (current && question) current.textContent = QE_Snippet(question.question);
    const item = document.querySelector('.QE_List_Item[data-selected="true"]');
    if (item && question) {
        item.setAttribute("data-valid", QE_Answer_Index(question) >= 0 && question.choices.length ? "true" : "false");
    }
}
