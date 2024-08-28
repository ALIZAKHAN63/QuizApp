function displayQuiz(){
    const quizContainer = document.getElementById('quizcontainer'); 
    
    
    const question = Questions[0];
    
    
    let html = '<h2>' + question.Question + '</h2>';
    
    for (let key in question.Options) {
        html = html + '<p>' + key + ': ' + question.Options[key] +
         ' <button onclick ="selectAnswer(\'' + key + '\')">✔️</button></p>';
    }
    
    quizContainer.innerHTML = html;
    
    }
    
    displayQuiz();

    function selectAnswer(selectedkey) {
         question = Questions[0];
        correctAnswerText = question.Options[question.CorrectAnswer];
        if (selectedkey === question.CorrectAnswer) {
            alert('Correct!');
        } else {
            alert('Wrong answer. The correct answer is ' + correctAnswerText + '.');
        }
    }


   


















