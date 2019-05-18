// $(document).ready(function () {

    // GLOBAL VARIABLES
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;
    var currentQuestion = 0;

    // ARRAY OF OBJECTS FOR ALL QUESTIONS
    var questions = [
        {
            question: "the answer is a",
            answers: {
                a: "hi",
                b: "hello",
                c: "yes",
                d: "no",
            },
            correctAnswer: "hi",
        },
        {
            question: "the answer is b",
            answers: {
                a: "one",
                b: "two",
                c: "three",
                d: "four",
            },
            correctAnswer: "two",
        },
        {
            question: "the answer is c",
            answers: {
                a: "#",
                b: "#",
                c: "c",
                d: "#",
            },
            correctAnswer: "c",
        },
    ]

// GENERATE QUIZ
    $("#startButton").on("click", function (event) {
        $("#quiz").empty();
        generateQuestions(questions)
    })

    function generateQuestions(questions) {

        // make roud div
        var round = $("<div>");
        round.addClass("round");

        // add quesiton info
        var currentQ = questions[currentQuestion].question;
        var containQ = $("<p>").text(currentQ);
        round.append(containQ);

        // add answer info for a, b, c, d
        // a
        var answerA = questions[currentQuestion].answers.a;
        var containA = $("<button>").text(answerA);
        containA.addClass("answers");
        containA.attr("value", answerA);
        round.append(containA);

        // b
        var answerB = questions[currentQuestion].answers.b;
        var containB = $("<button>").text(answerB);
        containB.addClass("answers");
        containB.attr("value", answerB);
        round.append(containB);

        // c
        var answerC = questions[currentQuestion].answers.c;
        var containC = $("<button>").text(answerC);
        containC.addClass("answers");
        containC.attr("value", answerC);
        round.append(containC);

        // d
        var answerD = questions[currentQuestion].answers.d;
        var containD = $("<button>").text(answerD);
        containD.addClass("answers");
        containD.attr("value", answerD);
        round.append(containD);

        // print quesitons and answers on the DOM
        $("#quiz").append(round);  

        // update tracker for which quesiton we are on
        currentQuestion += 1;

        isCorrect()

    } // end generateQuestions()

    function isCorrect() {
        $(".answers").on("click", function (event) {
            var guess = $(this).attr("value");
            console.log(guess);
        })
    }

    

// have placeholders for an indivial quiz question items in HTML
// store queistons in an array of objects
// ===========
// START
// start timer
// dynamically fill in the details on HTML element for quesiton and answer options 
// user will select answer for that quesiton
// capture user repsonse (if correct add to correct number)
// display right or wrong for response
// show correct answer for 3 seconds
// clear question detials 
// advance to the next question in the array
// go back to START

// at the end of the quiz, referenc the correct number
// show a start over button to reset the game




// SHOW QUESTIONS

// SHOW RESULTS



// })
