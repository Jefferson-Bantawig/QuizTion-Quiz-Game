const topScores = document.getElementById("top-scores");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

topScores.innerHTML = highScores.map(score => {
    return `<li class="top-score-list">${score.name} - ${score.score}</li>`;
}).join("");