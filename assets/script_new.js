// Sound effects
var Sound_Correct = new Audio("Assets/sounds/Correct_2.mp3");
var Sound_Wrong = new Audio("Assets/sounds/Wrong_2.mp3");
var Sound_Complete = new Audio("Assets/sounds/in.ogg");
var Sound_Excellent = new Audio("Assets/sounds/challenge_complete.ogg");
var Sound_Perfect = new Audio("Assets/sounds/challenge_complete_old.ogg");

window.onbeforeunload = function (event) {
    return confirm("Confirm refresh");
};

// Disable right-click context menu
document.addEventListener('contextmenu', function (e) {
    // alert('⚠️ Sorry. Di muna pwede mag right click here ⚠️')
    e.preventDefault();
});

// Disable certain keyboard shortcuts
document.onkeydown = function (e) {
    // Disable F12
    if (e.key == 123) {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    // Disable Ctrl+U
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};




$(document).ready(function () {
    wordflick();
});

// Script Here


function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleBtn = document.getElementById('t-btn');

    // If sidebar is visible, hide it; otherwise, show it
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'block';
        toggleBtn.style.display = 'none';
        sidebar.classList.remove("slide-left");


        // Add event listener to the body to hide sidebar when clicking outside
        document.addEventListener('click', function(event) {
            // Check if the click target is outside the sidebar and toggle button
            if (!sidebar.contains(event.target) && event.target !== toggleBtn) {
                sidebar.style.display = 'none';
                toggleBtn.style.display = 'block';
                sidebar.classList.add("slide-left");
                sidebar.classList.remove("slide-right");
            }
        });
    } else {
        sidebar.style.display = 'none';
        sidebar.classList.remove("slide-left");
    }
}


// Function to clone an array
function cloneArray(array) {
    return array.map(item => ({ ...item }));
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].choices = array[i].choices.sort(() => Math.random() - 0.5);
    }
    return array;
}

var currentQuestionIndex = 0;
var answered = false;


function createQuiz() {
    // document.getElementById('sidebar').style.display = 'block';

    answered = false;
    var clonedQuizData = cloneArray(quizData);
    shuffleArray(clonedQuizData);
    var form = document.getElementById('quiz-form');
    var question = clonedQuizData[currentQuestionIndex];
    var questionDiv = document.createElement('div');
    questionDiv.className = 'form-group';

    // Check if the question has an image, and if so, include it
    if (question.image) {
        var imageElement = document.createElement('img');
        imageElement.src = question.image;
        imageElement.alt = 'Question Image';
        imageElement.style.maxWidth = '100%';
        questionDiv.insertBefore(imageElement, questionDiv.firstChild); // This line changed
    }
    var questionText = document.createElement('p');
    questionText.innerText = question.questionText;
    questionDiv.appendChild(questionText);

    questionDiv.innerHTML += '<label>' + question.question + '</label>';

    // Add a data attribute to store the correct answer index
    questionDiv.setAttribute('data-correct-index', question.choices.indexOf(question.answer));

    for (var j = 0; j < question.choices.length; j++) {
        var choice = question.choices[j];
        var choiceId = 'question' + currentQuestionIndex + 'choice' + j;
        questionDiv.innerHTML += '<div class="form-check"><input class="form-check-input" type="radio" id="' + choiceId + '" name="question" value="' + choice + '"><label class="form-check-label" for="' + choiceId + '">' + choice + '</label></div>';
    }

    form.innerHTML = '';
    form.appendChild(questionDiv);

    // Update question number display
    var questionNumber = document.getElementById('question-number');
    questionNumber.textContent = ' Question ' + (currentQuestionIndex + 1) + ' out of ' + quizData.length;

    document.querySelector('.btn-next').style.display = 'none';
    document.querySelector('.btn-primary').style.display = 'block';
    document.getElementById('final-result').classList.add('d-none');

    // Populate the question list in the sidebar
    var questionList = document.getElementById('question-list');
    questionList.innerHTML = '';
    for (var i = 0; i < clonedQuizData.length; i++) {
        var listItem = document.createElement('li');
        listItem.innerHTML = '<a onclick="goToQuestion(' + i + ')">Question ' + (i + 1) + '</a>';
        questionList.appendChild(listItem);
    }
}





// Function to navigate to a specific question
function goToQuestion(index) {
    currentQuestionIndex = index;
    createQuiz();
    toggleSidebar(); // Close the sidebar after clicking a question
    // hide();
}

// This function checks the answer and shows the next question
function submitAnswer() {
    var form = document.getElementById('quiz-form');
    var selectedOption = form.querySelector('input[name="question"]:checked');

    if (!selectedOption) {
        // No option selected
        var result = document.getElementById('result');
        result.textContent = 'No option selected.';
        result.style.color = 'red';
        answered = true; // Set the answered status to true
        document.querySelector('.btn-next').style.display = 'block'; // Show Next button
        document.querySelector('.btn-primary').style.display = 'none'; // Hide Submit button
        disableOptions(); // Disable options after marking as incorrect
        Sound_Wrong.play(); 
        return;
    }

    if (answered) return; // If already answered, do nothing
    var answer = selectedOption.value;
    var result = document.getElementById('result');
    if (answer === quizData[currentQuestionIndex].answer) {
        // result.textContent = 'Correct!';
        // result.style.color = 'green';
        if (document.getElementById("Quiz_Checker_Correct") != null){
            document.getElementById("Quiz_Checker_Correct").setAttribute("State", "Active");
            setTimeout(function(){document.getElementById("Quiz_Checker_Correct").removeAttribute("State")}, 750);
            if (document.getElementById("Quiz_Form") != null){
                document.getElementById("Quiz_Form").setAttribute("Mode", "Answer_Correct");
            }
        }
        
        Sound_Correct.play();
    } else {
        result.textContent = 'Incorrect. The correct answer was: ' + quizData[currentQuestionIndex].answer;
        result.style.color = 'red';
        if (document.getElementById("Quiz_Checker_Wrong") != null){
            document.getElementById("Quiz_Checker_Wrong").setAttribute("State", "Active");
            setTimeout(function(){document.getElementById("Quiz_Checker_Wrong").removeAttribute("State")}, 750);
            if (document.getElementById("Quiz_Form") != null){
                document.getElementById("Quiz_Form").setAttribute("Mode", "Answer_Wrong");
            }
        }
       
        Sound_Wrong.play();

        highlightCorrectAnswer();
    }

    // Update the selected answer in the quizData array
    quizData[currentQuestionIndex].selectedAnswer = answer;

    answered = true; // Set the answered status to true
    disableOptions(); // Disable options after submitting answer
    document.querySelector('.btn-next').style.display = 'block'; // Show Next button
    document.querySelector('.btn-primary').style.display = 'none'; // Hide Submit button

    // Scroll to the bottom of the page
    window.scrollTo(0, document.body.scrollHeight);
}

// This function disables the options after submitting the answer
function disableOptions() {
    var options = document.querySelectorAll('.form-check input');
    options.forEach(function (option) {
        option.disabled = true;
    });
}

function nextQuestion() {
    var progress = (currentQuestionIndex + 1) / quizData.length * 100;
    document.querySelector('.progress-bar').style.width = progress + '%';
    var result = document.getElementById('result');
    result.textContent = '';

    document.getElementById("Quiz_Form").removeAttribute("Mode");
    

    var selectedOption = document.querySelector('input[name="question"]:checked');
    if (selectedOption) {
        selectedOption.checked = false;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= quizData.length) {
        displayFinalResult();
        return;
    }
    if (currentQuestionIndex < quizData.length) {
        createQuiz(); // Call createQuiz directly
    } else {
        result.textContent = 'Quiz completed!';
        result.style.color = 'black';
        document.querySelector('.btn-next').style.display = 'none';
        document.querySelector('.btn-primary').textContent = 'Retry'; // Change button text to 'Retry'
        Sound_Complete.play();
        document.querySelector('.btn-primary').onclick = function () {
            location.reload(); // Reload the page on 'Retry' button click
        };
    }

    answered = false;
    document.querySelector('.btn-next').style.display = 'none';
    document.querySelector('.btn-primary').style.display = 'block';

    console.log("Current Index after moving:", currentQuestionIndex);
}

// This function highlights the correct answer
function highlightCorrectAnswer() {
    var correctAnswer = quizData[currentQuestionIndex].answer;
    var labels = document.querySelectorAll('.form-check label');
    labels.forEach(function (label) {
        label.style.backgroundColor = ''; // Reset background color for all options
        if (label.textContent === correctAnswer) {
            label.style.backgroundColor = 'lightgreen';
        }
    });
}

function displayFinalResult() {
    Screens_Open("Quiz_Result", "Left");

    var resultContainer = document.getElementById('final-result');
    var score = calculateScore();
    var finalResultMessage = document.getElementById('final-result-message');
    var perfectScoreGif = document.getElementById('perfect-score-gif');
    var notPerfectScoreGif = document.getElementById('not-perfect-score-gif');
    Sound_Complete.play();
    if (score != 0){
        var percentage = (score / quizData.length) * 100;
        if (percentage == 100){
            pick_FinishingImage("Perfect");
            document.getElementById("Quiz_Result_FinisherImage").setAttribute("onclick", "pick_FinishingImage('Perfect')");
            document.getElementById("Quiz_Result_FinisherImage").style.opacity = "0%";
            Sound_Perfect.play();
        }
        if (percentage >= 85 && percentage <= 99){
            pick_FinishingImage("Excellent");
            document.getElementById("Quiz_Result_FinisherImage").setAttribute("onclick", "pick_FinishingImage('Excellent')");
            document.getElementById("Quiz_Result_FinisherImage").style.opacity = "0%";
            if (Math.random() >= 0.25){
                Sound_Excellent.play();
            }
        }
        if (percentage >= 50 && percentage <= 84){
            pick_FinishingImage("Good");
            document.getElementById("Quiz_Result_FinisherImage").setAttribute("onclick", "pick_FinishingImage('Good')");
            document.getElementById("Quiz_Result_FinisherImage").style.opacity = "0%";
            if (Math.random() >= 0.50){
                Sound_Excellent.play();
            }
        }
        if (percentage >= 0 && percentage <= 49){
            pick_FinishingImage("Terrible");
            document.getElementById("Quiz_Result_FinisherImage").setAttribute("onclick", "pick_FinishingImage('Terrible')");
            document.getElementById("Quiz_Result_FinisherImage").style.opacity = "0%";
            if (Math.random() >= 0.85){
                Sound_Excellent.play();
            }
        }
    } else {
        pick_FinishingImage("Terrible");
        document.getElementById("Quiz_Result_FinisherImage").setAttribute("onclick", "pick_FinishingImage('Terrible')");
        document.getElementById("Quiz_Result_FinisherImage").style.opacity = "0%";
    }
    
    // if (score === quizData.length) {
    //     // perfectScoreGif.classList.remove('d-none');
    //     // notPerfectScoreGif.classList.add('d-none');
    //     // finalResultMessage.textContent = 'Congratulations! You got a perfect score! Your final score is: ' + score + ' out of ' + quizData.length;
        
    // } else {
    //     // perfectScoreGif.classList.add('d-none');
    //     // notPerfectScoreGif.classList.remove('d-none');
    //     // finalResultMessage.textContent = 'Quiz completed! Your final score is: ' + score + ' out of ' + quizData.length;
    //     pick_FinishingImage("Good");
    // }

    resultContainer.style.color = 'black';
    resultContainer.classList.remove('d-none'); // Remove the 'd-none' class to show the container

    document.getElementById("Quiz_Result_Score").innerHTML = score + "/" + quizData.length;
}


// finalResultMessage.textContent = 'Congratulations! You got a perfect score! Your final score is: ' + score + ' out of ' + quizData.length ;


// function displayFinalResult() {
//     var resultContainer = document.getElementById('final-result');
//     var score = calculateScore();
//     resultContainer.textContent = 'Quiz completed! Your final result is: ' + score + ' out of ' + quizData.length;
//     resultContainer.style.color = 'black';
//     resultContainer.classList.remove('d-none'); // Remove the 'd-none' class to show the container
// }

function calculateScore() {
    var correctAnswers = 0;
    for (var i = 0; i < quizData.length; i++) {
        var selectedAnswer = getSelectedAnswer(i);
        console.log("Question", i + 1, "Selected Answer:", selectedAnswer, "Correct Answer:", quizData[i].answer);
        if (selectedAnswer !== null && selectedAnswer === quizData[i].answer) {
            correctAnswers++;
        }
    }
    return correctAnswers;
}



function getSelectedAnswer(index) {
    // Check if the selected answer is available in the quizData array
    if (index < quizData.length) {
        return quizData[index].selectedAnswer;
    }

    console.log("Selected answer not found for question", index + 1);
    return null;
}


// Now, you can shuffle your quizData like this:
// quizData = shuffleArray(quizData);

function shuffleArrayB(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Now, you can shuffle your quizData like this:
// quizData = shuffleArrayB(quizData);


function shuffleAndCreateQuiz() {

    if (confirm("This will reset your progress and shuffle the questions. Are you sure?") == true) {
        console.log("Working")
        window.location.reload();
    }
}




// Create the quiz when the page loads
// window.onload = createQuiz;

// Elmer's code heuheuheue
var quiz = {};
var quizInfo = {};
var quizData = [];

window.addEventListener("DOMContentLoaded", () => {
    load_QuizData();
    setTimeout(function(){
        document.getElementById("Quiz_Starter_Loader").setAttribute("State", "Inactive");
        document.getElementById("Quiz_Starter_Content").setAttribute("State", "Active");
    }, 5000);
});

function load_QuizData(){
    var Quiz_FileName = UF_Parameter_Get("Quiz");
    const request = new XMLHttpRequest();
    request.open("GET", "quizzes/" + Quiz_FileName + ".json", false);
    request.send();
    if (request.status === 200){
        var response = request.responseText;
        quiz = JSON.parse(response);
        quizInfo = quiz.quizInfo;
        quizData = quiz.quizData;
        quizData = shuffleArrayB(quizData);
        createQuiz();
        set_Information();
    } else {
        document.getElementById("Quiz_Starter_Loader").setAttribute("State", "Inactive");
        document.getElementById("Quiz_Starter_Content").setAttribute("State", "Active");
        document.getElementById("Quiz_Starter_Title").innerHTML = "Error";
        document.getElementById("Quiz_Starter_Subject").innerHTML = "An error occured when loading this quiz. The file may not exist, is not readable, or something else.";
        document.getElementById("Page_Title").innerHTML = "Error loading quiz";
        document.querySelector(".Quiz_Starter_Control").style.display = "none";
    }
}

function set_Information(){
    document.getElementById("Quiz_Starter_Title").innerHTML = quizInfo.Title;
    document.getElementById("Quiz_Starter_Subject").innerHTML = quizInfo.Subject + " (" + quizInfo.Term + ")";
    document.getElementById("Page_Title").innerHTML = quizInfo.Subject + " | " + quizInfo.Term + " | " + quizInfo.Title;
    document.getElementById("Quiz_Header_Title").innerHTML = quizInfo.Subject + " - " + quizInfo.Title
}

var finishers_perfect = ["images/Finisher_Perfect/perfect-score-100.gif", "images/Finisher_Perfect/perfect-sponge.gif", "images/Finisher_Perfect/try-me.gif"];
var finishers_good = ["images/Finisher_Good/clap.gif", "images/Finisher_Good/rikka-takanashi-takanashi-rikka.gif", "images/Finisher_Good/sanditon-just-try.gif", "images/Finisher_Good/that's-still-not-perfect-ignace-aleya.gif", "images/Finisher_Good/try-me.gif", "images/Finisher_Good/yes-win.gif", "images/Finisher_Good/YEYYYY.gif"];
var finishers_excellent = ["images/Finisher_Excellent/1.gif","images/Finisher_Excellent/2.gif","images/Finisher_Excellent/3.gif","images/Finisher_Excellent/4.gif","images/Finisher_Excellent/5.gif","images/Finisher_Excellent/6.gif","images/Finisher_Excellent/7.gif"];
var finishers_terrible = ["images/Finisher_Terrible/1.gif","images/Finisher_Terrible/2.gif","images/Finisher_Terrible/3.gif","images/Finisher_Terrible/4.gif","images/Finisher_Terrible/5.gif","images/Finisher_Terrible/6.gif","images/Finisher_Terrible/7.gif","images/Finisher_Terrible/8.gif","images/Finisher_Terrible/9.gif","images/Finisher_Terrible/10.gif"];

function pick_FinishingImage(State){
    document.getElementById("Quiz_Result_FinisherImage").style.opacity = "0%";
    if (State == "Perfect"){
        document.getElementById("Quiz_Result_FinisherImage").src = finishers_perfect[Math.floor(Math.random() * finishers_perfect.length)];
        document.getElementById("Quiz_Result_FinisherImage").style.display = "block";
    } else if (State == "Excellent") {
        document.getElementById("Quiz_Result_FinisherImage").src = finishers_excellent[Math.floor(Math.random() * finishers_excellent.length)];
        document.getElementById("Quiz_Result_FinisherImage").style.display = "block";
    } else if (State == "Good") {
        document.getElementById("Quiz_Result_FinisherImage").src = finishers_good[Math.floor(Math.random() * finishers_good.length)];
        document.getElementById("Quiz_Result_FinisherImage").style.display = "block";
    } 
    else if (State == "Terrible") {
        document.getElementById("Quiz_Result_FinisherImage").src = finishers_terrible[Math.floor(Math.random() * finishers_terrible.length)];
        document.getElementById("Quiz_Result_FinisherImage").style.display = "block";
    } 
}
