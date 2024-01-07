const startButton = document.querySelector(".start-div");
const howToPlay = document.querySelector(".how-to-play-div");
const home = document.querySelector(".home-container");
const gamePage = document.querySelector(".main-container");
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const correctPoints = 1;
const maxQuestions = 10;
let currentQuestion = {};
let correctAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What is the fastest animal on Earth?",
        choiceA: "Cheetah",
        choiceB: "Ostrich",
        choiceC: "Gazelle",
        choiceD: "Peregrine Falcon",
        answer: 4
    },
    {
        question: "What is the capital of Australia?",
        choiceA: "Perth",
        choiceB: "Melbourne",
        choiceC: "Canberra",
        choiceD: "Sydney",
        answer: 3
    },
    {
        question: "What year did World War 2 start?",
        choiceA: "1921",
        choiceB: "1939",
        choiceC: "1914",
        choiceD: "1945",
        answer: 2
    },
    {
        question: "How many ribs do most humans have?",
        choiceA: "12",
        choiceB: "24",
        choiceC: "14",
        choiceD: "22",
        answer: 2
    }
    {
        question: "What is the smallest planet in the solar system?",
        choiceA: "Pluto",
        choiceB: "Venus",
        choiceC: "Mars",
        choiceD: "Mercury",
        answer: 4
    },
    {
        question: "In which city is the Cathedral of Notre Dame?",
        choiceA: "Paris",
        choiceB: "Marseille",
        choiceC: "Nice",
        choiceD: "Montpellier",
        answer: 1
    },
    {
        question: "What does the roman numeral 'C' represent?",
        choiceA: "100",
        choiceB: "1000",
        choiceC: "2000",
        choiceD: "20000",
        answer: 1
    },
    {
        question: "What is the hardest natural material on earth?",
        choiceA: "Adamantium",
        choiceB: "Vibranium",
        choiceC: "Diamond",
        choiceD: "Delirium",
        answer: 3
    },
    {
        question: "Who invented the first car?",
        choiceA: "Henry Ford",
        choiceB: "Walter Owen Bentley",
        choiceC: "Ferdinand Porsche",
        choiceD: "Karl Benz",
        answer: 4
    },
]



startButton.addEventListener("click", startGame);

/**
 * The set Time out function will allow 1 second of interval before the question appears. This allows the user a second to prepare
 */
function startGame() {
    setTimeout(() => {
        gamePage.classList.remove("hide")
        home.setAttribute("class", "hide")
    }, 1000);
}

/** This function sets the home button to reload to landing page */
function goHome(link) {
    location.href = link.value
}


