
        //-Take input of rock/paper/scissors from the user. -Check- *Kinda
        //-Make sure that these are the only values allowed. -Check-
        //-Create a function that generates a random answer between the three. -Check-
        //-Add win and lose states/messages. -Check-

        let humanScore = 0;
        let computerScore = 0;

        //Computer Choice and Human Choice functions


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
            
            return computerChoice.toLowerCase();
        }


        function getHumanChoice(){

            let humanChoice = prompt("Please make your move: Rock, Paper or Scissors?")
            
            if (humanChoice.toLowerCase() !== "rock" && humanChoice.toLowerCase() !== "paper" && humanChoice.toLowerCase() !== "scissors"){
                console.log("Wrong input. Please try again.")
                getHumanChoice();
            }

            return humanChoice.toLowerCase();
        }
            
            let compSelection = getComputerChoice();
            let humSelection = getHumanChoice();

        //Round function and start

        function playRound() {
            

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
        
                //Computer Choice does not change no matter how many times the funtion is called.
        function playGame() {

            //Round 1
            playRound();
            getComputerChoice();
            getHumanChoice();

            //Round 2
            playRound();
            getComputerChoice();
            getHumanChoice();

            //Round 3
            playRound();
            getComputerChoice();
            getHumanChoice();

            //Round 4
            playRound();
            getComputerChoice();
            getHumanChoice();

            //Round 5
            playRound();
            getComputerChoice();
            getHumanChoice();
           
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
            if (humanScore > compSelection) {
                console.log("Congrats! You win nothing at all!")
                replayFunc();
            } else {
                console.log("You lose...sorry")
                replayFunc();
            }
        }

        playGame();
    
        //It seems to generate it here and then it stops doing so when called.