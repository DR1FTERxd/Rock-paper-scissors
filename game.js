function computerPlay() {
    var items = ["Rock","Paper","Scissors"];
    var item = items[Math.floor(Math.random()*items.length)];
    return item;
};



function playRound(playerSelection, computerSelection){
    if (playerSelection === "Rock" && computerSelection === "Rock"){
        return ("Tie")
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        return ("Computer wins")
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return ("Human wins")
    };


    if (playerSelection === "Paper" && computerSelection === "Paper"){
        return ("Tie")
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return ("Computer wins")
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return ("Human wins")
    };

    if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        return ("Tie")
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return ("Computer wins")
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return ("Human wins")
    };


};

function game(playRound){
    for (let i = 0; i < 5; i++) {
        function playRound(playerSelection, computerSelection){
            if (playerSelection === "Rock" && computerSelection === "Rock"){
                return ("Tie")
            } else if (playerSelection === "Rock" && computerSelection === "Paper"){
                return ("Computer wins")
            } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
                return ("Human wins")
            };
        
        
            if (playerSelection === "Paper" && computerSelection === "Paper"){
                return ("Tie")
            } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
                return ("Computer wins")
            } else if (playerSelection === "Paper" && computerSelection === "Rock"){
                return ("Human wins")
            };
        
            if (playerSelection === "Scissors" && computerSelection === "Scissors"){
                return ("Tie")
            } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
                return ("Computer wins")
            } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
                return ("Human wins")
            };
        
        
        };
     };
};


const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));