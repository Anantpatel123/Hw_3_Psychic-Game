var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var possibleGuesses = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var gameStarted = false;

document.onkeyup = function (event) {

  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  if (!gameStarted && userGuess === "1") {//if start game if
    gameStarted = true;
    showStats("", "");
  }
  else if(!gameStarted && userGuess !== "1") { // if startgame
    alert("hit 1 to start"); // if startgame
  } // if startgame

    else if (gameStarted && (possibleGuesses.includes(userGuess))) {
      
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        guessesSoFar.push(userGuess);

          if (userGuess === computerGuess) {
              wins++ , guessesLeft = 9, guessesSoFar = [];
              alert("You WON!!!!");
          }
          else if (guessesLeft === 0) {
              losses++ , guessesLeft = 9, guessesSoFar = [];
              alert("You Lost!!!")
          }
          else {
              guessesLeft--;
          }  
  
    showStats(userGuess, computerGuess);

  }
}

function showStats(userGuess, computerGuess){
  var html =
      "<p>You chose: " + userGuess + "</p>" +
      "<p>The computer chose: " + computerGuess + "</p>" +
      "<p>wins: " + wins + "</p>" +
      "<p>losses: " + losses + "</p>" +
      "<p>Guess left: " + guessesLeft + "</p>" +
      "<p>Your guesses so far: " + guessesSoFar + "</p>";

      document.querySelector("#game").innerHTML = html;
}
