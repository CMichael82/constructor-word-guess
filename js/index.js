var Word = require("./word");
var inquirer = require("inquirer");

//GLOBAL VARIABLES//
var wordBank = ["basement", "blueprints", "bricks", "carpenter", "ceiling", "drywall", "foundation", "square", "ventilation"];

var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var lettersRemaining = currentWord.length;
var tries = 15;

//Call the Word Constructor - pass in the current random word - leave outside the playGame function so the letterGuessed state is updated //
var newWord = new Word(currentWord);

//Setup a function to play the game using recursion//
function playGame() {
	//as long as there are tries remaining, keep playing//
	if (tries > 0) {
		//prompt the user for thier guess//
		inquirer.prompt([
			{
				type: "input",
				name: "guess",
				message: "Guess a letter"
			}
		]).then(function (input) {
			console.log("\n-----------------");
			//pass the users guess into the matchWord method & then update word display//
			newWord.matchWord(input.guess);
			newWord.displayWord();
			//number of tries remaining reduced with each guess//
			tries--;
			console.log("\n" + "Tries Remaining: " + tries + "\n");
			//run function to check if all letters of the word have been guessed//
			lettersInWord(input.guess);
			//Determine if the player can continue game or win/loss, if win/loss, play again?
			if (tries > 0 && lettersRemaining > 0) {
				playGame();
			} else if (tries > 0 && lettersRemaining === 0) {
				console.log("YOU WIN!" + "\n");
				promptNewGame();
			} else {
				console.log("YOU LOSE! No Guesses Remaining" + "\n");
				promptNewGame();
			}
		});
	}
}

//Initial display of letter spaces - prior to any guesses being made//
function showSpaces() {
	var showSpaces = ""
	for (var i = 0; i < currentWord.length; i++) {
		showSpaces += " _ ";
	}
	console.log(showSpaces + "\n");
}

//Keep track of how many letters are left to be guessed - DO THIS IN THE isCorrect method(Letter.js)?
function lettersInWord(guess) {
	if (currentWord.indexOf(guess) > -1) {
		for (var i = 0; i < 26; i++) {
			if (currentWord[i] === guess) {
				lettersRemaining--;
			}
		}
	}
	console.log("Letters Left to Find: " + lettersRemaining + "\n");
}

//If win/lose, ask the player if they would like to play again//
function promptNewGame() {
	inquirer
		.prompt({
			name: "again",
			type: "confirm",
			message: "Would you like to play another game?"
		})
		.then(function (answer) {
			//if player wants to play again, reset game//
			if (answer.again === true) {
				currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
				lettersRemaining = currentWord.length;
				newWord = new Word(currentWord);
				tries = 15;
				showSpaces();
				playGame();
			} else {
				console.log("Come back again soon!");
			}
		});
}

//CALL FUNCTIONS///
showSpaces();
playGame();

