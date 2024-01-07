const startButton = document.querySelector(".start-div");
const howToPlay = document.querySelector(".how-to-play-div");
const home = document.querySelector(".home-container");
const gamePage = document.querySelector(".main-container");
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text")); /** This converts the choices text from an Html collection to an array */
const correctPoints = 1;
const maxQuestions = 10;
let currentQuestion = {};
let correctAnswer = true;
let score = 0;
let questionCounter = document.getElementById("question-page");
let questionNumber = document.getElementById("question-num")
let availableQuestions = [];

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
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions] /**This makes a new array with the same content as the questions array, but by doing it this way, you can modify one array without changing the other array */
    getNewQuestion()
}

function getNewQuestion() {
    questionCounter++;
    questionNumber++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question; /** This changes the inner text in the html question tag. "currentQuestion.question" -> this gets the property "question" that is inside the questions array */
    
    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]
    })

    /**Another way of understanding the above is
     * for(let i=0; i<choices.length;i++){
     *      const choice = choices[i];
     *      const number = choice.dataset[number]
     *      choice.innerText = currentQuestion["choice" + number]
     * }
     */
}

/** This function sets the home button to reload to landing page */
function goHome(link) {
    location.href = link.value
}
