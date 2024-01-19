const playerName = document.getElementById("player-name");
const saveScore = document.getElementById("save-score");
const finalScore = document.getElementById("final-score");
const playerScore = localStorage.getItem("playerScore"); // gets the "playerscore" from local s

finalScore.innerText = playerScore;  //changes the final score to show the player score

playerName.addEventListener("keyup", () => {
    console.log(playerName.value);
    saveScore.disabled = !playerName.value; //This sets the save button to disabled if there is no name typed in the input box
});

saveHighScore = e => {
    console.log("clicked save button");
    e.preventDefault(); // To prevent the form from submitting to a new page
};


