// Variables

const highScoresList = document.getElementById("highscores-list");
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];


// // The name and score would be gotten from local storage and displayed on the page.


highScoresList.innerHTML = highscores.map(person =>{
    return(`<li class ="high-scores">${person.name} - ${person.score}</li>`);
}).join("");

function clearHighscores() {
    localStorage.clear();
    location.reload();
}
