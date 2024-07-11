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
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

/* function to add placeholders for each letter*/
const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push(" ● ");
  }
  wordInProgess.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
  e.preventDefault();

  //empty paragragh text for message element
  message.innerText = "";

  const guessTry = letterInput.value;
  //console.log(guessTry);

  const newGuess = playersInput(guessTry);

  if (newGuess) {
    makeGuess(guessTry);
  }

  letterInput.value = "";
});

const playersInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;

  //Is user input empty?
  if (input.length === 0) {
    message.innerText = "Please enter a letter";

    //Did user input more than one letter?
  } else if (input.length > 1) {
    message.innerText = "Only enter one letter at a time";

    //Did user input more than one letter?
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "Please enter a letter from a to z.";
    //Input is a letter?  Great!
  } else {
    return input;
  }
};

const makeGuess = function (letter) {
  letter = letter.toUpperCase();
  if (guessedLetters.includes(letter)) {
    message.innerText = "You've already guessed that letter and try again.";
  } else {
    guessedLetters.push(letter);
    console.log(guessedLetters);
  }
};
