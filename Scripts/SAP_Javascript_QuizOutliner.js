window.addEventListener("DOMContentLoaded", () => {
    setTimeout(LoadingScreen_Hide, 500);
    if (UF_Parameter_Get("quiz") != null){
        QO_Quiz_Load(UF_Parameter_Get("quiz"));
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
                    ${Question.choices[c].text}<br>
                    <img class='Quiz_Form_Choices_Item_Image' src='${Question.choices[c].image}' draggable='false' loading='lazy' onerror='this.style.display = "none"'/>
                `
            // If the value is plain text
            } else {
                Choice_Item.innerHTML = Question.choices[c];
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
                    ${Question.question}
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