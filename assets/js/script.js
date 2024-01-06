const startButton = document.querySelector(".start-div");
const howToPlay = document.querySelector(".how-to-play-div");
const home = document.querySelector(".home-container");
const gamePage = document.querySelector(".main-container");

startButton.addEventListener("click", startGame);

/**
 * The set Time out function will allow 1 second of interval before the question appears. This allows the user a second to prepare
 */
function startGame() {
    setTimeout(() => {
        gamePage.classList.remove("hide");
        home.setAttribute("class", "hide");
    }, 1000);
}

/** This function sets the home button to reload to landing page */
function goHome(link) {
    location.href = link.value
}