//Constructor function to check if letter guessed//
var Letter = function (character) {
	this.letterGuessed = false;
	this.letter = character;
	this.isGuessed = function () {
		//If the letter guessed is true(correct guess), then display letter otherwise display a space//
		if (this.letterGuessed === true) {
			return this.letter;
		} else {
			return " _ ";
		}
	}
	//Check if the guessed letter matches the letter in the word, if so update guessed state to true//
	this.isCorrect = function (guess) {
		if (guess === this.letter) {
			this.letterGuessed = true;
			console.log(this.letter + " is CORRECT!" + "\n-----------------");
		}
	}
}

module.exports = Letter;
