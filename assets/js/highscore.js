const topScores = document.getElementById("top-scores");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

topScores.innerHTML = highScores.map((score, index) => {
    return `<li class="top-score-list">
       ${index + 1 + "."} ${score.name} - ${score.score}
       </li>`;
}).join("");