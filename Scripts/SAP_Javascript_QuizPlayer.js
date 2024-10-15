function MenuBar_Toggle(){
    if(Element_Attribute_Get("Sidebar", "State") == "Expanded"){
        Element_Attribute_Set("Sidebar", "State", "Collapsed");
    } else {
        Element_Attribute_Set("Sidebar", "State", "Expanded");
    }
}

function Quiz_Questions_List_Toggle(){
    if(Element_Attribute_Get("Quiz_Questions_List", "State") == "Expanded"){
        Element_Attribute_Set("Quiz_Questions_List", "State", "Collapsed");
        Element_Attribute_Set("Quiz_Questions_List_Toggle", "State", "");
    } else {
        Element_Attribute_Set("Quiz_Questions_List", "State", "Expanded");
        Element_Attribute_Set("Quiz_Questions_List_Toggle", "State", "Selected");
    }
}


var Sound_Complete = new Audio("Assets/Sound_Effects/in.ogg");
var Sound_Excellent = new Audio("Assets/Sound_Effects/challenge_complete.ogg");
var Sound_Perfect = new Audio("Assets/Sound_Effects/challenge_complete_old.ogg");


// Starting point
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(function(){
        document.getElementById("Quiz_Starter_Loader").setAttribute("State", "Inactive");
        document.getElementById("Quiz_Starter_Content").setAttribute("State", "Active");
    }, 500);
    Quiz_Load_Data();
});

// Starting functions
function Quiz_Start(){
    Quiz_Mode_Set();
    Element_Attribute_Set("Quiz_Starter", "State", "Inactive");
    setTimeout(function(){
        Element_Attribute_Set("Quiz_Starter", "Display", "none");
    }, 500);
    
    Quiz_Question_Build();
}

function Quiz_Mode_Set(){
    switch(Element_Attribute_Get("Quiz_Starter_Settings_Mode", "Radio_ActiveButton")){
        case "Mode_1":
            Quiz_Mode = "Multiple_Choices";
            document.getElementById("Quiz_Starter_Mode").innerHTML = "Multiple Choices";
            break;
        case "Mode_2":
            Quiz_Mode = "Identification";
            document.getElementById("Quiz_Starter_Mode").innerHTML = "Hard Mode";
            break;
        case "Mode_3":
            Quiz_Mode = "Flashcards";
            document.getElementById("Quiz_Starter_Mode").innerHTML = "Flashcards";
            break;
    }
    console.log(Quiz_Mode);
}

var Quiz_Mode = "Multiple_Choices";
var Quiz_Data = {};
var Quiz_Data_Metadata = {};
var Quiz_Data_Questions = [];
function Quiz_Load_Data(){
    var Quiz_FileName = UF_Parameter_Get("Quiz");
    const request = new XMLHttpRequest();
    request.open("GET", "quizzes/" + Quiz_FileName + ".json", false);
    request.send();
    if (request.status === 200){
        var response = request.responseText;
        Quiz_Data = JSON.parse(response);
        Quiz_Data_Metadata = Quiz_Data.quizInfo;
        Quiz_Data_Questions = Quiz_Order_Shuffle(Quiz_Data.quizData);
        Quiz_QuestionList_Build();
        
        Quiz_Header_Set();
        Quiz_FinisherImage_Pick();
    } else {
        document.getElementById("Quiz_Starter_Loader").setAttribute("State", "Inactive");
        document.getElementById("Quiz_Starter_Content").setAttribute("State", "Active");
        document.getElementById("Quiz_Starter_Title").innerHTML = "Error";
        document.getElementById("Quiz_Starter_Subject").innerHTML = "An error occured when loading this quiz. The file may not exist, is not readable, or something else.";
        document.getElementById("Page_Title").innerHTML = "Error loading quiz";
        document.querySelector(".Quiz_Starter_Control").style.display = "none";
    }
}

// Sets the header information
function Quiz_Header_Set(){
    document.getElementById("Quiz_Starter_Title").innerHTML = Quiz_Data_Metadata.Title;
    document.getElementById("Quiz_Starter_Subject").innerHTML = Quiz_Data_Metadata.Subject + " (" + Quiz_Data_Metadata.Term + ")";
    document.getElementById("Page_Title").innerHTML = Quiz_Data_Metadata.Subject + " | " + Quiz_Data_Metadata.Term + " | " + Quiz_Data_Metadata.Title;
    document.getElementById("Quiz_Header_Subject").innerHTML = Quiz_Data_Metadata.Subject;
    document.getElementById("Quiz_Header_Quiz").innerHTML = Quiz_Data_Metadata.Title;
}

// Builds the question list at the sidebar
function Quiz_QuestionList_Build(){
    // Clear the container
    document.getElementById("Quiz_Questions_List").innerHTML = "";
    for (a = 0; a < Quiz_Data_Questions.length; a++){
        // Creates the buttons
        var Quiz_Questions_List_Item = document.createElement('button');
        Quiz_Questions_List_Item.innerHTML = a + 1;
        Quiz_Questions_List_Item.setAttribute("id", "Quiz_Questions_List_Item_" + a);
        Quiz_Questions_List_Item.setAttribute("onclick", `Quiz_JumpTo_Question(${a})`);
        Quiz_Questions_List_Item.setAttribute("class", 'General_Button Quiz_Questions_List_Item');
        Quiz_Questions_List_Item.setAttribute("IsCurrent", 'False');
        document.getElementById("Quiz_Questions_List").appendChild(Quiz_Questions_List_Item);
    }
}

function Quiz_Order_Shuffle(Array){
    for (let i = Array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [Array[i], Array[j]] = [Array[j], Array[i]];
    }
    return Array;
}

function Quiz_Flashcard_Toggle(){
    if (Quiz_Mode == "Flashcards") {
        if (Element_Attribute_Get('Quiz_Form', 'Tabs_CurrentTab') == "Quiz_Form_Question_Container"){
            Element_Attribute_Set("Quiz_Form", "Tabs_CurrentTab", "Quiz_Form_Question_Answer_Container");
            Element_Attribute_Set("Quiz_Form_Question_Container", "State", "Hidden");
            Element_Attribute_Set("Quiz_Form_Question_Answer_Container", "State", "Visible");
        } else {
            Element_Attribute_Set("Quiz_Form", "Tabs_CurrentTab", "Quiz_Form_Question_Container");
            Element_Attribute_Set("Quiz_Form_Question_Container", "State", "Visible");
            Element_Attribute_Set("Quiz_Form_Question_Answer_Container", "State", "Hidden");
        }
    }
    
}

// The index of the currently accessed question
var Quiz_Question_CurrentIndex = 0;
// The index of the correct answer of the currently accessed question
var Quiz_Question_CurrentIndex_Correct = 0;
// User score
var Quiz_Score = 0;

// Builds the question form
function Quiz_Question_Build(){
    var Question = Quiz_Data_Questions[Quiz_Question_CurrentIndex]
    // Shuffles the choices of the questions
    Question.choices = Quiz_Order_Shuffle(Question.choices);
    // Clears the choices container and resets its state
    document.getElementById("Quiz_Form_Input_Text").value = "";
    document.getElementById("Quiz_Form_Choices").innerHTML = "";
    Element_Attribute_Set("Quiz_Form_Choices", "Radio_ActiveButton", "");

    // Pre-check
    if (Quiz_Mode == "Multiple_Choices"){
        Element_Attribute_Set("Quiz_Form", "Form_Mode", "Question");

        Element_Attribute_Set("Quiz_Form_Choices", "Display", "block");
        Element_Attribute_Set("Quiz_Form_Input", "Display", "none");
        Element_Attribute_Set("Quiz_Form_Flashcard", "Display", "none");
        Element_Attribute_Set("Quiz_Form_Controls_Next_Flashcards", "Display", "none");
    } else if (Quiz_Mode == "Identification") {
        Element_Attribute_Set("Quiz_Form", "Form_Mode", "Question");

        Element_Attribute_Set("Quiz_Form_Choices", "Display", "none");
        Element_Attribute_Set("Quiz_Form_Input", "Display", "block");
        Element_Attribute_Set("Quiz_Form_Input_Answer", "Display", "none");
        Element_Attribute_Set("Quiz_Form_Flashcard", "Display", "none");
        Element_Attribute_Set("Quiz_Form_Controls_Next_Flashcards", "Display", "none");
    } else if (Quiz_Mode == "Flashcards") {
        Element_Attribute_Set("Quiz_Form", "Form_Mode", "Flashcards");

        Element_Attribute_Set("Quiz_Form_Choices", "Display", "none");
        Element_Attribute_Set("Quiz_Form_Input", "Display", "none");
        Element_Attribute_Set("Quiz_Form_Flashcard", "Display", "block");
        Element_Attribute_Set("Quiz_Form_Controls_Submit", "Display", "none");
        Element_Attribute_Set("Quiz_Form_Controls_Next_Flashcards", "Display", "block");
    }


    // Finds the index of the choice that matches the correct answer
    Quiz_Question_CurrentIndex_Correct = 0;
    if (Quiz_Mode == "Multiple_Choices"){
        for (a = 0; a < Question.choices.length; a++){
            // If the value is an object
            if (typeof Question.choices[a] === 'object'){
                if (Question.answer == Question.choices[a].text){
                    Quiz_Question_CurrentIndex_Correct = a;
                    // Sets the attribute to the index of the correct answer
                    Element_Attribute_Set("Quiz_Form_Choices", "Question_CorrectAnswer", "Choice_" + Quiz_Question_CurrentIndex_Correct);
                    console.log(Quiz_Question_CurrentIndex_Correct);
                    break;
                }
            // If the value is plain text
            } else {
                if (Question.answer == Question.choices[a]){
                    Quiz_Question_CurrentIndex_Correct = a;
                    // Sets the attribute to the index of the correct answer
                    Element_Attribute_Set("Quiz_Form_Choices", "Question_CorrectAnswer", "Choice_" + Quiz_Question_CurrentIndex_Correct);
                    console.log(Quiz_Question_CurrentIndex_Correct);
                    break;
                }
            } 
        }
    } else if (Quiz_Mode == "Identification"){
        // Sets the attribute to the text of the correct answer
        Element_Attribute_Set("Quiz_Form_Choices", "Question_CorrectAnswer", Question.answer.toUpperCase());
        Quiz_Question_CurrentIndex_Correct = 1;
    } else if (Quiz_Mode == "Flashcards") {
        Element_Attribute_Set("Quiz_Form_Choices", "Question_CorrectAnswer", Question.answer.toUpperCase());
        Quiz_Question_CurrentIndex_Correct = 1;
        document.getElementById("Quiz_Form_Flashcard_Answer").innerHTML = Element_Attribute_Get("Quiz_Form_Choices", "Question_CorrectAnswer");
    }
    

    // Changes the question text
    document.getElementById("Quiz_Form_Question").innerHTML = Question.question;

    // If the index of the correct answer is 0, then the choices doesn't have the correct answer; Add warning to the questiontext
    // if (Quiz_Question_CurrentIndex_Correct == 0){
        // document.getElementById("Quiz_Form_Question").innerHTML = Question.question + " [CHOICES DOESN'T HAVE THE ANSWER]";
    //     console.log("CHOICES DOESN'T HAVE THE ANSWER");
    // }

    // Generates the choices
    for (b = 0; b < Question.choices.length; b++){
        var Choice_Item = document.createElement('button');
        Choice_Item.setAttribute("id", "Choice_" + b);
        Choice_Item.setAttribute("class", "Radio_Button Quiz_Form_Choices_Item");
        Choice_Item.setAttribute("onclick", "Radio_Select(this.id)");
        Choice_Item.setAttribute("State", "Inactive");
        // If the value is an object
        if (typeof Question.choices[b] === 'object'){
            Choice_Item.innerHTML = `
                ${Question.choices[b].text}<br>
                <img class='Quiz_Form_Choices_Item_Image' src='${Question.choices[b].image}' draggable='false' loading='lazy' onerror='this.style.display = "none"'/>
            `
        // If the value is plain text
        } else {
            Choice_Item.innerHTML = Question.choices[b];
        }        
        document.getElementById("Quiz_Form_Choices").appendChild(Choice_Item);
    }

    // Hides the image element
    Element_Attribute_Set("Quiz_Form_Image", "Display", "none");
    // Check if the question has an image property, and set its source into the image element
    if (Question.image != null){
        document.getElementById("Quiz_Form_Image_Image").src = "Assets/Images/Thumbnails/Image_Loading.png";
        document.getElementById("Quiz_Form_Image_Image").src = Question.image;
        Element_Attribute_Set("Quiz_Form_Image", "Display", "block");
    } else {
        Element_Attribute_Set("Quiz_Form_Image", "Display", "none");
    }

    // Updates the question number display from the header
    document.getElementById("Quiz_Header_Progress_Counter").innerText = `Question ${Quiz_Question_CurrentIndex + 1} out of ${Quiz_Data_Questions.length}`;

    // Sets the correct control buttons
    if (Quiz_Mode != "Flashcards"){
        Element_Attribute_Set("Quiz_Form_Controls_Submit", "Display", "block");
    }    
    Element_Attribute_Set("Quiz_Form_Controls_Next", "Display", "none");

    // Shades the currently selected question list item
    for (c = 0; c < Quiz_Data_Questions.length; c++){
        Element_Attribute_Set("Quiz_Questions_List_Item_" + c, "IsCurrent", "False");
    }
    Element_Attribute_Set("Quiz_Questions_List_Item_" + Quiz_Question_CurrentIndex, "IsCurrent", "True");

    // Updates the progress bar
    document.getElementById("Quiz_Header_Progress_Bar").style.width = (Quiz_Question_CurrentIndex + 1) / Quiz_Data_Questions.length * 100 + "%";

    // Resets contianer state
    Element_Attribute_Remove("Quiz_Form", "Mode");
}

// Jumps to a specific question
function Quiz_JumpTo_Question(Index){
    Quiz_Question_CurrentIndex = Index;
    Quiz_Question_Build();
}

// Submits and checks answer
function Quiz_Evaluate_Answer(){
    // Gets the chosen answer and the correct answer from the choices container
    if (Quiz_Mode == "Multiple_Choices"){
        var Quiz_ChosenAnswer = Element_Attribute_Get("Quiz_Form_Choices", "Radio_ActiveButton");
    } else if (Quiz_Mode == "Identification") {
        var Quiz_ChosenAnswer = document.getElementById("Quiz_Form_Input_Text").value.toUpperCase();
    }
    
    var Quiz_CorrectAnswer = Element_Attribute_Get("Quiz_Form_Choices", "Question_CorrectAnswer");
    
    // Checks if the correct answer exists in the choices.
    // if (Quiz_Question_CurrentIndex_Correct != 0){
        // Case 1: The chosen answer is blank (no option selected) OR The chosen answer doesn't match the correct answer (wrong answer)
        if (Quiz_ChosenAnswer == "" || Quiz_ChosenAnswer != Quiz_CorrectAnswer){
            Quiz_Answer_Result("Wrong");
        }
        // Case 2: Thechosen answer matches the correct answer (correct answer)
        if (Quiz_ChosenAnswer == Quiz_CorrectAnswer){
            Quiz_Answer_Result("Correct");
        }
    // If the correct answer doesn't exist in the choices, automatically mark the question as correct.
    // } else {
    //     Quiz_Answer_Result("Correct");
    // }
    
}

// Determines the action taken depending on the verdict of Quiz_Evaluate_Answer
function Quiz_Answer_Result(Verdict){
    var Sound_Correct = new Audio("Assets/Sound_Effects/Correct_2.mp3");
    var Sound_Wrong = new Audio("Assets/Sound_Effects/Wrong_2.mp3");
    // Verdict 1: The answer is wrong
    if (Verdict == "Wrong"){
        Quiz_Answer_Highlight();
        Element_Attribute_Set("Quiz_Form", "Mode", "Answer_Wrong");
        Element_Attribute_Set("Quiz_Questions_List_Item_" + Quiz_Question_CurrentIndex, "IsCorrect", "False");
        Sound_Wrong.play();
        Element_Attribute_Set("Quiz_Checker_Wrong", "State", "Active");
        setTimeout(function(){Element_Attribute_Remove("Quiz_Checker_Wrong", "State")}, 750);
    }
    // Verdict 2: The answer is correct
    if (Verdict == "Correct"){
        Quiz_Score++;
        Element_Attribute_Set("Quiz_Form", "Mode", "Answer_Correct");
        Element_Attribute_Set("Quiz_Questions_List_Item_" + Quiz_Question_CurrentIndex, "IsCorrect", "True");
        Sound_Correct.play();
        Element_Attribute_Set("Quiz_Checker_Correct", "State", "Active");
        setTimeout(function(){Element_Attribute_Remove("Quiz_Checker_Correct", "State")}, 750);
    }
    // Disable the clickability of the question list item
    Element_Attribute_Set("Quiz_Questions_List_Item_" + Quiz_Question_CurrentIndex, "Clickability", "Disabled")
    // Disable the clickability of all choices
    for (a = 0; a < document.querySelectorAll(".Quiz_Form_Choices_Item").length; a++){
        Element_Attribute_Set("Choice_" + a, "Clickability", "Disabled")
    }
    // Sets the correct control buttons
    Element_Attribute_Set("Quiz_Form_Controls_Submit", "Display", "none");
    Element_Attribute_Set("Quiz_Form_Controls_Next", "Display", "block");
    // Focuses on the Next button
    document.getElementById("Quiz_Form_Controls_Next").focus();
}

// Highlights the correct answer
function Quiz_Answer_Highlight(){
    if (Quiz_Mode == "Multiple_Choices"){
        Element_Attribute_Set(Element_Attribute_Get("Quiz_Form_Choices", "Question_CorrectAnswer"), "Highlight", "True");
    } else if (Quiz_Mode == "Identification") {
        Element_Attribute_Set("Quiz_Form_Input_Answer", "Display", "block");
        document.getElementById("Quiz_Form_Input_Answer_Text").innerHTML = Element_Attribute_Get("Quiz_Form_Choices", "Question_CorrectAnswer");
    }
    
}

// Moves to the next question
function Quiz_Question_Next(){
    Quiz_Question_CurrentIndex++;
    // Case 1: If the current index is the final one, display the result screen
    if (Quiz_Question_CurrentIndex >= Quiz_Data_Questions.length && Quiz_Mode != "Flashcards") {
        Quiz_Score_Calculate();
    }
    // Case 2: If the current index is not the final one, proceed to the next unanswered one
    if (Quiz_Question_CurrentIndex < Quiz_Data_Questions.length){
        // If the question had not been answered yet, build the question
        if (Element_Attribute_Get("Quiz_Questions_List_Item_" + Quiz_Question_CurrentIndex, "Clickability") != "Disabled"){
            Quiz_Question_Build();
            // Sets focus
            if (Quiz_Mode == "Multiple_Choices"){
                document.getElementById("Quiz_Form_Decoy").focus();
            } else if (Quiz_Mode == "Identification") {
                document.getElementById("Quiz_Form_Input_Text").focus();
            }
        } 
        // If the question had been answered, trigger this function again until it finds the next unanswered one
        else {
            Quiz_Question_Next();
        }
    }
}

var Finishers_Perfect = ["Assets/Images/Finisher_Perfect/perfect-score-100.gif", 
    "Assets/Images/Finisher_Perfect/perfect-sponge.gif", 
    "Assets/Images/Finisher_Perfect/try-me.gif"];
var Finishers_Good = ["Assets/Images/Finisher_Good/clap.gif", 
    "Assets/Images/Finisher_Good/rikka-takanashi-takanashi-rikka.gif", 
    "Assets/Images/Finisher_Good/sanditon-just-try.gif", 
    "Assets/Images/Finisher_Good/that's-still-not-perfect-ignace-aleya.gif", 
    "Assets/Images/Finisher_Good/try-me.gif", 
    "Assets/Images/Finisher_Good/yes-win.gif", 
    "Assets/Images/Finisher_Good/YEYYYY.gif"];
var Finishers_Excellent = ["Assets/Images/Finisher_Excellent/1.gif",
    "Assets/Images/Finisher_Excellent/2.gif",
    "Assets/Images/Finisher_Excellent/3.gif",
    "Assets/Images/Finisher_Excellent/4.gif",
    "Assets/Images/Finisher_Excellent/5.gif",
    "Assets/Images/Finisher_Excellent/6.gif",
    "Assets/Images/Finisher_Excellent/7.gif"];
var Finishers_Terrible = ["Assets/Images/Finisher_Terrible/1.gif",
    "Assets/Images/Finisher_Terrible/2.gif",
    "Assets/Images/Finisher_Terrible/3.gif",
    "Assets/Images/Finisher_Terrible/4.gif",
    "Assets/Images/Finisher_Terrible/5.gif",
    "Assets/Images/Finisher_Terrible/6.gif",
    "Assets/Images/Finisher_Terrible/7.gif",
    "Assets/Images/Finisher_Terrible/8.gif",
    "Assets/Images/Finisher_Terrible/9.gif",
    "Assets/Images/Finisher_Terrible/10.gif"];

// Preloads the finisher images
function Quiz_FinisherImage_Pick(){
    // Perfect
    document.getElementById("Quiz_Finisher_Result_Image_Perfect").src = Finishers_Perfect[Math.floor(Math.random() * Finishers_Perfect.length)];
    // Good
    document.getElementById("Quiz_Finisher_Result_Image_Good").src = Finishers_Good[Math.floor(Math.random() * Finishers_Good.length)];
    // Excellent
    document.getElementById("Quiz_Finisher_Result_Image_Excellent").src = Finishers_Excellent[Math.floor(Math.random() * Finishers_Excellent.length)];
    // Terrible
    document.getElementById("Quiz_Finisher_Result_Image_Terrible").src = Finishers_Terrible[Math.floor(Math.random() * Finishers_Terrible.length)];    
}

// Calculates the final score and chooses a verdict
function Quiz_Score_Calculate(){
    var Score_Percentage = (Quiz_Score / Quiz_Data_Questions.length)  * 100;
    document.getElementById("Quiz_Finisher_Result_Score_Text").innerHTML = Quiz_Score + "/" + Quiz_Data_Questions.length;
    document.getElementById("Quiz_Finisher_Result_Score_Percentage_Text").innerHTML = Math.round(Score_Percentage) + "%";
    if (Score_Percentage == 100){
        Quiz_Finish("Perfect");
    } else if (Score_Percentage >= 85 && Score_Percentage <= 99) {
        Quiz_Finish("Excellent");
    } else if (Score_Percentage >= 50 && Score_Percentage <= 84) {
        Quiz_Finish("Good");
    } else if (Score_Percentage >= 0 && Score_Percentage <= 49) {
        Quiz_Finish("Terrible");
    }
    Quiz_Finish();
}

// Finish the quiz and display the result screen
function Quiz_Finish(Verdict){
    Element_Attribute_Set("Page_Content", "State", "Hide");
    Element_Attribute_Set("Sidebar", "State", "Hide");
    Element_Attribute_Set("Quiz_Questions_List_Toggle", "Display", "none");
    Element_Attribute_Set("Quiz_Finisher", "State", "Active");
    Sound_Complete.play();
    if (Verdict == "Perfect") {
        Element_Attribute_Set("Quiz_Finisher_Result_Image_Perfect", "Display", "block");
        Sound_Perfect.play();
    } else if (Verdict == "Excellent") {
        Element_Attribute_Set("Quiz_Finisher_Result_Image_Excellent", "Display", "block");
        if (Math.random() >= 0.25){
            Sound_Excellent.play();
        }
    } else if (Verdict == "Good") {
        Element_Attribute_Set("Quiz_Finisher_Result_Image_Good", "Display", "block");
        if (Math.random() >= 0.50){
            Sound_Excellent.play();
        }
    } else if (Verdict == "Terrible") {
        Element_Attribute_Set("Quiz_Finisher_Result_Image_Terrible", "Display", "block");
        if (Math.random() >= 0.85){
            Sound_Excellent.play();
        }
    }
    document.getElementById("Quiz_Finisher_Controls_Button_Retry").focus();
}