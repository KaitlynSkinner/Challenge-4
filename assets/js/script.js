// Setup localStorage for highscores and initials they will put in
var secondsEl = document.querySelector("#seconds");
var quizQuestions = document.querySelector("#quiz-qa");
var visHidden = document.querySelector("#vis-hidden");
var timeLeft = 100;
var question = document.querySelector("#question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");


// Timer function 
var showTime = function() {
    secondsEl.textContent = timeLeft;

    var countdown = setInterval(function() {
        console.log(timeLeft);
    
        if (timeLeft > 1) {
            document.getElementById("quiz-qa").style.display = "none";
            document.getElementById("vis-hidden").style.visibility = "visible";
            secondsEl.textContent = timeLeft;
            timeLeft--;
        } else if (timeLeft === 1) {
            secondsEl.textContent = timeLeft;
        } else {
            clearInterval(countdown);
        }
    }, 1000);
};

// Begin the test
var correctIncorrect = document.querySelector("#correct-incorrect");
var startQuiz = document.querySelector("#start-quiz");
    var currentQuestion = 0;
    var currentScore = 0;
    console.log(startQuiz);


startQuiz.addEventListener("click", function() {
    console.log(quizScript[currentQuestion]);

    showTime();

    question.innerText = quizScript[currentQuestion].question;
        option1.innerText = quizScript[currentQuestion].option1;
        option2.innerText = quizScript[currentQuestion].option2;
        option3.innerText = quizScript[currentQuestion].option3;
        option4.innerText = quizScript[currentQuestion].option4;
    });

option1.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target.innerText);
    console.log(quizScript[currentQuestion].answer);

    if (event.target.innerText === quizScript[currentQuestion].answer) {
        currentScore = currentScore + 5;
        correctIncorrect.innerText = "Correct";
        correctIncorrect.setAttribute("class", "correct-incorrect");
    } else {
        timeLeft = timeLeft - 5;
        currentScore = currentScore -5;
        correctIncorrect.innerText = "Incorrect";
        correctIncorrect.setAttribute("class", "correct-incorrect");
    }

    currentQuestion++;

    question.innerText = quizScript[currentQuestion].question;
    option1.innerText = quizScript[currentQuestion].option1;
    option2.innerText = quizScript[currentQuestion].option2;
    option3.innerText = quizScript[currentQuestion].option3;
    option4.innerText = quizScript[currentQuestion].option4;

    //Css 
    document.getElementsByTagName("button")[0].setAttribute("class", "start-test");
});

option2.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target.innerText);
    console.log(quizScript[currentQuestion].answer);

    if (event.target.innerText === quizScript[currentQuestion].answer) {
        currentScore = currentScore + 5;
        correctIncorrect.innerText = "Correct";
        correctIncorrect.setAttribute("class", "correct-incorrect");
    } else {
        timeLeft = timeLeft - 5;
        currentScore = currentScore -5;
        correctIncorrect.innerText = "Incorrect";
        correctIncorrect.setAttribute("class", "correct-incorrect");
    }

    currentQuestion++;

    question.innerText = quizScript[currentQuestion].question;
    option1.innerText = quizScript[currentQuestion].option1;
    option2.innerText = quizScript[currentQuestion].option2;
    option3.innerText = quizScript[currentQuestion].option3;
    option4.innerText = quizScript[currentQuestion].option4;
});

option3.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target.innerText);
    console.log(quizScript[currentQuestion].answer);

    if (event.target.innerText === quizScript[currentQuestion].answer) {
        currentScore = currentScore + 5;
        correctIncorrect.innerText = "Correct";
        correctIncorrect.setAttribute("class", "correct-incorrect");
    } else {
        timeLeft = timeLeft - 5;
        currentScore = currentScore -5;
        correctIncorrect.innerText = "Incorrect";
        correctIncorrect.setAttribute("class", "correct-incorrect");
    }

    currentQuestion++;

    question.innerText = quizScript[currentQuestion].question;
    option1.innerText = quizScript[currentQuestion].option1;
    option2.innerText = quizScript[currentQuestion].option2;
    option3.innerText = quizScript[currentQuestion].option3;
    option4.innerText = quizScript[currentQuestion].option4;
});

option4.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target.innerText);
    console.log(quizScript[currentQuestion].answer);

    if (event.target.innerText === quizScript[currentQuestion].answer) {
        currentScore = currentScore + 5;
        correctIncorrect.innerText = "Correct";
        correctIncorrect.setAttribute("class", "correct-incorrect");
        return allDone;
    } else {
        timeLeft = timeLeft - 5;
        currentScore = currentScore -5;
        correctIncorrect.innerText = "Incorrect";
        correctIncorrect.setAttribute("class", "correct-incorrect");
    }
    console.log(currentScore);

    currentQuestion++;

    question.innerText = quizScript[currentQuestion].question;
    option1.innerText = quizScript[currentQuestion].option1;
    option2.innerText = quizScript[currentQuestion].option2;
    option3.innerText = quizScript[currentQuestion].option3;
    option4.innerText = quizScript[currentQuestion].option4;
});

// Highscores Page
var highScores = document.querySelector("#highscores");

highScores.addEventListener("click", function(event) {
    event.preventDefault();

    var submitHs = document.getElementById("#submit-hs")

    if (event.target.matches || submitHs) {
        document.getElementById("quiz-qa").style.display = "none";
        document.getElementById("vis-hidden").style.display = "none";
        document.getElementById("vis-hidden-three").style.visibility = "visible";
        return;
    }
});

// Completed the Test Page
var allDone = function() {
    console.log(allDone);
    
        if (quizScript[26, 27, 28, 29]) {
            document.getElementById("quiz-qa").style.display = "none";
            document.getElementById("vis-hidden").style.display = "none";
            document.getElementById("vis-hidden-two").style.visibility = "visible";
            return;
        }
};