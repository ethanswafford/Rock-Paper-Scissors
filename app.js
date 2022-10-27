const cpuSel = document.getElementById("cpu-select");
const playSel = document.getElementById("player-select");
const gameResult = document.getElementById("results");
const gameChoices = document.querySelectorAll("button");
let userChoice;
let cpuChoice;
let result;


gameChoices.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.id
    playSel.innerHTML = userChoice
    cpuGenChoice()
}))

function cpuGenChoice() {
    const rng = Math.floor(Math.random() * gameChoices.length)

    if (rng === 0) {
        cpuChoice = ' ROCK'
    }
    if (rng === 1) {
        cpuChoice = ' PAPER'
    }
    if (rng === 2) {
        cpuChoice = ' SCISSORS'
    }
    cpuSel.innerHTML = cpuChoice
}

function getResults() {
    if (cpuChoice === userChoice) {
        result = " DRAW! THIS GAME WAS A PUSH."
    }
    if (cpuChoice === ' ROCK' && userChoice === ' PAPER') {
        result = "COVERED AND SMOTHERED, PAPER BEATS ROCK, YOU WIN!"
    }
    if (cpuChoice === ' ROCK' && userChoice === ' SCISSORS') {
        result = "BASHED AND SMASHED, ROCK CRUSHES SCISSORS, YOU LOSE!"
    }
}