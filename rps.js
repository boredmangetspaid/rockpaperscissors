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

    if(playerSelection=="rock"&&computerSelection=="scissor"){
        return 'win';
    }else if(playerSelection=="rock"&&computerSelection=="paper"){
        return 'lose';
    }else if(playerSelection=="scissor"&&computerSelection=="paper"){
        return 'win';
    }else if (playerSelection=="scissor"&&computerSelection=="rock"){
        return "lose";
    }else if(playerSelection=="paper"&&computerSelection=="rock"){
        return "win";
    }else if (playerSelection=="paper"&&computerSelection=="scissor"){
        return "lose";
    }else {return "tie"};
}
