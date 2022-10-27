const cpuSel = document.getElementById("cpu-select");
const playSel = document.getElementById("player-select");
const resultChoice = document.getElementById("results");
const gameChoices = document.querySelectorAll("button");
let userChoice;
let cpuChoice;


gameChoices.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.id
    playSel.innerHTML = userChoice
    cpuGenChoice()
}))

function cpuGenChoice() {
    const rng = Math.floor(Math.random() * gameChoices.length)

    if (rng === 0) {
        cpuChoice = 'ROCK'
    }
    if (rng === 1) {
        cpuChoice = 'PAPER'
    }
    if (rng === 2) {
        cpuChoice = 'SCISSORS'
    }
    cpuSel.innerHTML = cpuChoice
}