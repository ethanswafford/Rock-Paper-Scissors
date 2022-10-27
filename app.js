const cpuSel = document.getElementById("cpu-select");
const playSel = document.getElementById("player-select");
const resultChoice = document.getElementById("results");
const gameChoices = document.querySelectorAll("button");
let userChoice;


gameChoices.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.id
    playSel.innerHTML = userChoice
    cpuChoice()
}))

function cpuChoice() {
    const rng = Math.floor(Math.random() * gameChoices.length)
    console.log(rng)
    cpuSel.innerHTML = rng.toString()
}