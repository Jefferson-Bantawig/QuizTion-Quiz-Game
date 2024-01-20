// Get DOM Elements

const startButton = document.querySelector(".start-div");
const howToPlay = document.querySelector(".how-to-play-div");
const home = document.querySelector(".home-container");
const gamePage = document.querySelector(".main-container");
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text")); // This converts the choices text from an Html collection to an array 
const correctPoints = 0;
const maxQuestions = 10;

// Create Global variables
let progressBar = document.getElementById("progress-bar");
let mainContainer = document.querySelector(".main-container");
let currentQuestion = {};
let scoreTally = document.getElementById("score-tally");
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

// Starts Game - sets initial score and question to 0

startButton.addEventListener("click", startGame);
function startGame() {
    gamePage.classList.remove("hide");
    home.setAttribute("class", "hide");
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
}

// Grabs a random question in the questions array, i

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        localStorage.setItem("playerScore", score); //saves the score into local storage
        return window.location.href = "./end.html";
    }
    updateCounters();
    updateQuizBarWidth();
    const questionIndex = generateRandomQuestion();
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]; // Whatever choice the user clicks will return "choice1-4"
    });
    availableQuestions.splice(questionIndex, 1);
}

// Generates a random question each time the quiz is run

const generateRandomQuestion = () => {
    return Math.floor(Math.random() * availableQuestions.length);
};

function updateCounters() {
    questionCounter++;
    questionNumber.innerText = `QuezTion ${questionCounter}`;
    questionPage.innerText = questionCounter;
};

function updateQuizBarWidth() {
    let quizBar = (questionCounter / maxQuestions * 100);
    progressBar.style.width = quizBar + "%";
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        const selectedChoice = parseInt(e.target.dataset["number"]); //since the data set returns as a string. this will convert it into a interger
        const checkAnswer = selectedChoice === currentQuestion.answer ? "correct" : "incorrect";
        checkAnswer === "correct" ? score++ : score;
        score = score <= 10 ? score : "10";
        mainContainer.classList.add(checkAnswer);
        scoreTally.innerHTML = score <= 10 ? score : "10";
        setTimeout(() => {
            mainContainer.classList.remove(checkAnswer);
            getNewQuestion();
        }, 500);
    });
});

function goHome(link) {
    location.href = link.value;
}
