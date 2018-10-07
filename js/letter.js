// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
var letter = process.argv[2];

var Letter = function (letter) {
	// A string value to store the underlying character for the letter
	// A boolean value that stores whether that letter has been guessed yet
	this.letterGuessed = false;
	this.letter = letter;
	this.isGuessed = function () {
		// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
		if (this.letter) {
			console.log("Letter Guessed: " + this.letter);
		} else {
			console.log("_");
		}
	}
	// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
	this.isCorrect = function (letter) {
		if (letter === "a") {
			this.letterGuessed = true;
			console.log("Correct?: " + this.letterGuessed);
		} else{
			console.log("Correct?: " + this.letterGuessed);
		}
	}
}
//CALL Functions//
var character = new Letter(letter);
character.isGuessed(letter);
character.isCorrect(letter);
// Letter.js should not require any other files.

// HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)