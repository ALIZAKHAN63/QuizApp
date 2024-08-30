
function displayQuiz(){
    const quizContainer = document.getElementById('quizcontainer'); 
    
    
    const question = Questions[0];
    
    
    let html = '<h2>' + question.Question + '</h2>';
    
    for (let key in question.Options) {
        html = html + '<p>' + key + ': ' + question.Options[key] +
         ' <button onclick ="selectAnswer(\'' + key + '\',this)">✔️</button></p>';
    }
    
    quizContainer.innerHTML = html;

    html = html + '<button onclick="nextQuestion1()">Next</button>';

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
function nextQuestion1(){
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
    html = html + '<button onclick="nextQuestion2()">Next</button>';
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

// Q2
function nextQuestion2(){
    const quizContainer1 = document.getElementById('quizcontainer1');
    const quizContainer2 = document.getElementById('quizcontainer2');

    quizContainer1.style.display = 'none';
    quizContainer2.style.display = 'block';

    const question2 = Questions[2];

    
    
    let html = '<h2>' + question2.Question + '</h2>';

    for (let key in question2.Options) {
        html = html + '<p>' + key + ': ' + question2.Options[key] +
         ' <button onclick ="selectAnswer2(\'' + key + '\',this)">✔️</button></p>';
    }
    
    quizContainer2.innerHTML = html;
    html = html + '<button onclick="nextQuestion3()">Next</button>';
    quizContainer2.innerHTML = html;

}

function selectAnswer2(selectedkey,buttonElement){
    question2 = Questions[2]

    correctAnswer = question2.correctAnswer;
    if (selectedkey === question2.CorrectAnswer) {

        buttonElement.parentElement.style.backgroundColor = 'green';

    } else {
        buttonElement.parentElement.style.backgroundColor = 'red';
    }
}

// Q3
function nextQuestion3(){
    const quizContainer2 = document.getElementById('quizcontainer2');
    const quizContainer3 = document.getElementById('quizcontainer3');

    quizContainer2.style.display = 'none';
    quizContainer3.style.display = 'block';

    const question3 = Questions[3];
    
    let html = '<h2>' + question3.Question + '</h2>';

    for (let key in question3.Options) {
        html = html + '<p>' + key + ': ' + question3.Options[key] +
         ' <button onclick ="selectAnswer3(\'' + key + '\',this)">✔️</button></p>';
    }
    
    quizContainer3.innerHTML = html;
    html = html + '<button onclick="nextQuestion4()">Next</button>';
    quizContainer3.innerHTML = html;
}
function selectAnswer3(selectedkey,buttonElement){
    question3 = Questions[3]

    correctAnswer = question3.correctAnswer;
    if (selectedkey === question3.CorrectAnswer) {

        buttonElement.parentElement.style.backgroundColor = 'green';

    } else {
        buttonElement.parentElement.style.backgroundColor = 'red';
    }
}

// Q4
function nextQuestion4() {
    const quizContainer3 = document.getElementById('quizcontainer3');
    const quizcontainer4 = document.getElementById('quizcontainer4');
    
    quizContainer3.style.display = 'none';
    quizcontainer4.style.display = 'block';

    const question4 = Questions[4];  

    let html = '<h2>' + question4.Question + '</h2>';
    
    for (let key in question4.Options) { 
        html = html + '<p>' + key + ': ' + question4.Options[key] +
        ' <button onclick="selectAnswer4(\'' + key + '\',this)">✔️</button></p>';
    }
    html = html + '<button onclick="finishQuiz()">Finish</button>'; // Add a Finish button
    quizcontainer4.innerHTML = html; 
}

function selectAnswer4(selectedKey, buttonElement) {
    const question4 = Questions[4];  
    const correctAnswer = question4.CorrectAnswer;  
    
    if (selectedKey === question4.CorrectAnswer) {
        buttonElement.parentElement.style.backgroundColor = 'green';
    } else {
        buttonElement.parentElement.style.backgroundColor = 'red';
    }
}

function finishQuiz() {
    alert('You have completed the quiz!');

}
























// Q4
// function nextQuestion4(){
//     const quizContainer3 = document.getElementById('quizContainer3')
//     const quizcontainer4 = document.getElementById('quizcontainer4')
    
//     quizContainer3.style.display = 'none';
//     quizcontainer4.style.display = 'block';

//     const question4 = Question[4];

//     let html = '<h2>'+ question4.Question +'</h2>'
    
//     for (let key in question4.Options){
//     html = html +'<p>' + key + ':' + question4.options[key] +
//     ' <button onclick ="selectAnswer4(\'' + key + '\',this)">✔️</button></p>';
//     }
//     quizcontainer4.innerHTML = html;
// }
//   function selectAnswer4(selectedKey,buttonElement){
//    const question4 =Questions[4];
//    const correctAnswer = question4.correctAnswer;
//    if(selectedKey === question4.CorrectAnswer){

//     buttonElement.parentElement.style.backgroundColor = 'green';
//    } else {
//     buttonElement.parentElement.style.backgroundColor = 'red';
//    }
//   }