let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

function getHumanChoice() {
    let choice = prompt("Pick rock, paper or scissors");
    return choice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {

}

function playGame() {
    
}

playRound(humanSelection, computerSelection);