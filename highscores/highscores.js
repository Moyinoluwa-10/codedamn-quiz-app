// Variables

const highScoresList = document.getElementById("highscores-list");
let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// // The name and score would be gotten from local storage and displayed on the page.

highscores = highscores.sort((a, b) => b.score - a.score);

highScoresList.innerHTML = highscores
  .map((person) => {
    return `<li class ="high-scores">${person.name} - ${person.score}</li>`;
  })
  .join("");

function clearHighscores() {
  localStorage.clear();
  location.reload();
}
