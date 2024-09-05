let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let answerSelected = 0;

function startQuiz() {
    document.getElementById('startcontainer').style.display = 'none';
    document.getElementById('quizcontainer').style.display = 'block';
    displayQuestion(currentQuestionIndex);
    startTimer();
}

function displayQuestion(index) {
    const quizContainer = document.getElementById('quizcontainer');
    const question = Questions[index];

    let html = '<h2>' + question.Question + '</h2>';

    for (let key in question.Options) {
        html = html + '<p class="option" onclick="selectAnswer(\'' + key + '\', this)">' +
            key + ': ' + question.Options[key] + '</p>';
    }

    if (index < Questions.length - 1) {
        html = html + '<button onclick="nextQuestion()">Next</button>';
    } else {
        html = html + '<button onclick="finishQuiz()">Finish</button>';
    }

    quizContainer.innerHTML = html;
    answerSelected = false;
}

function selectAnswer(selectedKey, optionElement) {
    const question = Questions[currentQuestionIndex];
    const correctAnswer = question.CorrectAnswer;

    if (selectedKey === correctAnswer) {
        optionElement.style.backgroundColor = '#FFD700';
        correctAnswersCount++;
    } else {
        optionElement.style.backgroundColor = '#FF6347';
    }
    answerSelected = true; 
}

function nextQuestion() {
    if (answerSelected) { 
        currentQuestionIndex++;
        if (currentQuestionIndex <= Questions.length) {
            displayQuestion(currentQuestionIndex);
        }
    } else {
        alert('Please select an answer before proceeding!');
    }
}

function finishQuiz() {
    clearInterval(timer); 
    const totalQuestions = Questions.length;
    const resultsContainer = document.getElementById('resultscontainer');
    const quizContainer = document.getElementById('quizcontainer');

    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';

    resultsContainer.innerHTML = '<h1>Quiz Completed!</h1>' +
        '<p>You answered ' + correctAnswersCount +
        ' out of ' + totalQuestions +
        ' questions correctly.</p>';
}
//  timer function


let timer;
let sec = 60;
function startTimer() {
    timer = setInterval(function() {
        document.getElementById('timer').innerHTML = sec + " sec left";
        sec--;

        if (sec < 0) {
            clearInterval(timer);
            finishQuiz(); 
        }
    }, 1000); 
}
