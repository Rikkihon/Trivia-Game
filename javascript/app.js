"use strict"
var score = 0;
// jQuery Ready Function waits for the document to complete loading before initiating JavaScript
$(document).ready(function () {
    // When start-button is clicked...

    function timeUp() {
        $("#time-left").append("<h2>Timer Has Ended</h2>");
        $("#answer-button").on("click", function () {
            console.log(score) //this is the console log 
            //   if correctAnswer.OnClick = true;{ score ++
            $("#score").append("You get 10 points for each correct answer" + score);
            $("#NumberofQuestions").append("You have answered" + arrayofQuestions.length);
            newQuestion();
        });
    };

    $("#start-button").on("click", function () {
        console.log("Start!");
        newQuestion();
        setTimeout(timeUp, 180 * 1000); // 3 minutes
    });
    function newQuestion() {
        // ...create a string which will hold the trivia question.
        var triviaGame = "";
        var question = "";
        var arrayofQuestions = [];
        $("#buttons").off();

        $("#buttons").on("click", ".correct-answer", function () {
            score += 10;
           

            $("#Score").text(score);
           // (display the correct answer)
            newQuestion()
        });

        $("#buttons").on("click", ".answer-button", function () {
            $("#trivia-question").html('<h3>"incorrect, press for next question"</h3>')
            console.log("incorrectAnswer");
            //display incorrect answer
            newQuestion();
        });

        arrayofQuestions.push({
            question: "Who Invented Taxnomic Nomenclature ?", correctAnswer: "Linneaus", incorrectAnswers: [
                "Darwin", "Mendel", "Lueck"
            ]
        });
        arrayofQuestions.push({ question: "Which Irish Author stated: We are all in the gutter, but some of us are looking at the stars? ", correctAnswer: "Oscar Wilde", incorrectAnswer: ["James Joyce", "Jonathan Swift", "Samuel L Beckett"] });
        arrayofQuestions.push({ question: "How many book 'point of view' chapters does Tyrion from A Song of Ice and Fire Have? ", correctAnswer: "38", incorrectAnswer: ["0", "10", "30"] });
        arrayofQuestions.push({ question: "On Which South Pacific country is there a Pearl Museum, devoted entirely to pearls?", correctAnswer: "Tahiti", incorrectAnswer: ["Hawaii", "Indonesia", "Maldives"] });
        arrayofQuestions.push({ question: "The Hawaiian Islands had a different name given to them by James Cook. He named them after an Earl in the British Navy. What were the islands originally named?", correctAnswer: "Sandwich Islands", incorrectAnswer: ["Nippon", "Marshall Islands", "Philippines"] });
        arrayofQuestions.push({ question: "The book 'Siddhartha' takes place in which modern-day country?", correctAnswer: "Nepal", incorrectAnswer: ["Tibet", "India", "Japan"] })
        arrayofQuestions.push({ question: "Who was president of the US in 1900", correctAnswer: "McKinley", incorrectAnswer: ["George RR Martin", "George Washington", "Theodore Roosevelt"] })
        arrayofQuestions.push({ question: "George RR Martin, Author of Game of Thrones, has written how many books?", correctAnswer: "27", incorrectAnswer: ["14", "6", "39"] })
        arrayofQuestions.push({ question: "Where was Virginia Woolf born?", correctAnswer: "Kensington, London", incorrectAnswer: ["Scotland", "Wales", "Ireland"] })
        // This will randomly pick a question
        triviaGame = arrayofQuestions[Math.floor(Math.random() * arrayofQuestions.length)];
        console.log(triviaGame);

        arrayofQuestions[0].correctAnswer
        // Then prepend the trivia question to the top of our display answer div.

        $("#trivia-question").html("<br><hr>" + triviaGame.question);
        $("#trivia-answer1").prepend("<br><hr>");
        $("#trivia-answer2").prepend("<br><hr>") //+ triviaGame.incorrectAnswer);
        $("#trivia-answer3").prepend("<br><hr>") //+ triviaGame.incorrectAnswer2);
        $("#trivia-answer4").prepend("<br><hr>") //+ triviaGame.incorrectAnswer3);

        for (var i = 0; i <= 3; i++) {
            // Then dynamically generating buttons for each item in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            dynButtons(i);
        }
        function dynButtons(i) {
            var answerButton = $("<button>");
            // Adding a class to button
            answerButton.addClass("btn btn-primary btn-sm");
            answerButton.attr('id', 'answer-button' + i);
            answerButton.attr('class', 'answer-button');

            // Providing the initial button text
            if (i == 3) {
                answerButton.attr('class', 'correct-answer');
                answerButton.html(triviaGame.correctAnswer);
            } else {
                answerButton.html(triviaGame.incorrectAnswer[i]);
            }

            // Adding the button to the buttons-view div
            $("#trivia-answer" + i).html(answerButton);
        }

    };



});

