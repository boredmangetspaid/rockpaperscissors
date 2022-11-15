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

    if (playerSelection == "rock" && computerSelection == "scissor") {
        console.log("rock beats scissors");
        return 'win';
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("rock loses to paper");
        return 'lose';
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        console.log('scissor beats paper');
        return 'win';
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        console.log("scissor loses to rock");
        return "lose";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("paper beats rock");
        return "win";
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        console.log("paper loses to scissor")
        return "lose";
    } else {
        return "tie"
    };
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