//Rock = 1
//Paper = 2
//Scissors = 3

let round = 0;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

function getHumanChoice() {
    let choice = prompt("Pick rock, paper or scissors");
    return choice;
}

function playGame() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(humanChoice + computerChoice);
    if(round > 5) {
        console.log("Game over");
    }
    
    else if (humanChoice === "rock" && computerChoice === 1) {
        round += 1;
    }
    else if (humanChoice === "rock" && computerChoice === 2) {
        computerScore += 1;
        round += 1;
    }
    else if (humanChoice === "rock" && computerChoice === 3) {
        humanScore += 1;
        round += 1;
    }
    else if (humanChoice === "paper" && computerChoice === 1) {
        humanScore += 1;
        round += 1;
    }
    else if (humanChoice === "paper" && computerChoice === 2) {
        round += 1;
    }
    else if (humanChoice === "paper" && computerChoice === 3) {
        computerScore += 1;
        round += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === 1) {
        computerScore += 1;
        round += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === 2) {
        humanScore += 1;
        round += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === 3) {
        round += 1;
    }

    else if (humanScore > computerScore) {
        console.log("You win");
    }
    else {
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("Round: " + round);
        console.log("You lose")
    }
    
}

playGame();