$(document).ready(function () {

    // GLOBAL VARIABLES
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var currentQuestion = 0;



    // ARRAY OF OBJECTS FOR ALL QUESTIONS
    var questions = [
        {
            question: "Where is the Eiffel Tower?",
            answers: {
                a: "France",
                b: "hello",
                c: "yes",
                d: "no",
            },
            correctAnswer: "France",
            hint: "#",
        },
        {
            question: "Where is the Great Wall?",
            answers: {
                a: "one",
                b: "China",
                c: "three",
                d: "four",
            },
            correctAnswer: "China",
            hint: "#",
        },
        // {
        //     question: "Where is the Kremlin?",
        //     answers: {
        //         a: "#",
        //         b: "#",
        //         c: "#",
        //         d: "Russia",
        //     },
        //     correctAnswer: "Russia",
        //     hint: "#",
        // },
        // {
        //     question: "--------?",
        //     answers: {
        //         a: "#",
        //         b: "#",
        //         c: "#",
        //         d: "#",
        //     },
        //     correctAnswer: "#",
        //     hint: "#",
        // },
        // {
        //     question: "--------?",
        //     answers: {
        //         a: "#",
        //         b: "#",
        //         c: "#",
        //         d: "#",
        //     },
        //     correctAnswer: "#",
        //     hint: "#",
        // },
        // {
        //     question: "--------?",
        //     answers: {
        //         a: "#",
        //         b: "#",
        //         c: "#",
        //         d: "#",
        //     },
        //     correctAnswer: "#",
        //     hint: "#",
        // },
        // {
        //     question: "--------?",
        //     answers: {
        //         a: "#",
        //         b: "#",
        //         c: "#",
        //         d: "#",
        //     },
        //     correctAnswer: "#",
        //     hint: "#",
        // },
        // {
        //     question: "--------?",
        //     answers: {
        //         a: "#",
        //         b: "#",
        //         c: "#",
        //         d: "#",
        //     },
        //     correctAnswer: "#",
        //     hint: "#",
        // },
        // {
        //     question: "--------?",
        //     answers: {
        //         a: "#",
        //         b: "#",
        //         c: "#",
        //         d: "#",
        //     },
        //     correctAnswer: "#",
        //     hint: "#",
        // },
        // {
        //     question: "--------?",
        //     answers: {
        //         a: "#",
        //         b: "#",
        //         c: "#",
        //         d: "#",
        //     },
        //     correctAnswer: "#",
        //     hint: "#",
        // },
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
        var containQ = $("<p class='mx-auto question'>").text(currentQ);
        round.append(containQ);

        // ANSWERS
        // a
        var answerA = questions[currentQuestion].answers.a;
        var containA = $("<button type='button'>").text(answerA);
        containA.addClass("mx-auto btn btn-light answers");
        containA.attr("value", answerA);
        round.append(containA);

        // b
        var answerB = questions[currentQuestion].answers.b;
        var containB = $("<button type='button'>").text(answerB);
        containB.addClass("mx-auto btn btn-light answers");
        containB.attr("value", answerB);
        round.append(containB);

        // c
        var answerC = questions[currentQuestion].answers.c;
        var containC = $("<button type='button'>").text(answerC);
        containC.addClass("mx-auto btn btn-light answers");
        containC.attr("value", answerC);
        round.append(containC);

        // d
        var answerD = questions[currentQuestion].answers.d;
        var containD = $("<button type='button'>").text(answerD);
        containD.addClass("mx-auto btn btn-light answers");
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
