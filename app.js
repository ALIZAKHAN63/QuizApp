let currentQuestionIndex = 0;
let correctAnswersCount = 0;

function startQuiz() {
    document.getElementById('startcontainer').style.display = 'none';
    document.getElementById('quizcontainer').style.display = 'block';
    displayQuestion(currentQuestionIndex);
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
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex <= Questions.length) {
        displayQuestion(currentQuestionIndex);
    }
}

function finishQuiz() {
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
