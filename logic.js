// Our Global Variables
// =============================================================================
// Our NPM Packages
const inquirer = require("inquirer");
const prompt = require("prompt");
const figlet = require("figlet");

// Our Constructor Functions
let Letter = require("./letter.js");
let Word = require("./word.js");

// // Our Figlet Function
// const title = figlet("Colorado Craft Brewery Hangman", function(err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// Our word options
const wordOptions = ["odells", "new belgium", "avery", "left hand", "baere", "denver beer company", "little machine", "new image", "black shirt", "black sky", "trve", "cerebral", "fermaentra", "hogshead", "joyride", "mockery", "prost", "renegade", "upslope", "wynkoop", "banded oak", "copper kettle", "ratio", "bluemoon", "fiction"];

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
    // console.log(title);
    // select our random word
    this.currentWord = new Word(randomWord);
    // console.log(randomWord);
    this.currentWord.generateDisplay();
    this.promptLetter();
  };

  this.promptLetter = function() {
    inquirer
      .prompt([{
        type: "input",
        name: "letterChoice",
        message: "Please guess a letter"
      }]).then(function(answer){
        console.log(answer.letterChoice);
        if (answer.letterChoice =)
      })

    };

  this.reset = function(){
    guessesLeft = 9;
  }




}

let test = new Game();
test.startGame();
