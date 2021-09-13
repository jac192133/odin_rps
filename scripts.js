const choices = ["rock", "paper", "scizzors"]

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
} 

function playRound() {
    let playerSelection = prompt("Your move:").toLowerCase();
    let computerSelection = computerPlay();

    let winResult = "You win! " + playerSelection + " beats " + computerSelection + ".";
    let loseResult = "You lose. " + computerSelection + " beats " + playerSelection + ".";

    function score(playerSelection, computerSelection) {

        if (playerSelection == computerSelection) {
            return "Tie.";
        }

        else if ((((playerSelection == "rock") && (computerSelection == "scizzors")) || ((playerSelection == "paper") && (computerSelection == "rock"))) || ((playerSelection == "scizzors") && (computerSelection == "paper"))) {
            return winResult;
        }
        
        else {
            return loseResult;
        }

    }

    return score(playerSelection, computerSelection);
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameOn = true;

    function tally(roundResult) {
        if (roundResult.search("win") > 0) {
            playerScore += 1;
        } else {
            computerScore += 1;
        }
        console.log("Your score: " + playerScore + ", computer score: " + computerScore);
    }

    while (gameOn) {
        if (playerScore > 4) {
            console.log("You win!");
            gameOn = false;
        } else if (computerScore > 4) {
            console.log("You lose!")
            gameOn = false;
        } else {
            console.log(playRound())
            tally(playRound())
        }
    }
}

game()