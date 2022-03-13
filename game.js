let playerScore = 0;
let computerScore = 0;
game();



function playRound(playerSelection, computerSelection){
    console.log("What is your choise?")
    console.log("Player selects" + playerSelection)
    console.log("Computer selects" + computerSelection)

    if (playerSelection === "Rock" && computerSelection === "Rock"){
        console.log("Tie")
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        computerScore++;
        console.log("Computer wins")
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        playerScore++;
        console.log("Human wins")
    }


    if (playerSelection === "Paper" && computerSelection === "Paper"){
        console.log("Tie")
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        computerScore++;
        console.log("Computer wins")
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        playerScore++;
        console.log("Human wins")
    }

    if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        console.log("Tie")
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        computerScore++;
        console.log("Computer wins")
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        playerScore++;
        console.log("Human wins")
    }
    console.log("Computer score" + computerScore );
    console.log("Player score" + playerScore)
}

function computerPlay() {
    let max = 4;
    let min = 1;
    var items = ["Rock","Paper","Scissors"];
    var item = items[Math.floor(Math.random()*items.length)];
    return item;
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log("Round #" + i)
        const playerSelection = prompt("Choose your weapon")
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    console.log("Game over")
    if(playerScore > computerScore) {
        console.log("You are the Winner")
    } else if (playerScore == computerScore) {
        console.log("Its a tie")
    } else if (playerScore < computerScore) {
        console.log ("Computer wins");
    }
}


