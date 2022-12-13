function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) {
        return 'rock';
    } else if (choice == 2) {
        return 'paper'
    } else if (choice == 3) {
        return "scissor"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'tie';
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        return 'win';
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        return 'win';
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return 'win';
    } else {
        return 'lose';
    }
}

function displayMessage(roundResult, playerSelection, computerSelection) {
    let displayDiv = document.querySelector("div#results");
    if (roundResult == "tie") {
        displayDiv.innerHTML = "it was a tie!"
    } else if (roundResult == "lose") {
        displayDiv.innerHTML = `${playerSelection} loses to ${computerSelection}`
    } else {
        displayDiv.innerHTML = `${playerSelection} wins against ${computerSelection}`
    }
}

let win = 0;
let lose = 0;
let tie = 0;
let totalRounds = 0;

function scoreboard() {
    let scoreboard = document.querySelector("div#scoreboard");
    scoreboard.innerHTML = `wins ${win} , losses${lose}, ties${tie}`
    console.log(totalRounds)
}
function resetScoreBoard(){
    win= 0;
    lose = 0;
    tie = 0;
    totalRounds=0;
}



let buttons = document.querySelectorAll('button');
buttons.forEach(
    button => {
        button.addEventListener('click', (e) => {
            let playerChoice = e.target.id;
            let computerChoice = getComputerChoice();
            let result = playRound(playerChoice, computerChoice);
            displayMessage(result, playerChoice, computerChoice);
            console.log(result);
            if (result == "win") {
                win++;

            } else if (result == "lose") {
                lose++;
            } else {
                tie++;
            }
            scoreboard();
            
            totalRounds++;

            if (totalRounds > 5) {
                let scoreboard = document.querySelector("div#scoreboard");
                
                if (win > lose) {
                    scoreboard.innerHTML = `Game over you win`
                }
                else if (win < lose) {
                    scoreboard.innerHTML = `Game over you lose :(`;
                } else {
                    scoreboard.innerHTML = `Game over it was a tie!`
                }
            resetScoreBoard();
               

            }
        })
    }
)