//-Take input of rock/paper/scissors from the user.
//-Make sure that these are the only values allowed.
//-Create a function that generates between the three.
//Add win and lose states/messages.

function getComputerChoice(){
    let choice = ''
    let randomNum = Math.floor((Math.random() * 3) + 1 )

    if (randomNum === 1) {
        choice = 'Rock';
    } else if (randomNum === 2) {
        choice = "Paper";
    } else {
        choice = "Scissors"
    }

    console.log(choice);
}

