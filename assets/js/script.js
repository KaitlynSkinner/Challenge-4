//var highScores = document.querySelector(".highscores");
//var timeCounter = 0;

// Highscore Function - move to end?
//highScores.addEventListener("click", function(event) {
//    console.log(event);
//  var div2 = doucment.createElement("div");
//  div2.textContent
//});

var quizQuestions = document.querySelector(".quiz-qa");
console.log(quiz);

quizQuestions.addEventListener("click", function() {
    // Timer that will countdown from 10
    var timeLeft = 10;
    var startQuiz = document.querySelector(".start-quiz");

    for (var i = 0; i < quiz.length; i++) {
        //Create questions and answers
        var div = document.createElement("div");
        // Quiz question
        var h2 = document.createElement('h2');
        // Quiz answer options
        var ul = document.createElement('ul');
        var li = doucment.createElement('li');
        var li1 = document.createElement('li');
        var li2 = doucment.createElement('li');
        var li3 = doucment.createElement('li');


        // Use the 'setInterval()' method to call 'startQuiz()' function to be executed per question
       var startQuiz = setInterval(function() {
           //If you click start then start the test
            if (quizQuestions === "clicked") {
                // Add content to li's created
                li.textContent = quiz[i].option1;
                li1.textContent = quiz[i].option2;
                li2.textContent = quiz[i].option3;
                li3.textContent = quiz[i].option4;

                // Add elements and their content to ul
                ul.appendChild(li);
                ul.appendChild(li1);
                ul.appendChild(li2);
                ul.appendChild(li3);

                ul.appendChild(div);

                // Add content to div created
                h2.textContent = quiz[i].question1;

                // Add h2 and it's content to div
                div.appendChild(h2);

                // Add div to HTML
                quizQuestions.appendChild(div);
            }
            // Need to make this not based on time but if previous answer is right
            // and one big else at the end to show for wrong answers
            if (timeleft > 8) {
                li.textContent = quiz[i].option5;
                li1.textContent = quiz[i].option6;
                li2.textContent = quiz[i].option7;
                li3.textContent = quiz[i].option8;

                ul.appendChild(li);
                ul.appendChild(li1);
                ul.appendChild(li2);
                ul.appendChild(li3);
                
                ul.appendChild(div);
                
                h2.textContent = quiz[i].question2;
                
                div.appendChild(h2);
                
                quizQuestions.appendChild(div);
            }
        } 10000 );
    }
});

// Set a timer for the content to 
//    var timeRemaining = 10;

//    var myTimer = setInterval(function() {
     //   if (timeRemaining > 0) {
     //       timeRemaining.textContent - timeRemaining + "seconds left!";
     //       timeRemaining--;
//        }
//    }, 10000 );
//});

quizQuestions;