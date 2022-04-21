let playerScore = 0;
let computerScore = 0;
game();




function playRound(playerSelection){
    const computerSelection = computerPlay();
    console.log("What is your choise?")
    console.log("Player selects" + playerSelection)
    console.log("Computer selects" + computerSelection)


    if (playerSelection === "Rock" && computerSelection === "Rock"){
        document.querySelector('#text').innerHTML = 'its a tie';
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        computerScore++;
        document.querySelector('#text').innerHTML = 'Computer wins this round';
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        playerScore++;
        document.querySelector('#text').innerHTML = 'You win this round';
    }


    if (playerSelection === "Paper" && computerSelection === "Paper"){
        document.querySelector('#text').innerHTML = 'its a tie'
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        computerScore++;
        document.querySelector('#text').innerHTML = 'Computer wins this round';
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        playerScore++;
        document.querySelector('#text').innerHTML = 'You win this round';
    }

    if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        document.querySelector('#text').innerHTML = 'its a tie'
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        computerScore++;
        document.querySelector('#text').innerHTML = 'Computer wins this round';
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        playerScore++;
        document.querySelector('#text').innerHTML = 'You win this round';
    }
    document.querySelector('#Cscore').innerHTML =('Computer score' + computerScore);
    document.querySelector('#Pscore').innerHTML =('player score'+ playerScore);
    gameEnd();
}

function computerPlay() {
    let max = 4;
    let min = 1;
    var items = ["Rock","Paper","Scissors"];
    var item = items[Math.floor(Math.random()*items.length)];
    return item;
}

function game() {
    { 
    const playerSelection = choises(); 
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
};



function choises() {
    const Rock = document.getElementById('Rock');
    Rock.addEventListener('click', () => {
        playRound(playerSelection = "Rock"); 
        
    })
    const Paper = document.getElementById('Paper');
    Paper.addEventListener('click', () => {
        playRound(playerSelection = "Paper");
    })
    const Scissors = document.getElementById('Scissors');
    Scissors.addEventListener('click', () => {
        playRound(playerSelection ='Scissors');
        
    })
}};

function gameEnd() {
    if (computerScore === 5) {
        document.querySelector('#gameEnd').innerHTML = ('computer wins')
        disableButtons()
    } else if (playerScore === 5) {
        document.querySelector('#gameEnd').innerHTML = ('playerwins')
        disableButtons()
    }
}
function disableButtons() {
    document.getElementById("Rock").disabled = true;
    document.getElementById("Paper").disabled = true;
    document.getElementById("Scissors").disabled = true;
}