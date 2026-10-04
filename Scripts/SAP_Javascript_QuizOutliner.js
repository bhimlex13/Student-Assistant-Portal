window.addEventListener("DOMContentLoaded", () => {
    setTimeout(LoadingScreen_Hide, 500);
    const quizParam = UF_Parameter_Get("quiz") || UF_Parameter_Get("Quiz");
    if (quizParam != null){
        QO_Quiz_Load(quizParam);
    }
    Element_Attribute_Set("Quizzes_Explorer", "Type", "Text");
})

var QO_Quiz_Info = {};
var QO_Quiz_Data = {};

function QO_Quiz_Load(ID){
    QO_Quiz_Info = Data_Import_FromPath(`quizzes/${ID}.json`, "JSON").quizInfo;
    QO_Quiz_Data = Data_Import_FromPath(`quizzes/${ID}.json`, "JSON").quizData;
    Element_InnerHTML_Set("QO_List_Title", QO_Quiz_Info.Title);
    Element_InnerHTML_Set("QO_List_Info", `${QO_Quiz_Info.Subject} | ${QO_Quiz_Info.Term} | ${ID}`);
    Element_InnerText_Set("Page_Title", `Student Assistant Portal | ${ID} : ${QO_Quiz_Info.Title}`);
    Subwindows_Close("QO_Quiz_Open");
    UF_Parameter_Set("quiz", ID);
    QO_Quiz_List_Generate();
}

function QO_Quiz_List_Generate(){
    Element_Clear("QO_List");
    for(a = 0; a < QO_Quiz_Data.length; a++){
        var Question = QO_Quiz_Data[a];
        var Quiz_List_Item_Radio = document.createElement('div');
        Quiz_List_Item_Radio.setAttribute("Radio_ActiveButton", "");
        Quiz_List_Item_Radio.setAttribute("class", "Radio QO_List_Item_Choices");
        Quiz_List_Item_Radio.setAttribute("Clickability", "Disabled");
        Quiz_List_Item_Radio.setAttribute("id", "QO_Quiz_List_Item_Choices_" + a);
        // Generate radio buttons
       var Quiz_Question_CurrentIndex_Correct = 0;
        for (b = 0; b < Question.choices.length; b++){
            // If the value is an object
            if (typeof Question.choices[b] === 'object'){
                if (Question.answer == Question.choices[b].text){
                    Quiz_Question_CurrentIndex_Correct = b;
                    // Sets the attribute to the index of the correct answer
                    Quiz_List_Item_Radio.setAttribute("Question_CorrectAnswer", `QO_Quiz_List_Item_${a}_Choices_${Quiz_Question_CurrentIndex_Correct}`)
                    console.log(Quiz_Question_CurrentIndex_Correct);
                    break;
                }
            // If the value is plain text
            } else {
                if (Question.answer == Question.choices[b]){
                    Quiz_Question_CurrentIndex_Correct = b;
                    // Sets the attribute to the index of the correct answer
                    Quiz_List_Item_Radio.setAttribute("Question_CorrectAnswer", `QO_Quiz_List_Item_${a}_Choices_${Quiz_Question_CurrentIndex_Correct}`)
                    console.log(Quiz_Question_CurrentIndex_Correct);
                    break;
                }
            } 
        }
        for (c = 0; c < Question.choices.length; c++){
            var Choice_Item = document.createElement('button');
            Choice_Item.setAttribute("id", `QO_Quiz_List_Item_${a}_Choices_${c}`);
            Choice_Item.setAttribute("class", "Radio_Button Quiz_Form_Choices_Item");
            Choice_Item.setAttribute("onclick", "Radio_Select(this.id)");
            Choice_Item.setAttribute("State", "Inactive");
            Choice_Item.setAttribute("disabled", "");
            // If the value is an object
            if (typeof Question.choices[c] === 'object'){
                Choice_Item.innerHTML = `
                    ${Format_Quiz_Text(Question.choices[c].text)}<br>
                    <img class='Quiz_Form_Choices_Item_Image' src='${Question.choices[c].image}' draggable='false' loading='lazy' onerror='this.style.display = "none"'/>
                `
            // If the value is plain text
            } else {
                Choice_Item.innerHTML = Format_Quiz_Text(Question.choices[c]);
            }        
            if(`QO_Quiz_List_Item_${a}_Choices_${c}` == `QO_Quiz_List_Item_${a}_Choices_${Quiz_Question_CurrentIndex_Correct}`){
                Choice_Item.setAttribute("State", "Active");
            }
            Quiz_List_Item_Radio.appendChild(Choice_Item);
            
        }

        // Generate the rest of the elements
        var QO_Quiz_List_Item_InnerHTML = `
            <div class="QO_List_Item_Number">
                <h2 class="QO_List_Item_Number_Text">
                    ${a + 1}.
                </h2>
            </div>
            <div class="QO_List_Item_Question">
                <h2 class="QO_List_Item_Question_Text">
                    ${Format_Quiz_Text(Question.question)}
                </h2>
            </div>
            
        `
        var QO_Quiz_List_Item = document.createElement('div');
        QO_Quiz_List_Item.setAttribute("class", "QO_List_Item");
        QO_Quiz_List_Item.setAttribute("id", "QO_List_Item_" + a);
        QO_Quiz_List_Item.innerHTML = QO_Quiz_List_Item_InnerHTML;
        QO_Quiz_List_Item.appendChild(Quiz_List_Item_Radio);
        document.getElementById("QO_List").appendChild(QO_Quiz_List_Item);
        console.log("Success " + a);
    }
    QO_Quiz_List_Side_Generate();
}

function QO_Quiz_List_Side_Generate(){
    // Clear the container
    document.getElementById("Quiz_Questions_List").innerHTML = "";
    for (a = 0; a < QO_Quiz_Data.length; a++){
        // Creates the buttons
        var Quiz_Questions_List_Item = document.createElement('button');
        Quiz_Questions_List_Item.innerHTML = a + 1;
        Quiz_Questions_List_Item.setAttribute("id", "Quiz_Questions_List_Item_" + a);
        Quiz_Questions_List_Item.setAttribute("onclick", `QO_Quiz_List_Side_JumpTo(${a})`);
        Quiz_Questions_List_Item.setAttribute("class", 'General_Button Quiz_Questions_List_Item');
        Quiz_Questions_List_Item.setAttribute("IsCurrent", 'False');
        Quiz_Questions_List_Item.setAttribute("IsAnswered", 'False');
        document.getElementById("Quiz_Questions_List").appendChild(Quiz_Questions_List_Item);
    }
}

function QO_Quiz_List_Side_JumpTo(ID){
    document.getElementById(`QO_List_Item_${ID}`).scrollIntoView();
}

function QO_Tool_State_Change(ID){
    if (ID == "QO_Tool_ShowAnswersOnly"){
        if (Element_Attribute_Get("QO_Tool_ShowAnswersOnly", "State") == "Active"){
            // Element_Attribute_Set("QO_Tool_ShowAnswersOnly", "State", "Inactive");
            Element_Attribute_Set("QO_List", "State_ShowAnswers", "Active");
        } else {
            // Element_Attribute_Set("QO_Tool_ShowAnswersOnly", "State", "Active");
            Element_Attribute_Set("QO_List", "State_ShowAnswers", "Inactive");
        }
    }
    if (ID == "QO_Tool_GridView"){
        if (Element_Attribute_Get("QO_Tool_GridView", "State") == "Active"){
            // Element_Attribute_Set("QO_Tool_GridView", "State", "Inactive");
            Element_Attribute_Set("QO_List", "State_GridView", "Active");
        } else {
            // Element_Attribute_Set("QO_Tool_GridView", "State", "Active");
            Element_Attribute_Set("QO_List", "State_GridView", "Inactive");
        }
    }
    if (ID == "QO_Tool_ShowAnswers"){
        if (Element_Attribute_Get("QO_Tool_ShowAnswers", "State") == "Active"){
            // Element_Attribute_Set("QO_Tool_GridView", "State", "Inactive");
            Element_Attribute_Set("QO_List", "State_HighlightAnswers", "Active");
        } else {
            // Element_Attribute_Set("QO_Tool_GridView", "State", "Active");
            Element_Attribute_Set("QO_List", "State_HighlightAnswers", "Inactive");
        }
    }
}

// Maps a fenced-code language tag to the badge and class shown by the quiz player.
// Unmarked fences stay Java so existing questions keep their current badge.
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

// Formats quiz question and choice text to support rich code blocks, inline code, and clean typography
function Format_Quiz_Text(rawText) {
    if (rawText === null || rawText === undefined) return "";
    if (typeof rawText !== "string") return String(rawText);

    // 1. Strip remaining citations like [cite: 1], [cite: 1, 2]
    let text = rawText.replace(/\s*\[cite:\s*[\d,\s]+\]/gi, "");

    // 2. Normalize spaced or malformed backticks: e.g. ` ` ` -> ```
    text = text.replace(/`(\s*`){2,}/g, "```");
    text = text.replace(/`{4,}/g, "```");

    // 3. Extract fenced blocks. The language token is read in full, so `c` does not swallow `csharp` or `cpp`.
    const codeBlocks = [];
    text = text.replace(/```([^\n`]*)(\n)?([\s\S]*?)```/g, function (match, infoLine, newline, code) {
        const fence = Quiz_Format_Code_Fence(infoLine, newline, code);
        const placeholder = "___CODE_BLOCK_" + codeBlocks.length + "___";
        const trimmedCode = String(fence.body || "").replace(/\r/g, "").replace(/^\n+|\n+$/g, "");
        const className = fence.info.className;
        const badge = Quiz_Escape_HTML(fence.info.badge);
        codeBlocks.push(`
            <div class="Quiz_Code_Block_Container ${className}">
                <div class="Quiz_Code_Header">
                    <span class="Quiz_Code_Lang_Badge ${className}">${badge}</span>
                    <button type="button" class="Quiz_Code_Copy_Btn" onclick="Quiz_Copy_Code(this)">Copy</button>
                </div>
                <pre class="Quiz_Code_Block"><code class="${className}">${Quiz_Escape_HTML(trimmedCode)}</code></pre>
            </div>
        `);
        return placeholder;
    });

    // 4. Extract and format inline code `...`
    const inlineCodes = [];
    text = text.replace(/`([^`\n]+)`/g, function (match, inlineCode) {
        const placeholder = "___INLINE_CODE_" + inlineCodes.length + "___";
        inlineCodes.push('<code class="Quiz_Inline_Code">' + Quiz_Escape_HTML(inlineCode) + "</code>");
        return placeholder;
    });

    // 5. Escape general HTML in the text outside code blocks
    text = Quiz_Escape_HTML(text);

    // 6. Convert newlines outside code blocks to spacers / line breaks
    text = text.replace(/\n\n+/g, '<div class="Quiz_Question_Paragraph_Spacer"></div>');
    text = text.replace(/\n/g, "<br>");

    // 7. Restore code blocks & inline code
    inlineCodes.forEach(function (codeHtml, idx) {
        text = text.replace("___INLINE_CODE_" + idx + "___", codeHtml);
    });
    codeBlocks.forEach(function (blockHtml, idx) {
        text = text.replace("___CODE_BLOCK_" + idx + "___", blockHtml);
    });

    return text;
}

// Copy button functionality for code snippets
function Quiz_Copy_Code(btn) {
    const container = btn.closest(".Quiz_Code_Block_Container");
    if (!container) return;
    const codeEl = container.querySelector("code");
    if (!codeEl) return;
    const textToCopy = codeEl.innerText;
    navigator.clipboard.writeText(textToCopy).then(function() {
        const originalText = btn.innerText;
        btn.innerText = "Copied!";
        btn.classList.add("Copied");
        setTimeout(function() {
            btn.innerText = originalText;
            btn.classList.remove("Copied");
        }, 1500);
    }).catch(function() {
        btn.innerText = "Copied!";
        setTimeout(function() { btn.innerText = "Copy"; }, 1500);
    });
}