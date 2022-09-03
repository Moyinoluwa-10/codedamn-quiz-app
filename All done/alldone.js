// Show score

// Variables

const finalScore = document.querySelector('#final-score');
const form = document.querySelector('.form');
const initials = document.querySelector('#names');
const button = document.querySelector('button');
const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
let mostRecentScore = localStorage.getItem('mostRecentScore')
finalScore.textContent = mostRecentScore;


// The score would be gotten from the other page and be displayed and would be equal to the corresponding value.
//The name would be gotten from the form.


button.addEventListener ('click', (e) =>{
    e.preventDefault();

    const scores = {
        name : initials.value,
        score : mostRecentScore,
    };

    console.log(highscores);
    highscores.push(scores);

    localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.assign("../highscores/highscores.html");
});
