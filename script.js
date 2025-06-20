//Rock = 1
//Paper = 2
//Scissors = 3

let round = 0;
let humanScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const humanScoreElement = document.getElementById("humanScore");
const computerScoreElement = document.getElementById("computerScore");
const roundElement = document.getElementById("round");
const resultElement = document.getElementById("result");

rockButton.addEventListener("click", (e) => {
    let humanChoice = rockButton.id;
    playGame(humanChoice);
});

paperButton.addEventListener("click", (e) => {
    let humanChoice = paperButton.id;
    playGame(humanChoice);
});

scissorsButton.addEventListener("click", (e) => {
    let humanChoice = scissorsButton.id;
    playGame(humanChoice);
});

function getComputerChoice() {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

function getHumanChoice() {
    //let choice = prompt("Pick rock, paper or scissors");
    //return choice;
}

function playGame(humanChoice) {
    if(round === 5) {
        finishGame();
    }
    //console.log(humanChoice + computerChoice);
    playRound(humanChoice);
    
    //console.log("Human Score: " + humanScore);
    humanScoreElement.innerHTML = "Human Score: " + humanScore;
    computerScoreElement.innerHTML = "Computer Score: " + computerScore;
    roundElement.innerHTML = "Round: " + round;
    //console.log("Computer Score: " + computerScore);
    //console.log("Round: " + round);
    
}

function playRound(humanChoice) {
    //let humanChoice = getHumanChoice();
    console.log(humanChoice);
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
        resultElement.innerHTML = "You won the game";
    } 
    else if(computerScore > humanScore) {
        console.log("The computer has won the game");
        resultElement.innerHTML = "The computer has won the game";
    }
    else {
        console.log("It's a draw");
        resultElement.innerHTML = "It's a draw";
    }
}

//playGame();