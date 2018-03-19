"use strict"
var score = 0;
// jQuery Ready Function waits for the document to complete loading before initiating JavaScript
$(document).ready(function () {
    // When start-button is clicked...

    $("#start-button").on("click", function () {
        // ...create a string which will hold the trivia question.
        var triviaGame = "";
        var question = "";
        var arrayofQuestions = [];
        console.log("Start score:");
        console.log(score);
        setTimeout(timeUp, 180 * 1000); // 3 minutes

        $("#answer-button").on("click", function () {
            score + 10;
            console.log("Result variable:")
            console.log(score) //this is the console log 
            //   if correctAnswer.OnClick = true;{ score ++
            $("#score").text(score);
            //definition
            var wrongAnswer = function () {
                $("#trivia-question").append("incorrect, press for next question")
                console.log("incorrectAnswer");
            }

            $("#answer-button1").on("click", wrongAnswer);
            $("#answer-button2").on("click", wrongAnswer);
            $("#answer-button3").on("click", wrongAnswer);


        });

        function timeUp() {
            $("#time-left").append("<h2>Timer Has Ended</h2>");
            $("#answer-button").on("click", function () {

                score + 10;
                console.log("Result variable:")
                console.log(score) //this is the console log 
                //   if correctAnswer.OnClick = true;{ score ++
                $("#score").append(score);

            });
        };
        

        arrayofQuestions.push({ question: "Who Invented Taxnomic Nomenclature ?", correctAnswer: "Linneaus", incorrectAnswers: [
            "Darwin", "Mendel","Lueck"
        ] });
        arrayofQuestions.push({ question: "Which Irish Author stated: We are all in the gutter, but some of us are looking at the stars? ", correctAnswer: "Oscar Wilde",  incorrectAnswer: ["James Joyce", "Jonathan Swift", "Samuel L Beckett"]});
        arrayofQuestions.push({ question: "How many book 'point of view' chapters does Tyrion from A Song of Ice and Fire Have? ", correctAnswer: "38", incorrectAnswer: ["0", "10", "30"] });
        arrayofQuestions.push({ question: "On Which South Pacific country is there a Pearl Museum, devoted entirely to pearls?", correctAnswer: "Tahiti", incorrectAnswer: ["Hawaii",   "Indonesia",  "Maldives"] });
        arrayofQuestions.push({ question: "The Hawaiian Islands had a different name given to them by James Cook. He named them after an Earl in the British Navy. What were the islands originally named?", correctAnswer: "Hawaiian Islands", incorrectAnswer: ["Nippon", "Marshall Islands", "Philippines"] });
        arrayofQuestions.push({ question: "The book 'Siddhartha' takes place in which modern-day country?", correctAnswer: "Nepal", incorrectAnswer: ["Tibet", "India", "Japan"] })
        // This will randomly pick a question
        triviaGame = arrayofQuestions[Math.floor(Math.random() * arrayofQuestions.length)];
        console.log(triviaGame);

        arrayofQuestions[0].correctAnswer
        // Then prepend the trivia question to the top of our display answer div.

        $("#trivia-question").prepend("<br><hr>" + triviaGame.question);
        $("#trivia-answer1").prepend("<br><hr>");
        $("#trivia-answer2").prepend("<br><hr>") //+ triviaGame.incorrectAnswer);
        $("#trivia-answer3").prepend("<br><hr>") //+ triviaGame.incorrectAnswer2);
        $("#trivia-answer4").prepend("<br><hr>") //+ triviaGame.incorrectAnswer3);

        for (var i = 0; i < 2; i++) {
            // Then dynamically generating buttons for each item in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
           
            
            dynButtons(i);
        }
        function dynButtons(i) {
            var answerButton = $("<button>");
            // Adding a class to button
            answerButton.addClass("btn btn-primary btn-sm");
            answerButton.attr('id', 'answer-button' + i);

        // Providing the initial button text
            if (i == 0) {
                answerButton.html(triviaGame.correctAnswer);
            } else {
                answerButton1.html(triviaGame.incorrectAnswer[i]);
            }

        // Adding the button to the buttons-view div
            $("#trivia-answer"+ i).prepend(answerButton);
        }

    }



});
});


