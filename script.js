//-Take input of rock/paper/scissors from the user. 
//-Make sure that these are the only values allowed. 
//-Create a function that generates a random answer between the three. -Check-
//Add win and lose states/messages.

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computerChoice = ''
    let randomNum = Math.floor((Math.random() * 3) + 1 )

    if (randomNum === 1) {
        computerChoice = 'Rock';
    } else if (randomNum === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors"
    }

    console.log(computerChoice);
    return computerChoice;
}


function getHumanChoice() {
    let humanChoice = prompt("Please make your move: Rock, Paper or Scissors?")
    
    if (humanChoice.toLowerCase() != "rock" || humanChoice.toLowerCase() != "paper" || humanChoice.toLowerCase() != "Scissors"){
        console.log("Wrong input. Please try again.")
        getHumanChoice();
    }

    return humanChoice;
}


function playRound() {

    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (computerChoice === humanChoice) {
        console.log("It's a Tie!")
        playRound();
    }
}

playRound();
