
        //-Take input of rock/paper/scissors from the user. -Check- *Kinda
        //-Make sure that these are the only values allowed. -Check-
        //-Create a function that generates a random answer between the three. -Check-
        //-Add win and lose states/messages. -Check-

        let humanScore = 0;
        let computerScore = 0;

        //Computer Choice and Human Choice functions
        
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

            return computerChoice.toLowerCase();
        }


        function getHumanChoice() {

            let humanChoice = prompt("Please make your move: Rock, Paper or Scissors?")
            
            if (humanChoice.toLowerCase() !== "rock" && humanChoice.toLowerCase() !== "paper" && humanChoice.toLowerCase() !== "scissors"){
                console.log("Wrong input. Please try again.")
                getHumanChoice();
            }

            return humanChoice.toLowerCase();
        }
            
            

        //Round function and start

        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        function playRound(computerChoice,humanChoice) {
            
            getComputerChoice();
            getHumanChoice();
     
            if (computerChoice === humanChoice) {

                console.log("It's a Tie!");
                console.log("You currently have " + humanScore + " points");
                console.log("I currently have " + computerScore + " points");
                playRound();

            } else if (computerChoice === "rock" && humanChoice === 'paper'){

                humanScore++;
                console.log("You win! You gain one point!");
                console.log("You currently have " + humanScore + " points");
                console.log("I currently have " + computerScore + " points");
                playRound();

            } else if (computerChoice === "rock" && humanChoice === 'scissors'){

                computerScore++;
                console.log("I win! I gain a point!");
                console.log("You currently have " + humanScore + " points");
                console.log("I currently have " + computerScore + " points");
                playRound();

            } else if (computerChoice === "paper" && humanChoice === 'scissors'){

                humanScore++;
                console.log("You win! You gain one point!");
                console.log("You currently have " + humanScore + " points");
                console.log("I currently have " + computerScore + " points");
                playRound();
                
            } else if (computerChoice === "paper" && humanChoice === 'rock'){

                computerScore++;
                console.log("I win! I gain a point!");
                console.log("You currently have " + humanScore + " points");
                console.log("I currently have " + computerScore + " points");
                playRound();

            } else if (computerChoice === "scissors" && humanChoice === 'rock') {

                humanScore++;
                console.log("You win! You gain one point!");
                console.log("You currently have " + humanScore + " points");
                console.log("I currently have " + computerScore + " points");
                playRound();
                
            } else if (computerChoice === "scissors" && humanChoice === 'paper') {

                computerScore++;
                console.log("I win! I gain a point!");
                console.log("You currently have " + humanScore + " points");
                console.log("I currently have " + computerScore + " points");
                playRound();

            } else {
                console.log("Placeholder");
            }

            playRound();

        }

        playRound();
