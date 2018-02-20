let Letter = require("./letter.js");

// Creating our Word Constructor function
let Word = function(word) {
  this.word = word;

  // push our word into our letter array
  this.letterArr = word.split("").map(letter => new Letter(letter))
  this.isGuessed = false;
  this.lettersInWord = this.word.length;

  // Testing / Debugging
  console.log(this.word);
  console.log(this.letterArr);
  console.log(this.lettersInWord);
};

Word.prototype.generateDisplay = function() {
  console.log(this.letterArr);
  // let that = this;
  let letterArr = this.letterArr;
  let wordString = "";
  for (var i = 0; i < letterArr.length; i++) {
    wordString += this.letterArr[i].display();
  };
  console.log(wordString + "\n");
};

module.exports = Word;




let test = new Word("trve");
test.generateDisplay();
// test.renderWord();
