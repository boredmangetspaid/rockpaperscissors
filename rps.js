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
    
function displayMessage(roundResult,playerSelection,computerSelection){
    let displayDiv = document.querySelector("div#results");
    if(roundResult=="tie"){
        displayDiv.innerHTML="it was a tie!"
    } 
    else if(roundResult=="lose"){
        displayDiv.innerHTML= `${playerSelection} loses to ${computerSelection}`
    }else {
        displayDiv.innerHTML=`${playerSelection} wins against ${computerSelection}`
    }
}




let win = 0;
let lose = 0;
let tie = 0;

let buttons = document.querySelectorAll('button');
buttons.forEach(
    button => {
        button.addEventListener('click', (e) => {
            let playerChoice = e.target.id;
            let computerChoice = getComputerChoice();
            let result = playRound(playerChoice,computerChoice);
            displayMessage(result,playerChoice,computerChoice);

        })
    }
)