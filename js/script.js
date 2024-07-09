/* global variable to select unordered list  */
/* global variable to select unordered list  */
/* global variable to select unordered list  */
/* global variable to select unordered list  */
/* global variable to select unordered list  */
/* global variable to select unordered list  */
/* global variable to select unordered list  */
/* global variable to select unordered list  */
const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgess = document.querySelector(".word-in-progress");
const remGuessElement = document.querySelector(".remaining");
const remGuessSpan = document.querySelector(".remaining span");
const  message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

const word = "magnolia";

/* function to add placeholders for each letter*/
const placeholder = function(word) {
const placeholderLetters = [];
for (const letter of word) {
console.log(letter);
placeholderLetters.push(" ● ");
}
wordInProgess.innerText =placeholderLetters.join("")
};

placeholder(word);

guessButton.addEventListener("click", function(e) {
e.preventDefault();
const guessTry = letterInput.value;
console.log(guessTry);
letterInput.value = "";

});