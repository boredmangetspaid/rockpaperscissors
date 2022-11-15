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
    if (playerSelection==computerSelection){
        return 'tie';
    }
    else if (playerSelection=="rock"&& computerSelection=="scissor"){
        winMessage(playerSelection,computerSelection);
        return 'win';
    }else if (playerSelection=="scissor"&& computerSelection=="paper"){
        winMessage(playerSelection,computerSelection);
        return 'win';
    }else if(playerSelection=="paper"&&computerSelection=="rock"){
        winMessage(playerSelection,computerSelection);
        return 'win';
    }else{
        loseMessage(playerSelection,computerSelection);
        return 'lose';
    }
}
function winMessage(playerSelection,computerSelection){
    console.log(`${playerSelection} wins against ${computerSelection}`)
}
function loseMessage(playerSelection,computerSelection){
    console.log(`${playerSelection} loses against ${computerSelection}`)
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
            console.log(playRound(playerChoice, computerChoice))
        })
    }
)