var Letter = require("./letter");

//Constructor function based on the random word generated//
var Word = function (currentWord) {
	//Separate the word into letters, then for each letter use the Letter Constructor to create a new object//
	this.letterArray = [];
	this.letters = currentWord.split("")
	for (var i = 0; i < this.letters.length; i++) {
		this.currentLetter = this.letters[i];
		this.newletter = new Letter(this.currentLetter);
		this.letterArray.push(this.newletter);
	}
	//Check to see if the user guess matches any letters in the current word - based on the isCorrect method (Letter constructor)//
	this.matchWord = function (guess) {
		for (var k = 0; k < this.letterArray.length; k++) {
			this.letterArray[k].isCorrect(guess);
		}
	}
	//Display the current word in a string - based on the isGuessed method (Letter constructor)
		this.displayWord = function () {
		this.display = " ";
		for (var j = 0; j < this.letterArray.length; j++) {
			this.display += this.letterArray[j].isGuessed();
		}
		console.log(this.display);
	}
}

module.exports = Word;
