// Setup localStorage for highscores and initials they will put in
var highScores = document.querySelector("#highscores");
var currentScore = 0;
var timeCounter = document.querySelector("#time-counter");
var timeLeft = 100;
var quizQuestions = document.querySelector("#quiz-qa");
var question = document.querySelector("#question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var secondsEl = document.querySelector("#seconds");

console.log(quizQuestions);

var showTime = function() {
    secondsEl.textContent = timeLeft;

    var countdown = setInterval(function() {
        console.log(timeLeft);
    
        if (timeLeft < 100) {
            document.getElementById("quiz-qa").style.display = "none";
        } else if (timeLeft > 1) {
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
var startQuiz = document.querySelector("#start-quiz");
    var currentQuestion = 0;
    console.log(startQuiz);


startQuiz.addEventListener("click", function() {
    console.log(quizOne[currentQuestion]);

    showTime();

    question.innerText = quizOne[currentQuestion].question;
        option1.innerText = quizOne[currentQuestion].option1;
        option2.innerText = quizOne[currentQuestion].option2;
        option3.innerText = quizOne[currentQuestion].option3;
        option4.innerText = quizOne[currentQuestion].option4;

    });

option1.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target.innerText);
    console.log(quizOne[currentQuestion].answer);
    if (event.target.innerText === quizOne[currentQuestion].answer) {
        currentScore++;
    } else {
        timeLeft = timeLeft - 5;
    }

    currentQuestion++;

    question.innerText = quizOne[currentQuestion].question;
    option1.innerText = quizOne[currentQuestion].option1;
    option2.innerText = quizOne[currentQuestion].option2;
    option3.innerText = quizOne[currentQuestion].option3;
    option4.innerText = quizOne[currentQuestion].option4;

    //Css 
    document.getElementsByTagName("button")[0].setAttribute("class", "start-test");
});

option2.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target.innerText);
    console.log(quizOne[currentQuestion].answer);
    if (event.target.innerText === quizOne[currentQuestion].answer) {
        currentScore++;
    } else {
        timeLeft = timeLeft - 5;
    }

    currentQuestion++;

    question.innerText = quizOne[currentQuestion].question;
    option1.innerText = quizOne[currentQuestion].option1;
    option2.innerText = quizOne[currentQuestion].option2;
    option3.innerText = quizOne[currentQuestion].option3;
    option4.innerText = quizOne[currentQuestion].option4;
});

option3.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target.innerText);
    console.log(quizOne[currentQuestion].answer);
    if (event.target.innerText === quizOne[currentQuestion].answer) {
        currentScore++;
    } else {
        timeLeft = timeLeft - 5;
    }

    currentQuestion++;

    question.innerText = quizOne[currentQuestion].question;
    option1.innerText = quizOne[currentQuestion].option1;
    option2.innerText = quizOne[currentQuestion].option2;
    option3.innerText = quizOne[currentQuestion].option3;
    option4.innerText = quizOne[currentQuestion].option4;
});

option4.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target.innerText);
    console.log(quizOne[currentQuestion].answer);
    if (event.target.innerText === quizOne[currentQuestion].answer) {
        currentScore++;
    } else {
        timeLeft = timeLeft - 5;
    }
    console.log(currentScore);

    currentQuestion++;

    question.innerText = quizOne[currentQuestion].question;
    option1.innerText = quizOne[currentQuestion].option1;
    option2.innerText = quizOne[currentQuestion].option2;
    option3.innerText = quizOne[currentQuestion].option3;
    option4.innerText = quizOne[currentQuestion].option4;
});

//Timer