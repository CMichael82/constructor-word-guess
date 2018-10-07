var Letter = require("./letter");
// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

var Word = function (currentWord) {
	// An array of new Letter objects representing the letters of the underlying word
	this.letterArray = [];
	this.letters = currentWord.split("")
	for (var i = 0; i < this.letters.length; i++) {
		this.currentLetter = this.letters[i];
		this.newletter = new Letter(this.currentLetter);
		this.letterArray.push(this.newletter);
	}
	// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
	this.displayWord = function () {
		this.display = " ";
		for (var j = 0; j < this.letterArray.length; j++) {
			this.display += this.letterArray[j].isGuessed();
		}
		console.log(this.display);
	}
	// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
	this.matchWord = function (guess) {
		for (var k = 0; k < this.letterArray.length; k++) {
			this.correctLetter = this.letterArray[k].letter;
			this.letterArray[k].isCorrect(guess, this.correctLetter);
		}
		}
}

// Word.js should only require Letter.js
module.exports = Word;
