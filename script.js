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
    if(round === 5) {
        finishGame();
    }
    //console.log(humanChoice + computerChoice);
    playRound();
    
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    console.log("Round: " + round);
    
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (round < 5) {
        if (humanChoice === "rock" && computerChoice === 1) {
            round += 1;
            console.log("Draw");
        }
        else if (humanChoice === "rock" && computerChoice === 2) {
            computerScore += 1;
            round += 1;
            console.log("Computer won that round with paper");
        }
        else if (humanChoice === "rock" && computerChoice === 3) {
            humanScore += 1;
            round += 1;
            console.log("You won that round");
        }
        else if (humanChoice === "paper" && computerChoice === 1) {
            humanScore += 1;
            round += 1;
            console.log("You won that round");
        }
        else if (humanChoice === "paper" && computerChoice === 2) {
            round += 1;
            console.log("Draw");
        }
        else if (humanChoice === "paper" && computerChoice === 3) {
            computerScore += 1;
            round += 1;
            console.log("Computer won that round with scissors");
        }
        else if (humanChoice === "scissors" && computerChoice === 1) {
            computerScore += 1;
            round += 1;
            console.log("Computer won that round with rock");
        }
        else if (humanChoice === "scissors" && computerChoice === 2) {
            humanScore += 1;
            round += 1;
            console.log("You won that round");
        }
        else if (humanChoice === "scissors" && computerChoice === 3) {
            round += 1;
            console.log("Draw");
        }
    
    }

}

function finishGame() {
    //console.log("finish test");
    if (humanScore > computerScore) {
        console.log("You won the game");
    } 
    else if(computerScore > humanScore) {
        console.log("The computer has won the game");
    }
    else {
        console.log("It's a draw");
    }
}

playGame();