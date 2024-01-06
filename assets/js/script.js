const startButton = document.querySelector(".start-div");
const howToPlay = document.querySelector(".how-to-play-div");
const home = document.querySelector(".home-container");
const gamePage = document.querySelector(".main-container");

startButton.addEventListener("click", startGame);

function startGame() {
    gamePage.classList.remove("hide");
    home.setAttribute("class", "hide");
}