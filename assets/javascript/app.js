$(document).ready(function () {

    // GLOBAL VARIABLES
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var currentQuestion = 0;

    // SOUNDS VARIABLES
    var correctSound = new Audio("assets/javascript/sounds/jingle-win.wav");
    var wrongSound = new Audio("assets/javascript/sounds/lose.wav");
    var clickSound = new Audio("assets/javascript/sounds/click.mp3");
    var endSound = new Audio("assets/javascript/sounds/end-game.flac");

    // TIMER VARIABLES
    var intervalId;
    var timer = 20;

    // START TIMER
    function startTimer() {
        timer --;
        $("#time-remaining").text(timer);
        if (timer <= 5) {
            $("#time-remaining").addClass("timer-low")
        }
        
        if (timer === 0) {
            wrongAnswers += 1;
            losing();
            stopTimer();
        }
    }

    // STOP TIMER
    function stopTimer() {
        clearInterval(intervalId);
        $("#time-remaining").empty()
        $("#time-remaining").removeClass("timer-low")
        timer = 20;
    }

    

    // ARRAY OF OBJECTS FOR ALL QUESTIONS
    var questions = [
        {
            question: "In which city can you find the Upside Down Charles La Trobe Statue?",
            answers: {
                a: "Paris, France",
                b: "Melbourne, Australia",
                c: "Caracas, Venezuela",
                d: "Johannesburg, South Africa",
            },
            correctAnswer: "Melbourne, Australia",
            image: "assets/images/la-trobe.jpg",
            gifCorrect: "assets/images/you-got-it-1.gif",
        },
        {
            question: "Where can the Crystal Shoe be found?",
            answers: {
                a: "Italy",
                b: "Taiwan",
                c: "Ecuador",
                d: "Korea",
            },
            correctAnswer: "Taiwan",
            image: "assets/images/crystal-shoe.jpg",
            gifCorrect: "assets/images/you-got-it-2.gif",
        },
        {
            question: "In which county can you find the Kremlin?",
            answers: {
                a: "Poland",
                b: "Kuwait",
                c: "Iran",
                d: "Russia",
            },
            correctAnswer: "Russia",
            image: "assets/images/kremlin.jpg",
            gifCorrect: "assets/images/you-got-it-3.gif",
        },
        {
            question: "Where can you find the Gum Wall",
            answers: {
                a: "Sydney, Australia",
                b: "Seoul, South Korea",
                c: "Seattle, Wshington, USA",
                d: "Guayaquil, Ecuador",
            },
            correctAnswer: "Seattle, Wshington, USA",
            image: "assets/images/gum.jpg",
            gifCorrect: "assets/images/you-got-it-4.gif",
        },
        {
            question: "Where is the Cinema at the end of the World?",
            answers: {
                a: "Sinai Desert, Egypt",
                b: "Taklamakan in Central Asia",
                c: "Paris, Texas, USA",
                d: "Potosi, Bolivia",
            },
            correctAnswer: "Sinai Desert, Egypt",
            image: src = "assets/images/cinema.jpg",
            gifCorrect: "assets/images/you-got-it-5.gif",
        },
        {
            question: "Where can you find the Hanging Rhino?",
            answers: {
                a: "Dededo Village in Guam",
                b: "Amsterdam, Netherlands",
                c: "Potsdam, Germany",
                d: "Ciudad del Este, Paraguay",
            },
            correctAnswer: "Potsdam, Germany",
            image: "assets/images/rhino.jpg",
            gifCorrect: "assets/images/you-got-it-6.gif",
        },
        {
            question: "What is the Great Pyramid of Giza?",
            answers: {
                a: "Egypt",
                b: "Namibia",
                c: "Atacama Desert",
                d: "Argentina",
            },
            correctAnswer: "Egypt",
            image: "assets/images/giza.jpg",
            gifCorrect: "assets/images/you-got-it-7.gif",
        },
        {
            question: "In what area can you find the Molinere Underwater Sculpture Park?",
            answers: {
                a: "Grenada in the Caribbean",
                b: "Great Barrier Reef",
                c: "Belize Barrier Reef",
                d: "Cayman Islands",
            },
            correctAnswer: "Grenada in the Caribbean",
            image: "assets/images/underwater.jpg",
            gifCorrect: "assets/images/you-got-it-8.gif",
        },
        {
            question: "Where are the Moai Statues?",
            answers: {
                a: "Faroe Islands, Foroyar",
                b: "Antigua and Barbuda",
                c: "Norfolk Island, Australia",
                d: "Easter Island, Chile",
            },
            correctAnswer: "Easter Island, Chile",
            image: "assets/images/moai-statues.jpg",
            gifCorrect: "assets/images/you-got-it-9.gif",
        },
        {
            question: "in what country can you find this upside down house?",
            answers: {
                a: "Côte d'Ivoire",
                b: "Namibia",
                c: "Zimbabwe",
                d: "Austria",
            },
            correctAnswer: "Austria",
            image: "assets/images/upside-down.jpg",
            gifCorrect: "assets/images/you-got-it-10.gif",
        },
    ];

    // CLICKING THE START BUTTON
    $("#startButton").on("click", function (event) {
        $("#quiz").empty();
        $("#startButton").addClass("d-none");
        $("#title-id").addClass("title-min");
        clickSound.play();
        generateQuestions(questions);
    })

    // MAIN GAME FUNCITON TO DISPLAY QUESTION AND ANSWERS ON DOM
    function generateQuestions(questions) {
        $("#quiz").empty();
        $("#timer").addClass("d-block");

        // TIMER COUNTER IS SET
        intervalId = setInterval(startTimer, 1000);

        // CREATE ROUND DIV
        var round = $("<div>");
        round.addClass("round");

        // QUESTIONS
        var currentQ = questions[currentQuestion].question;
        var currentImage = questions[currentQuestion].image;
        var containQ = $("<p class='mx-auto question'>").text(currentQ);
        var containImage = $("<img class='round-image'>").attr("src", currentImage)
        round.append(containQ);
        round.append(containImage);

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
    
    // DETERMINE CORRET OR INCORRECT GUESS
    function isCorrect() {
        $(".answers").on("click", function (event) {
            stopTimer();
            var guess = $(this).attr("value");
            console.log(guess);

            if (guess === questions[currentQuestion].correctAnswer) {
                correctAnswers += 1;
                $("#correct-answers").html(correctAnswers);
                winning();
            }
            else {
                wrongAnswers += 1;
                // $("#wrong-answers").html(wrongAnswers);
                // $("#input-correct").text(questions[currentQuestion].correctAnswer);
                losing();
            }
        })
    }

    // TRIGGER IF GUESS IS CORRECT AND DISAPLY GIF
    function winning() {
        $("#quiz").empty();
        $("#youGotItRight").addClass("d-block");
        $("#input-you-got-it").attr("src", questions[currentQuestion].gifCorrect)

        correctSound.play();

        setTimeout(function () {
            startNewRound(questions)
        }, 3000);
    }

    // TRIGGER IF GUESS IS WRONG AND DISPLAY WHAT THE CORRECT ANSWER WAS
    function losing() {
        $("#quiz").empty();
        $("#youGotItWrong").addClass("d-block");
        $("#wrong-answers").html(wrongAnswers);
        $("#input-correct").text(questions[currentQuestion].correctAnswer);

        wrongSound.play();

        setTimeout(function () {
            startNewRound(questions)
        }, 3000);
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
        $("#title-id").removeClass("title-min")
        $(".total").addClass("d-block");
        $("#playAgain").addClass("d-block");
        $(".tracker").addClass("d-none");
        
        setTimeout(function () {
            endSound.play();
        }, 500)
        
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
        $("#title-id").addClass("title-min")
        $("#playAgain").removeClass("d-block")
        $(".total").removeClass("d-block");
        clickSound.play();
        generateQuestions(questions)
    })

})
