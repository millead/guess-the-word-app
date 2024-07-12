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
const remainingGuesses = 8;

const getWord = async function () {
  const res = await fetch ("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
  const words = await res.text();
  //console.log(word);
const wordArray = words.split("\n");
const randomIndex = Math.floor(Math.random() * wordArray.length);
let word = wordArray[randomIndex];

placeholder(word);
};



getWord();



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

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You've already guessed that letter and try again.";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    showPlayerGuess();
    updateWordInProgress(guessedLetters);
  }
};

const showPlayerGuess = function () {
  guessedLettersElement.innerHTML = "";
  for (const item of guessedLetters) {
    const li = document.createElement("li");
    li.innerText = item;
    guessedLettersElement.append(li);
  }
};

const updateWordInProgress = function (guessedLetters) {
  const wordUpper = word.toUpperCase();
  const wordArray = wordUpper.split("");
  //console.log(wordArray);
  const showWord = [];
  for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
      showWord.push(letter.toUpperCase());
    } else {
      showWord.push("●");
    }
  }

  //console.log(showWord);
  wordInProgess.innerText = showWord.join("");
  correctGuess();
};

const updatedRemainingGuesses = function () {
  const upperWord = word.toUpperCase();
  if (upperWord.includes(guess)) {
    message.innerText = `Sorry, the word doesn't have a ${guess}. `;
    remainingGuesses -= 1;
  } else {
    message.innerText = `Yes, the word has a ${guess} in it.`;
  }

  if (remainingGuesses === 0) {
    message.innerText = `Game is over. The word is ${word}. `;
  } else if (remainingGuesses === 1) {
    message.innerText = ``;
  } else {
  }
};

const correctGuess = function () {
  if (word.toUpperCase() === wordInProgess.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
  }
};
