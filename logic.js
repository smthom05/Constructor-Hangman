// Our Global Variables
// =============================================================================
// Our NPM Packages
const inquirer = require("inquirer");
const prompt = require("prompt");

// Our Constructor Functions
let Letter = require("./letter.js");
let Word = require("./word.js");

// Our word array
const wordOptions = ["odells", "newbelgium", "avery", "lefthand", "baere", "denverbeercompany", "littlemachine", "newimage", "blackshirt", "blacksky", "trve", "cerebral", "fermaentra", "hogshead", "joyride", "mockery", "prost", "renegade", "upslope", "wynkoop", "bandedoak", "copperkettle", "ratio", "bluemoon", "fiction"];

let userGuesses = [];
let guessesLeft = 9;
let winCount = 0;
let lossCount = 0;









// Functions
// =============================================================================

function startGame() {
guessesLeft = 9;
chooseWord();
}

function chooseWord() {
  let word = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  console.log(word);

  let newGame = new Word(word);

  newGame.generateLetterArr();

  console.log(newGame);

  generateDisplay(newGame);
}

function generateDisplay(newGame) {
  newGame.generateWordDisplay();
}

function playAgain() {
  inquirer
    .prompt([{
      type: "confirm",
      name: "playAgain",
      message: "Would you like to play again?",
      default: true
    }]).then(function(answer) {
      if (answer.playAgain === true) {
        startGame();
      } else {
        console.log("Thanks for playing!")
        return;
      }
    })
}





// Start our game
startGame();
