const Word = require('./word.js');
const inquirer = require("inquirer");

const wordList = ['touch','torture','ruin','wonder','spill','genuine','shelter','excavate','left','extort','link','shaft','referral','piano','fit','appetite','innocent','change','performance','swallow','snow','chimpanzee','value','fly','arise','hit','percent','sharp','pour','float','enter','calculation','expression','locate','achieve','thesis','concentrate','opposition','repetition','pyramid','rage','soft','improvement','butterfly','resolution','tune','view','future'];

var runGame = function () {
    // Store a word from list in Word constructor
    let ranWord = new Word(wordList[Math.floor(Math.random() * wordList.length)]);
    // console.log(ranWord);
    // Initial display
    console.log('\nNew word:');
    ranWord.toString();

    // Game variables
    let guesses = 10;

    var Guess = function () {
        // If word isn't complete and user has guesses left
        // console.log("complete: " + ranWord.complete);
        // console.log("ranWord.newWord.length: " + ranWord.newWord.length);
        if (ranWord.complete !== ranWord.newWord.length && guesses > 0) {
            inquirer.prompt([
                {
                    name: 'guess',
                    message: 'Guess a letter: '
                }
            ]).then(function(answer){
                if (isLetter(answer.guess) == true) {
                    // Check if letter exists
                    if (ranWord.check(answer.guess) !== false) {
                        console.log("\nCorrect!");
                        // Display current state of word
                        console.log('\n');
                        ranWord.toString();
                        // Guess a new letter
                        Guess();
                    }
                    // If letter does not exist
                    else {
                        guesses--;
                        console.log(`\nIncorrect! Guesses remaining: ${guesses}`);
                        console.log('\n');
                        ranWord.toString();
                        Guess();
                    }
                }
                else {
                    console.log('\nLetters only, please.\n');
                    Guess();
                }
            });
        }
        // Lose message
        else if (guesses == 0) {
            inquirer.prompt([
                {
                    name: 'gameover',
                    type: 'confirm',
                    message: '\nGame over! Play again? (y/n): '
                }
            ]).then(function(answer) {
                if (answer.gameover == true) {
                    runGame();
                }
                else {
                    return console.log('Goodbye!');
                }
            });
        }
        // Win message
        else {
            inquirer.prompt([
                {
                    name: 'win',
                    type: 'confirm',
                    message: '\nYou win! Play again? (y/n): '
                }
            ]).then(function(answer) {
                if (answer.win == true) {
                    runGame();
                }
                else {
                    return console.log('\nGoodbye!');
                }
            });
        }    
    };
    Guess();
};

function isLetter(str) {
    if (str.length === 1 && str.match(/[a-z]/i)){
        return true;
    }
}

runGame();