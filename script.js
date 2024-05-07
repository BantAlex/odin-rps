//Variable Decloration
let humanScore = 0;
let computerScore = 0;
let humanChoice = '';
let computerChoice = ''
let roundCount = 0;
let isPlaying = false;

//Selectors-DOM
const input = document.querySelector('.input');
const selectRock = document.createElement('button');
const selectPaper = document.createElement('button');
const selectScissors = document.createElement('button');
const buttonWrap = document.createElement('div');

input.appendChild(buttonWrap);
buttonWrap.classList.add('button-wrap');

const selections = [selectRock,selectPaper,selectScissors];

selections.forEach((buttons) => buttonWrap.appendChild(buttons));
selections.forEach((button) => button.classList.add('button-selection'));

selectRock.textContent = 'Rock';
selectPaper.textContent = 'Paper';
selectScissors.textContent = 'Scissors';

selectRock.classList.add('input');
selectPaper.classList.add('input');
selectScissors.classList.add('input');

selectRock.addEventListener('click', function(){
    humanChoice = 'rock';
    playGame();
});
selectPaper.addEventListener('click', function(){
    humanChoice = 'paper';
    playGame();
});
selectScissors.addEventListener('click', function(){
    humanChoice = 'scissors';
    playGame();
});

//Round function and start
function playRound() {
    isPlaying = true;

    let compSelection = getComputerChoice();

    if (compSelection === humanChoice ) {

        console.log("I picked " + compSelection + "!")
        console.log("It's a Tie!");
        console.log("You currently have " + humanScore + " points");
        console.log("I currently have " + computerScore + " points");

    } else if (compSelection === "rock" && humanChoice === 'paper'){

        humanScore++;
        console.log("I picked " + compSelection + "!")
        console.log("You win! You gain one point!");
        console.log("You currently have " + humanScore + " points");
        console.log("I currently have " + computerScore + " points");

    } else if (compSelection === "rock" && humanChoice === 'scissors'){

        computerScore++;
        console.log("I picked " + compSelection + "!")
        console.log("I win! I gain a point!");
        console.log("You currently have " + humanScore + " points");
        console.log("I currently have " + computerScore + " points");

    } else if (compSelection === "paper" && humanChoice === 'scissors'){

        humanScore++;
        console.log("I picked " + compSelection + "!")
        console.log("You win! You gain one point!");
        console.log("You currently have " + humanScore + " points");
        console.log("I currently have " + computerScore + " points");
        
    } else if (compSelection === "paper" && humanChoice === 'rock'){

        computerScore++;
        console.log("I picked " + compSelection + "!")
        console.log("I win! I gain a point!");
        console.log("You currently have " + humanScore + " points");
        console.log("I currently have " + computerScore + " points");

    } else if (compSelection === "scissors" && humanChoice === 'rock') {

        humanScore++;
        console.log("I picked " + compSelection + "!")
        console.log("You win! You gain one point!");
        console.log("You currently have " + humanScore + " points");
        console.log("I currently have " + computerScore + " points");
        
    } else if (compSelection === "scissors" && humanChoice === 'paper') {

        computerScore++;
        console.log("I picked " + compSelection + "!")
        console.log("I win! I gain a point!");
        console.log("You currently have " + humanScore + " points");
        console.log("I currently have " + computerScore + " points");

    } else {
        console.log("how");
    }
    isPlaying = false;
}
    
function playGame() {

    playRound();
    roundCount++;
    
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
    if (roundCount === 5){
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
}
//Computer Choice and Human Choice functions
function getComputerChoice(){

    let randomNum = Math.floor((Math.random() * 3) + 1 )

    if (randomNum === 1) {
        computerChoice = 'rock';
    } else if (randomNum === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors"
    }
    
    return computerChoice.toLowerCase();
}
 
