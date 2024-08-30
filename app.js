function displayQuiz(){
    const quizContainer = document.getElementById('quizcontainer'); 
    
    
    const question = Questions[0];
    
    
    let html = '<h2>' + question.Question + '</h2>';
    
    for (let key in question.Options) {
        html = html + '<p>' + key + ': ' + question.Options[key] +
         ' <button onclick ="selectAnswer(\'' + key + '\',this)">✔️</button></p>';
    }
    
    quizContainer.innerHTML = html;

    html = html + '<button onclick="nextQuestion()">Next</button>';

    quizContainer.innerHTML = html;
    
    }
    
    displayQuiz();
// q0
    function selectAnswer(selectedkey,buttonElement) {
        question = Questions[0];

        correctAnswer = question.CorrectAnswer;

        if (selectedkey === question.CorrectAnswer) {

            buttonElement.parentElement.style.backgroundColor = 'green';

        } else {
            buttonElement.parentElement.style.backgroundColor = 'red';
        }
    }
// q1
function nextQuestion(){
    const quizContainer = document.getElementById('quizcontainer');
    const quizContainer1 = document.getElementById('quizcontainer1');

    quizContainer.style.display = 'none';
    quizContainer1.style.display = 'block';

    const question1 = Questions[1];

    
    
    let html = '<h2>' + question1.Question + '</h2>';

    for (let key in question1.Options) {
        html = html + '<p>' + key + ': ' + question1.Options[key] +
         ' <button onclick ="selectAnswer1(\'' + key + '\',this)">✔️</button></p>';
    }
    
    quizContainer1.innerHTML = html;

}
// q1
function selectAnswer1(selectedkey,buttonElement) {
    question1 = Questions[1];

    correctAnswer = question1.CorrectAnswer;

    if (selectedkey === question1.CorrectAnswer) {

        buttonElement.parentElement.style.backgroundColor = 'green';

    } else {
        buttonElement.parentElement.style.backgroundColor = 'red';
    }
}















