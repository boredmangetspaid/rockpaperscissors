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
        return 'win';
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return 'lose';
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        return 'win';
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        return "lose";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "win";
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        return "lose";
    } else {
        return "tie"
    };
}

function game() {

    let rounds = 0;
    let win = 0;
    let lose = 0;
    let tie = 0;
    while (rounds < 5) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt().toLowerCase();
        let result = playRound(computerChoice, playerChoice);

        if (result == "win") {
            win++;
        } else if (result == "lose") {
            lose++
        } else {
            tie++
        }
        rounds++;

    }
    console.log('game over')
    if (win > lose) {
        console.log("player wins");
    } else if (lose > win) {
        console.log("player loses")
    } else {
        console.log("it was a tie")
    }
    console.log(`wins:${win}, loses:${lose}, ties ${tie}`)
}

game();