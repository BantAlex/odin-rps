# odin-rps

This is a Rock Paper Scissors game project made for the Odin Project.

It will be played only in the console.

*Main issues encountered*

-The human's and computer's choice values would not update after the initial call of the function.
Despite the rounds changing, the values stayed the same(even though in the human's case, he was prompted to 
give another value. It did not change).

What happened was, I assigned *humanSelection* and *computerSelection* in the global scale.
And even though I called these function AGAIN inside the playRound one, the values did not change. The variables 
kept their original values.

Turns out, calling functions in the global scale makes the variables assigned in these functions stay the same despite being called again in a smaller scale(another function).

...at least that's how I understand it 😬. Issue solved though!

-Other issuses consisted of typos, wrong variables being compared in if statements, the order of function decloration,
using "or" (||) instead of "and" (&&) in if statements and more.

Minor issues but important ones. Should've updated the README while I encountered them, I'll keep that in mind in future
projects, it's good to keep track of them, mainly for me, and maybe, for someone stumbling on this project. Hope it helps.
Some commit messages should help though.

*TO-DOs*

-Make an actual UI for the player to interact instead of using the console.
-Clean up the code a bit. Maybe a switch statement would work better when comparing the 2 players?
-Add the project to a future portfolio page.
-Add easter eggs.
-Get rid of the prompt window and make it a text input instead with messages. 