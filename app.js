const cpuSel = document.getElementById("cpu-select");
const playSel = document.getElementById("player-select");
const resultChoice = document.getElementById("results");
const gameChoices = document.querySelectorAll("button");
let userChoice;


gameChoices.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.id
    playSel.innerHTML = userChoice
}))