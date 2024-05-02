//-Take input of rock/paper/scissors from the user. 
//-Make sure that these are the only values allowed. 
//-Create a function that generates a random answer between the three. -Check-
//Add win and lose states/messages.

function getComputerChoice(){
    let computerChoice = ''
    let randomNum = Math.floor((Math.random() * 3) + 1 )

    if (randomNum === 1) {
        computerChoice = 'Rock';
    } else if (randomNum === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors"
    }

    console.log(computerChoice)
}

function getHumanChoice() {
    getComputerChoice();
    let userChoice = prompt("Please make your move: Rock, Paper or Scissors?")
    
    if (userChoice.toLowerCase() != "rock" || userChoice.toLowerCase() != "paper" || userChoice.toLowerCase() != "Scissors"){
        console.log("Wrong input. Please try again.")
        getHumanChoice();
    }
}

getHumanChoice();

