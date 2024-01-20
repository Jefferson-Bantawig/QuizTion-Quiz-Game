//Gets DOM elements 

const playerName = document.getElementById("player-name");
const saveScore = document.getElementById("save-score");
const finalScore = document.getElementById("final-score");
const playerScore = localStorage.getItem("playerScore");

//Get Highscores from localstorage

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = playerScore;

//This sets the save button to disabled if there is no name typed in the input box
playerName.addEventListener("keyup", () => {
    saveScore.disabled = !playerName.value;
});

// Add users scores to the highscores array and organizes them from highest to lowest

saveScore.addEventListener("click", e => {
    e.preventDefault(); // To prevent the form from submitting to a new page

    const score = {
        score: playerScore,
        name: playerName.value
    };

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score; // This will compare the users scores and arrange them from highest to lowest
    });
    highScores.splice(5);
    localStorage.setItem("highScores", JSON.stringify(highScores)); // sets the highscore to a JSON string
    window.location.href = "./highscores.html";
});
