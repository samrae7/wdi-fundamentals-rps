////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

playToFive();

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors':")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return (move || getInput());
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   return (move || randomPlay());
}

function getWinner(playerMove,computerMove) {

    var winner;

    if (playerMove===computerMove) {
     winner = 'tie';
    }

    else if (((playerMove=='scissors')&&(computerMove=='paper'))||((playerMove=='paper')&&(computerMove=='rock'))
        ||((playerMove=='rock')&&(computerMove=='scissors'))) {
     winner = 'player';
    }
    
    else {
     winner = 'computer';
    }
    return winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;

   while ((playerWins<5)&&(computerWins<5)) {

    playerMove=getPlayerMove();
    console.log('Player chooses '+playerMove);

    computerMove=getComputerMove();
    console.log('Computer chooses '+computerMove);

    winner=getWinner(playerMove,computerMove);
    

    if (winner=='player') {
        playerWins+=1;
        console.log('Player wins');
    }

    else if (winner=='computer') {
        computerWins+=1;
        console.log('Computer wins');
    }
    
    else {
        console.log('It\'s a tie');
    }
    
    console.log('The score is '+ playerWins+' to the player and '+computerWins+' to the computer');
    console.log('=================================');
    }
    console.log('GAME OVER');
    if(playerWins>=computerWins) {
        console.log('PLAYER WON');
    }
    else {
        console.log('COMPUTER WON');
    }
    
   }