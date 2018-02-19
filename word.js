let Letter = require("./letter.js");

// Creating our Word Constructor function
let Word = function(word) {
  this.word = word;
  this.letterArr = [];
  this.lettersGuessed = 0;
  this.numberOfLettersToGuess = this.letterArr.length;
}

Word.prototype.generateLetterArr = function(word) {
  let newWordArr = this.word.split(" ");

  for (var i = 0; i < newWordArr.length; i++) {
    let letter = new Letter(newWordArr[i]);
  };
  this.letterArr.push(this.letter);
};

Word.prototype.generateWordDisplay = function() {
  let word = this.word.split(" ");
  let wordString = "";
  word.forEach(function(letter, index) {
    wordString += this.letterArr[index].display();
  });
  console.log(wordString + '\n');
}

module.exports = Word;
