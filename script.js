//Variable Decloration
let humanScore = 0;
let computerScore = 0;
let humanChoice = '';
let computerChoice = ''
let roundCount = 1;

//Selectors-DOM
const input = document.querySelector('.input');
const selectRock = document.createElement('button');
const selectPaper = document.createElement('button');
const selectScissors = document.createElement('button');
const buttonWrap = document.createElement('div');
const results = document.createElement('p');
const scoreboard = document.querySelector('.scoreboard');
const roundCountText = document.createElement('h3');
const humanScoreText = document.createElement('h3');
const computerScoreText = document.createElement('h3');

scoreboardUpdate();

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

input.appendChild(results);
scoreboard.appendChild(roundCountText);
scoreboard.appendChild(humanScoreText);
scoreboard.appendChild(computerScoreText);

selectRock.addEventListener('click', function(){
    humanChoice = 'rock';
    playRound();
});
selectPaper.addEventListener('click', function(){
    humanChoice = 'paper';
    playRound();
});
selectScissors.addEventListener('click', function(){
    humanChoice = 'scissors';
    playRound();
});

//Round Play And Scoreboard
function playRound() {
    let compSelection = getComputerChoice();
    roundCount++;
    
    if (compSelection === humanChoice ) {
        results.textContent = "I picked " + compSelection + "!\n It's a draw!";
    } else if (compSelection === "rock" && humanChoice === 'paper'){
        humanScore++;
        results.textContent = "I picked " + compSelection + "!\n You win! You gain one point!";
    } else if (compSelection === "rock" && humanChoice === 'scissors'){
        computerScore++;
        results.textContent = "I picked " + compSelection + "!\n I win! I gain one point!";
    } else if (compSelection === "paper" && humanChoice === 'scissors'){
        humanScore++;
        results.textContent = "I picked " + compSelection + "!\n You win! You gain one point!";
    } else if (compSelection === "paper" && humanChoice === 'rock'){
        computerScore++;
        results.textContent = "I picked " + compSelection + "!\n I win! I gain a point!";
    } else if (compSelection === "scissors" && humanChoice === 'rock') {
        humanScore++;
        results.textContent = "I picked " + compSelection + "!\n You win! You gain one point!";
    } else if (compSelection === "scissors" && humanChoice === 'paper') {
        computerScore++;
        results.textContent = "I picked " + compSelection + "!\n I win! I gain one point!";
    } else {
        console.log("how");
    }
    scoreboardUpdate();

    //Game End
    if (roundCount === 6){
        humanScore = 0;
        computerScore = 0;
        roundCount = 1;
        scoreboardUpdate();

        if (humanScore > computerScore) {
            console.log("Congrats! You win nothing at all!")
            replayFunc();
        } else if (humanScore === computerScore) {
            results.textContent = "Congrats! You win sweet FA!";
        }else {
            results.textContent = "Sorry, you lose...";
        }
    } 
}
function scoreboardUpdate() {
    roundCountText.innerHTML = 'This is round <span class="highlighted">' + roundCount + '</span>.'
    humanScoreText.innerHTML = 'You currently have <span class="highlighted">' + humanScore + '</span> points.';
    computerScoreText.innerHTML = 'I currently have <span class="highlighted">' + computerScore + '</span> points.';
}
//Computer Choice
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
 
