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
                b: "Spain",
                c: "Paris, Texas",
                d: "England",
            },
            correctAnswer: "France",
            hint: src ="../images/eiffel-tower.jpg",
        },
        {
            question: "Where is the Great Wall?",
            answers: {
                a: "Italy",
                b: "China",
                c: "Ecuador",
                d: "Korea",
            },
            correctAnswer: "China",
            hint: "../images/great-wall.jpg",
        },
        {
            question: "Where is the Kremlin?",
            answers: {
                a: "Poland",
                b: "Kuwait",
                c: "Iran",
                d: "Russia",
            },
            correctAnswer: "Russia",
            hint: "../images/kremlin.jpg",
        },
        {
            question: "Where is the Leaning Tower of Pisa?",
            answers: {
                a: "Australia",
                b: "France",
                c: "Italy",
                d: "Ecuador",
            },
            correctAnswer: "Italy",
            hint: "../images/tower-of-pisa.jpg",
        },
        {
            question: "Where is Great Pyramid of Giza?",
            answers: {
                a: "Egypt",
                b: "Tunisia",
                c: "Portugal",
                d: "Argentina",
            },
            correctAnswer: "Egypt",
            hint: "../images/giza.jpg",
        },
        {
            question: "Where is the Sydney Opera House?",
            answers: {
                a: "Guam",
                b: "Netherlands",
                c: "Australia",
                d: "Paraguay",
            },
            correctAnswer: "Australia",
            hint: "../images/opera-house.jpg",
        },
        {
            question: "Where is the Statue of Liberty?",
            answers: {
                a: "France",
                b: "United States",
                c: "Gibraltar",
                d: "Uganda",
            },
            correctAnswer: "United States",
            hint: "../images/statue-of-liberty.jpg",
        },
        {
            question: "Where is the Taj Mahal?",
            answers: {
                a: "India",
                b: "Ethiopia",
                c: "Latvia",
                d: "Yemen",
            },
            correctAnswer: "India",
            hint: "../images/taj-mahal.jpg",
        },
        {
            question: "Where are the Moai Statues?",
            answers: {
                a: "Argentina",
                b: "Sudan",
                c: "Norfolk Island/Australia",
                d: "Easter Island/Chile",
            },
            correctAnswer: "Easter Island/Chile",
            hint: "../images/moai-statues.jpg",
        },
        {
            question: "Where is Machu Picchu?",
            answers: {
                a: "Côte d'Ivoire",
                b: "Namibia",
                c: "Zimbabwe",
                d: "Peru",
            },
            correctAnswer: "Peru",
            hint: "../images/machu-piccu.jpg",
        },
    ];

    // CLICKING THE START BUTTON
    $("#startButton").on("click", function (event) {
        $("#quiz").empty();
        $("#startButton").addClass("d-none")
        generateQuestions(questions)
    })

    // MAIN GAME FUNCITON TO DISPLAY QUESTION AND ANSWERS ON DOM
    function generateQuestions(questions) {
        $("#quiz").empty();
        $("#timer").addClass("d-block");


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

    } // end generateQuestions
    
    // DETERMIN CORRET OR INCORRECT GUESS
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

    // TRIGGER IF GUESS IS CORRECT
    function winning() {
        $("#quiz").empty();
        $("#youGotItRight").addClass("d-block");
        
        setTimeout(function () {
            startNewRound(questions)
        }, 3000) 
    }

    // TRIGGER IF GUESS IS WRONG
    function losing() {
        $("#quiz").empty();
        $("#youGotItWrong").addClass("d-block");

        setTimeout(function () {
            startNewRound(questions)
        }, 3000)
    }

    // ADVANCES TO THE NEXT QUESTION
    function startNewRound(questions) {
        currentQuestion += 1;

        if (currentQuestion < questions.length) {
            $("#youGotItRight").removeClass("d-block");
            $("#youGotItWrong").removeClass("d-block");

            generateQuestions(questions);
        }
        else {
            gameIsOver()
        } 
    }

    // GAME OVER
    function gameIsOver() {
        $("#quiz").empty();
        $("#youGotItRight").removeClass("d-block");
        $("#youGotItWrong").removeClass("d-block");
        $("#timer").removeClass("d-block");
        $(".total").addClass("d-block");
        $("#playAgain").addClass("d-block");
        $(".tracker").addClass("d-none");
        $("#total-score").html(Math.floor(correctAnswers / (correctAnswers + wrongAnswers) * 100))  
    }

    // RESETS THE GAME TO PLAY AGAIN
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

})
