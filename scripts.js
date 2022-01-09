
// set up choices
const choices = ["rock", "paper", "scissors"];

// function to generate computer choice
function computerPlay() {
    return(choices[Math.floor(Math.random() * choices.length)]);
}

// set up battle_versus as String
const battle_versus = document.querySelector('.battle-versus');
battle_versus.innerHTML = "Rock, paper, scissors... Shoot!";

// set up result_beats, result_battle as Strings
const result_beats = document.querySelector('#result-beats');
const result_battle = document.querySelector('#result-battle');
result_beats.innerHTML = "Choose an attack below!";
result_battle.innerHTML = "...";

// set up score count
const player_score = document.querySelector('#player-score');
const computer_score = document.querySelector('#computer-score');

function updateScore(combatant_score) {
    let score = Number(combatant_score.innerHTML) + 1;
    combatant_score.innerHTML = score;
}

// function to announce game over
function gameOver(combatant_victory) {
    if (Number(combatant_victory.innerHTML) == 5) {
        alert("Game over! " + result_battle.innerHTML);
    } else {
        let nothing = "happens";
    }
}

// get value from player choice button
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        // record player and computer choices in battle_versus
        let player_choice = button.innerHTML;
        let computer_choice = computerPlay();
        battle_versus.innerHTML = (player_choice + " vs. " + computer_choice + "...");

        // check for battle tie
        if (player_choice == computer_choice) { // tie
            result_beats.innerHTML = (player_choice + " is the same as " + computer_choice + "...");
            result_battle.innerHTML = ("You tie!");
        } 
        // check for battle win
        else if (((player_choice == "rock") && (computer_choice == "scissors")) || ((player_choice == "scissors") && (computer_choice == "paper")) || ((player_choice == "paper") && (computer_choice == "rock"))) {
            result_beats.innerHTML = (player_choice + " beats " + computer_choice + "...");
            result_battle.innerHTML = ("You win!");

            // add 1 point to player_score and check for game over
           updateScore(player_score);
           gameOver(player_score);
        }
        // check for battle loss
        else {
            result_beats.innerHTML = (computer_choice + " beats " + player_choice + "...");
            result_battle.innerHTML = ("You lose!");

            // add 1 point to computer_score and check for game over
            updateScore(computer_score);
            gameOver(computer_score);
        }
    });
});


