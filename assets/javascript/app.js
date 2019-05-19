$(document).ready(function () {

    // GLOBAL VARIABLES
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var currentQuestion = 0;



    // ARRAY OF OBJECTS FOR ALL QUESTIONS
    var questions = [
        {
            question: "Here is the quesiton and the answer is a",
            answers: {
                a: "hi",
                b: "hello",
                c: "yes",
                d: "no",
            },
            correctAnswer: "hi",
        },
        {
            question: "Here is the quesiton and the answer is b",
            answers: {
                a: "one",
                b: "two",
                c: "three",
                d: "four",
            },
            correctAnswer: "two",
        },
        {
            question: "Here is the quesiton and the answer is c",
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
        $("#startButton").addClass("d-none")
        generateQuestions(questions)
    })

    function generateQuestions(questions) {
        $("#quiz").empty();

        // CREATE ROUND DIV
        var round = $("<div>");
        round.addClass("round");

    
        // QUESTIONS
        var currentQ = questions[currentQuestion].question;
        var containQ = $("<p>").text(currentQ);
        round.append(containQ);

        // ANSWERS
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

        // DISPLAY ON DOM
        $("#quiz").append(round); 

        if (currentQuestion > 0) {
            $(".tracker").removeClass("d-none");
        }      
        console.log("current question is " + currentQuestion);

        isCorrect();

    } // end generateQuestions()

    function isCorrect() {
        $(".answers").on("click", function (event) {
            var guess = $(this).attr("value");
            console.log(guess);
            if (guess === questions[currentQuestion].correctAnswer) {
                correctAnswers += 1;
                $("#correct-answers").html(correctAnswers);
                winning();
            }
            else {
                wrongAnswers += 1;
                $("#wrong-answers").html(wrongAnswers);
                losing();
            }
        })
    }

    function winning() {
        alert("you got it right");
        startNewRound(questions)
    }

    function losing() {
        alert("sorry, the correct answer was " + questions[currentQuestion].correctAnswer);
        startNewRound(questions)
    }

    function startNewRound(questions) {
        currentQuestion += 1;

        if (currentQuestion < questions.length) {
            generateQuestions(questions);
        }
        else {
            gameIsOver()
        } 
    }

    function gameIsOver() {
        $("#quiz").empty();
        $("#playAgain").addClass("d-block");
        $(".tracker").addClass("d-none");
        $("#total-score").html(Math.floor(correctAnswers / (correctAnswers + wrongAnswers) * 100))
        $(".total").addClass("d-block");
        alert("the game is over");
    }

    $("#playAgain").on("click", function (event) {
        $("#quiz").empty();
        correctAnswers = 0;
        wrongAnswers = 0;
        currentQuestion = 0;
        $("#correct-answers").html(correctAnswers);
        $("#wrong-answers").html(wrongAnswers);
        $("#playAgain").removeClass("d-block")
        $(".total").removeClass("d-block");
        generateQuestions(questions)
    })
    


// SHOW HOW THEY DID



})
