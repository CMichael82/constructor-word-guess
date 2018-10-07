var Word = require("./word");
var wordBank = ["basement", "blueprints", "bricks", "carpenter", "ceiling", "drywall", "foundation", "square footage", "ventilation" ];
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(currentWord);

var word = new Word (currentWord);

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses