const Letter = require('./letter.js');

// Constructor to create an object representing the current word
const Word = function(newWord) {
    this.newWord = newWord;

    //Array to hold letters of word
    let wordArr = [];

    //Count for guessed letters
    this.complete = 0;

    //Pushes new Letter object for each character into wordArr
    for (i=0;i<newWord.length;i++) {
        let temp = new Letter(newWord[i]);
        wordArr.push(temp);
    }
    // console.log("wordArr.length: " + wordArr.length);

    //Returns a string representing the word
    this.toString = function () {
        let dispArr = [];
        for (i=0;i<wordArr.length;i++) {
            let temp = wordArr[i].retChar();
            dispArr.push(temp);
        }
        console.log(dispArr.join(' ')+'\n');
    };

    //Calls the guess function on each letter object
    this.check = function (arg) {
        let exists = false;
        for (var i in wordArr) {
            if (wordArr[i].guessCheck(arg) !== false) {
                wordArr[i].guessCheck(arg);
                this.complete++;
                exists = true;
            }
        }
        if (exists == false) {
            return false;
        }
    };
};

// Export word constructor
module.exports = Word;

// var test = new Word('test');
// test.toString();
// test.check('t');
// test.toString();

