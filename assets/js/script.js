const startButton = document.querySelector(".start-div");
const howToPlay = document.querySelector(".how-to-play-div");
const home = document.querySelector(".home-container");
const gamePage = document.querySelector(".main-container");
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text")); // This converts the choices text from an Html collection to an array 
const correctPoints = 0;
const maxQuestions = 10;
let timerSection = document.getElementById("timer-section");
let timerBar = document.getElementById("timer-bar");
let countDown = document.getElementById("count-down-time");
let countDownTimer;
let mainContainer = document.querySelector(".main-container");
let currentQuestion = {};
let acceptingAnswers = false; //This is so that when this variable is false, clicking of the user will not be registered in the console. if variable is true, clicking is recognized
let score = 0;
let questionPage = document.getElementById("question-page");
let questionNumber = document.getElementById("question-num");
let availableQuestions = [];
let pageNumber = 0;
let questions = [
    {
        question: "What is the fastest animal on Earth?",
        choice1: "Cheetah",
        choice2: "Ostrich",
        choice3: "Gazelle",
        choice4: "Peregrine Falcon",
        answer: 4
    },
    {
        question: "What is the capital of Australia?",
        choice1: "Perth",
        choice2: "Melbourne",
        choice3: "Canberra",
        choice4: "Sydney",
        answer: 3
    },
    {
        question: "What year did World War 2 start?",
        choice1: "1921",
        choice2: "1939",
        choice3: "1914",
        choice4: "1945",
        answer: 2
    },
    {
        question: "How many ribs do most humans have?",
        choice1: "12",
        choice2: "24",
        choice3: "14",
        choice4: "22",
        answer: 2
    },
    {
        question: "What is the smallest planet in the solar system?",
        choice1: "Pluto",
        choice2: "Venus",
        choice3: "Mars",
        choice4: "Mercury",
        answer: 4
    },
    {
        question: "In which city is the Cathedral of Notre Dame?",
        choice1: "Paris",
        choice2: "Marseille",
        choice3: "Nice",
        choice4: "Montpellier",
        answer: 1
    },
    {
        question: "What does the roman numeral 'C' represent?",
        choice1: "100",
        choice2: "1000",
        choice3: "2000",
        choice4: "20000",
        answer: 1
    },
    {
        question: "What is the hardest natural material on earth?",
        choice1: "Adamantium",
        choice2: "Vibranium",
        choice3: "Diamond",
        choice4: "Delirium",
        answer: 3
    },
    {
        question: "Who invented the first car?",
        choice1: "Henry Ford",
        choice2: "Walter Owen Bentley",
        choice3: "Ferdinand Porsche",
        choice4: "Karl Benz",
        answer: 4
    },
    {
        question: "How long does it take for the earth to orbit the sun?",
        choice1: "7 days",
        choice2: "30 days (28 in February)",
        choice3: "365 days",
        choice4: "24 hours",
        answer: 3
    },
];





startButton.addEventListener("click", startGame);

// The set Time out function will allow 1 second of interval before the question appears. This allows the user a second to prepare

function startGame() {
    gamePage.classList.remove("hide");
    home.setAttribute("class", "hide");
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; //This makes a new array with the same content as the questions array, but by doing it this way, you can modify one array without changing the other array 
    console.log(availableQuestions);
    getNewQuestion();

}

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        //go to the end page
        return window.location.assign("index.html"); // Change this to end.html later**
    }
    questionCounter++;
    questionNumber.innerText = `QuezTion ${questionCounter}`;
    questionPage.innerText = questionCounter;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question; // This changes the inner text in the html question tag. "currentQuestion.question" -> this gets the property "question" that is inside the questions array 

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
    /**Another way of understanding the above is
     * for(let i=0; i<choices.length;i++){
     *      const choice = choices[i];
     *      const number = choice.dataset[number]
     *      choice.innerText = currentQuestion["choice" + number]
     * }
     */
    myTime;
    countDownTimer = 10;
    startTimer;
    availableQuestions.splice(questionIndex, 1); //the splice method will remove an index STARTING from "questionIndex"(which is an index from the questions array). The "1" parameter means it will only remove one. Thus this removes the question that was presented out of the current array. 
    timerSection.style.width = "100%"; // This will reset the timer to full when getting a new question
    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) {
            return;
        } // This prevents any repeated mouse click from registering in the console, Only if - acceptingAnswers = true - will the user be able to click the buttons
        acceptingAnswers = false;
        const selectedChoice = parseInt(e.target.dataset["number"]); //since the data set returns as a string. this will convert it into a interger

        const checkAnswer = selectedChoice === currentQuestion.answer ? "correct" : "incorrect";
        const addScore = checkAnswer === "correct" ? score++ : score; // This will count the score of the player
        console.log(score);
        /** The code above is a ternary operator
           * it is a short version of :  
           * const correctAnswer
           *  if (selectedChoice === currentQuestion.answer) {
           *        checkAnswer = correct
           * } else {
           *        checkAnswer = incorrect
           * }
           */

        mainContainer.classList.add(checkAnswer);
        setTimeout(() => {
            mainContainer.classList.remove(checkAnswer);
            getNewQuestion();
        }, 1000);

    });
});

let startTimer = setInterval(function () {
    if (timerSection.clientWidth <= timerBar.clientWidth) {
        timerSection.style.width = timerSection.clientWidth - 0.1 * timerBar.clientWidth + "px";
    } else {
        timerSection.style.width = timerBar.clientWidth + "px";
        clearInterval(startTimer);
    }

}, 9);  // This will provide a timer animation that runs down as the timer goes down.


setInterval(myTime, 1000);
function myTime() {
    if (countDownTimer > 0) {
        countDown.innerText = countDownTimer;
        countDownTimer--;
    } else if (countDownTimer == 0) {
        countDown.innerText = "Time is up";
        getNewQuestion();
        countDownTimer = 10;
    }
}


// This function sets the home button to reload to landing page 
function goHome(link) {
    location.href = link.value;
}
