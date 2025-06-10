//Rock = 0
//Paper = 1
//Scissors = 2

function getComputerChoice() {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

function getHumanChoice() {
    let choice = prompt("Pick rock, paper or scissors");
    if (choice  === "rock") {
        return 0;
    }
    return choice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;
    function playRound(humanChoice, computerChoice) {
        
    }
    while(round > 5) {
        playRound();
        round += 1;
    }
    
}

playGame(humanSelection, computerSelection);