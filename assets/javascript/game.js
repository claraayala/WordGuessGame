
//90's Cartoons options



var Cartoons = ["edd ed eddy", "hey arnold", "cat dog", "the wild thornberries", "dexters laboratory", "rugrats", "doug", "recess", "tom and jerry", "courage the cowardly dog", "power puff girls", "scooby doo"]

var userText = document.getElementById("guessedLetters");
document.onkeydown = function (event) {
    userText.textContent = event.key;
}


document.onkeydown = function (event) {

    if (hasFinished) {
        resetGame();
        hasFinished = false;
    } else {

        if (event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
    
};




const maxTries = 10;

var guessedLetters = [];
var currentWordIndex;
var guessingWord = [];
var remainingGuesses = 0;
var gameStarted = false;
var hasFinished = false;
var wins = 0;


function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;

   


    currentWordIndex = Math.floor(Math.random() * (Cartoons.length));


    guessedLetters = [];
    guessingWord = [];





    updateDisplay();

    for (var i = 0; i < Cartoons[currentWordIndex].length; i++) {
        if (Cartoons[currentWordIndex][i] === " ") {
            guessingWord.push("\xa0\xa0");
        } else { guessingWord.push(" _ ") }
    }
};



function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    if (remainingGuesses <= 0) {
        
        hasFinished = true;
    }
};

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }

        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }

    updateDisplay();
    checkWin();
};


function evaluateGuess(letter) {

    var positions = [];


    for (var i = 0; i < Cartoons[currentWordIndex].length; i++) {
        if (Cartoons[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }


    if (positions.length <= 0) {
        remainingGuesses--;
        
    } else {

        for (var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};




var word = words[Math.floor(Math.random() * words.length)];


function checkWin() {
    if (guessingWord.indexOf(' _ ') === -1) {
        document.getElementById("pressKeyTryAgain").style.cssText = "display: block";
        wins++;
        hasFinished = true;
    }
};




resetGame();
updateDisplay();


   
    
    
    












