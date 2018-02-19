// Creating our Letter Constructor function
let Letter = function(letter) {
  this.letter = letter;
  this.isGuessed = false;
}

Letter.prototype.display = function(){
if(this.isGuessed){
  return ' ' + this.letter.toUpperCase() + ' ';
}
else
{
  return '_';
}
};


module.exports = Letter;
