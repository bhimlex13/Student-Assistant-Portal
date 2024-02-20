
window.onbeforeunload = function(event) {
    return confirm("Confirm refresh");
};


// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  
  // Disable certain keyboard shortcuts
  document.onkeydown = function(e) {
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
    sidebar.style.display = sidebar.style.display === 'none' || sidebar.style.display === '' ? 'block' : 'none';
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
    questionNumber.textContent = ' Question: ' + (currentQuestionIndex + 1) + ' out of ' + quizData.length;

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
}

// This function checks the answer and shows the next question
function submitAnswer() {
    var form = document.getElementById('quiz-form');
    var selectedOption = form.querySelector('input[name="question"]:checked');

    if (!selectedOption) {
        // No option selected
        var result = document.getElementById('result');
        result.textContent = 'Incorrect. No option selected.';
        result.style.color = 'red';
        answered = true; // Set the answered status to true
        document.querySelector('.btn-next').style.display = 'block'; // Show Next button
        document.querySelector('.btn-primary').style.display = 'none'; // Hide Submit button
        disableOptions(); // Disable options after marking as incorrect
        return;
    }

    if (answered) return; // If already answered, do nothing
    var answer = selectedOption.value;
    var result = document.getElementById('result');
    if (answer === quizData[currentQuestionIndex].answer) {
        result.textContent = 'Correct!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Incorrect. The correct answer was: ' + quizData[currentQuestionIndex].answer;
        result.style.color = 'red';
        highlightCorrectAnswer();
    }

    // Update the selected answer in the quizData array
    quizData[currentQuestionIndex].selectedAnswer = answer;

    answered = true; // Set the answered status to true
    disableOptions(); // Disable options after submitting answer
    document.querySelector('.btn-next').style.display = 'block'; // Show Next button
    document.querySelector('.btn-primary').style.display = 'none'; // Hide Submit button
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
    var resultContainer = document.getElementById('final-result');
    var score = calculateScore();
    var finalResultMessage = document.getElementById('final-result-message');
    var perfectScoreGif = document.getElementById('perfect-score-gif');
    var notPerfectScoreGif = document.getElementById('not-perfect-score-gif');

    if (score === quizData.length) {
        perfectScoreGif.classList.remove('d-none');
        notPerfectScoreGif.classList.add('d-none');
        finalResultMessage.textContent = 'Congratulations! You got a perfect score! Your final score is: ' + score + ' out of ' + quizData.length ;
    } else {
        perfectScoreGif.classList.add('d-none');
        notPerfectScoreGif.classList.remove('d-none');
        finalResultMessage.textContent = 'Quiz completed! Your final score is: ' + score + ' out of ' + quizData.length;
    }

    resultContainer.style.color = 'black';
    resultContainer.classList.remove('d-none'); // Remove the 'd-none' class to show the container
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
quizData = shuffleArrayB(quizData);


function shuffleAndCreateQuiz() {

    if (confirm("This will reset your progress and shuffle the questions. Are you sure?") == true) {
        console.log("Working")
        window.location.reload();
    }
}


// Create the quiz when the page loads
window.onload = createQuiz;
