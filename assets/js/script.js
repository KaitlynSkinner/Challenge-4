//var highScores = document.querySelector(".highscores");
//var timeCounter = 0;

// Highscore Function - move to end?
//highScores.addEventListener("click", function(event) {
//    console.log(event);
//  var div2 = doucment.createElement("div");
//  div2.textContent
//});

var timeLeft = 10;
var quizQuestions = document.querySelector(".quiz-qa");
// do i need a blank variable for the answers they will provide var studentAnswers = [];
debugger;
console.log(quizOne);

// Listen for a click in order to proceed with the startQuiz
quizQuestions.addEventListener("click", function() {
    console.log(quizQuestions);
    // Timer that will countdown from 10
    var startQuiz = document.querySelector(".start-quiz");

    for (var i = 0; i < quizOne.length; i++) {
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
           // Should I be using .push instead of if() {}
            if (quizQuestions === "clicked") {
                // Clear textContent first
                quizQuestions.textContent = "";

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

                // Subtract timeLeft by 1
                timeleft--;
            }
            // Need to make this not based on time but if previous answer is right
            // and one big else at the end to show for wrong answers
            else if (timeleft > 8) {
                quizQuestions.textContent = "";

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

                timeleft--;
            }
            // Need to make this not based on time but if previous answer is right
            else if (timeleft > 6) {
                quizQuestions.textContent = "";

                li.textContent = quiz[i].option9;
                li1.textContent = quiz[i].option10;
                li2.textContent = quiz[i].option11;
                li3.textContent = quiz[i].option12;

                ul.appendChild(li);
                ul.appendChild(li1);
                ul.appendChild(li2);
                ul.appendChild(li3);
                
                ul.appendChild(div);
                
                h2.textContent = quiz[i].question3;
                
                div.appendChild(h2);
                
                quizQuestions.appendChild(div);

                timeleft--;
            }
            // Need to make this not based on time but if previous answer is right
            else if (timeleft > 4) {
                quizQuestions.textContent = "";

                li.textContent = quiz[i].option13;
                li1.textContent = quiz[i].option14;
                li2.textContent = quiz[i].option15;
                li3.textContent = quiz[i].option16;

                ul.appendChild(li);
                ul.appendChild(li1);
                ul.appendChild(li2);
                ul.appendChild(li3);
                
                ul.appendChild(div);
                
                h2.textContent = quiz[i].question4;
                
                div.appendChild(h2);
                
                quizQuestions.appendChild(div);

                timeleft--;
            }
            // Need to make this not based on time but if previous answer is right
            else if (timeleft > 2) {
                quizQuestions.textContent = "";

                li.textContent = quiz[i].option17;
                li1.textContent = quiz[i].option18;
                li2.textContent = quiz[i].option19;
                li3.textContent = quiz[i].option20;

                ul.appendChild(li);
                ul.appendChild(li1);
                ul.appendChild(li2);
                ul.appendChild(li3);
                
                ul.appendChild(div);
                
                h2.textContent = quiz[i].question5;
                
                div.appendChild(h2);
                
                quizQuestions.appendChild(div);

                timeleft--;
            }
            else {
                quizQuestions.textContent = "";

                // Use clearInterval() to stop the timer
                clearInterval(startQuiz);
                
                // Call the finalMessage() function
                finalMessage();
            }
        }, 10000 );
    }
});

var finalMessage = function() {
    var displayMessage = setInterval(function() {
    // If there are no more questions
    if (timeLeft === undefined) {
        // Use clearInterval to stop timer
        clearInterval(displayMessage);
    } else {
        // Need to display 'All done' page with the ability to enter initials
        quizQuestions.textContent = "All done page";
    }
}, 10000);
}

quizQuestions();