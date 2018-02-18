let Letter = require("./letter.js");

// Creating our Word Constructor function
let Word = function(word) {
  this.word = word;
  this.letterArr = [];
  this.numBlanks = this.word.length;


}

Word.prototype.generateLetterArr = function(word){
  let newWordArr = this.word.split("");

  for (var i = 0; i < newWordArr.length; i++) {
    let newLtr = new Letter(newWordArr[i]);
  };
};

module.exports = Word;


// let test = new Word("odells");
//
// test.generateLetterArr();
// console.log(test.numBlanks);
