//Selectors-DOM
const input = document.querySelector('.input');
const selectRock = document.createElement('button')
const selectPaper = document.createElement('button')
const selectScissors = document.createElement('button')


//Score count
let humanScore = 0;
let computerScore = 0;

//Round function and start
function playRound() {

    let compSelection = getComputerChoice();
    let humSelection = getHumanChoice();

    if (compSelection === humSelection) {

        console.log("I picked " + compSelection + "!")
        console.log("It's a Tie!");
        console.log("You currently have " + humanScore + " points");
        console.log("I currently have " + computerScore + " points");

    } else if (compSelection === "rock" && humSelection=== 'paper'){

        humanScore++;
        console.log("I picked " + compSelection + "!")
        console.log("You win! You gain one point!");
        console.log("You currently have " + humanScore + " points");
        console.log("I currently have " + computerScore + " points");

    } else if (compSelection === "rock" && humSelection=== 'scissors'){

        computerScore++;
        console.log("I picked " + compSelection + "!")
        console.log("I win! I gain a point!");
        console.log("You currently have " + humanScore + " points");
        console.log("I currently have " + computerScore + " points");

    } else if (compSelection === "paper" && humSelection=== 'scissors'){

        humanScore++;
        console.log("I picked " + compSelection + "!")
        console.log("You win! You gain one point!");
        console.log("You currently have " + humanScore + " points");
        console.log("I currently have " + computerScore + " points");
        
    } else if (compSelection === "paper" && humSelection=== 'rock'){

        computerScore++;
        console.log("I picked " + compSelection + "!")
        console.log("I win! I gain a point!");
        console.log("You currently have " + humanScore + " points");
        console.log("I currently have " + computerScore + " points");

    } else if (compSelection === "scissors" && humSelection=== 'rock') {

        humanScore++;
        console.log("I picked " + compSelection + "!")
        console.log("You win! You gain one point!");
        console.log("You currently have " + humanScore + " points");
        console.log("I currently have " + computerScore + " points");
        
    } else if (compSelection === "scissors" && humSelection=== 'paper') {

        computerScore++;
        console.log("I picked " + compSelection + "!")
        console.log("I win! I gain a point!");
        console.log("You currently have " + humanScore + " points");
        console.log("I currently have " + computerScore + " points");

    } else {
        console.log("Placeholder");
    }
}
    
function playGame() {

    //Round 1
    playRound();
    
    //Round 2
    playRound();

    //Round 3
    playRound();

    //Round 4
    playRound();

    //Round 5
    playRound();
    
    //Replay Function
    function replayFunc(){

        let replay = prompt("Play again? (Yes/No)");

        if (replay.toLowerCase() === "yes"){
            playGame();
            return replay;
        } else if (replay.toLowerCase() === "no"){
            console.log("Okay, goodbye!")
            return;
        } else{
            console.log("Not a valid option. Please input either YES or NO.")
            replayFunc();
        }
    }

    //Win/Lose condition
    if (humanScore > computerScore) {
        console.log("Congrats! You win nothing at all!")
        replayFunc();
    } else if (humanScore === computerScore) {
        console.log("It's a tie! We both lose!")
        replayFunc();
    }else {
        console.log("You lose...sorry")
        replayFunc();
    }
}

//Computer Choice and Human Choice functions
function getComputerChoice(){

    let computerChoice = 'PH'
    let randomNum = Math.floor((Math.random() * 3) + 1 )

    if (randomNum === 1) {
        computerChoice = 'Rock';
    } else if (randomNum === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors"
    }
    
    return computerChoice.toLowerCase();
}

function getHumanChoice(){

    let humanChoice = prompt("Please make your move: Rock, Paper or Scissors?")
    
    if (humanChoice.toLowerCase() !== "rock" && humanChoice.toLowerCase() !== "paper" && humanChoice.toLowerCase() !== "scissors"){
        console.log("Wrong input. Please try again.")
        return getHumanChoice();
    }

    return humanChoice.toLowerCase();

}
    
playGame();