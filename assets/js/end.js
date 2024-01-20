const playerName = document.getElementById("player-name");
const saveScore = document.getElementById("save-score");
const finalScore = document.getElementById("final-score");
const playerScore = localStorage.getItem("playerScore"); // gets the "playerscore" from local storage

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = playerScore;  //changes the final score to show the player score

playerName.addEventListener("keyup", () => {
    saveScore.disabled = !playerName.value; //This sets the save button to disabled if there is no name typed in the input box
});

saveScore.addEventListener("click", e => {
    e.preventDefault(); // To prevent the form from submitting to a new page

    const score = {
        score: playerScore,
        name: playerName.value
    };

    highScores.push(score); // pushes the score into highScores array

    highScores.sort((a, b) => {
        return b.score - a.score; // This will compare the users scores and arrange them from highest to lowest
    });
    highScores.splice(5); // everything after the 5th index will be cut from the array
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.href = "./highscores.html";
});

