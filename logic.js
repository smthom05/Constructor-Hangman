// Our Global Variables
// =============================================================================
// Our NPM Packages
const inquirer = require("inquirer");
const prompt = require("prompt");
const figlet = require("figlet");

// Our Constructor Functions
let Letter = require("./letter.js");
let Word = require("./word.js");

// Our Figlet Function
// figlet("COLORADO BREWERY HANGMAN!", function(err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// Our word options
wordOptions = ["odells", "new belgium", "avery", "left hand", "baere", "denver beer company", "little machine", "new image", "black shirt", "black sky", "trve", "cerebral", "fermaentra", "hogshead", "joyride", "mockery", "prost", "renegade", "upslope", "wynkoop", "banded oak", "copper kettle", "ratio", "bluemoon", "fiction"];

let guessesLeft = 9;
let winCount = 0;
let lossCount = 0;
let letterBlanks = [];
let randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

// Our Game Functions
// =============================================================================

// Our Game constructor Function
const Game = function() {
  this.letterBlanks = [];
  this.startGame = function() {
    // select our random word
    this.currentWord = new Word(randomWord);
    console.log(randomWord);
    this.generateDisplay();
  };

  this.generateDisplay = function() {
    for (var i = 0; i < this.currentWord.length; i++) {
      letterBlanks.push("_");
      return this.currentWord[i].join("_");
    }
    console.log("Generate Display" + this.currentWord);
  }





}

let test = new Game();
test.startGame();
