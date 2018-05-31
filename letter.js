// Constructor function 
var Letter = function(character) {
    //String value to store the underlying character for the letter
    this.character = character;
    //Boolean value that stores whether that letter has been guessed yet
    var guessed = false;

    //Returns character if letter guessed or placeholder if letter not guessed
    this.retChar = function () {
        if (guessed == true) {
            return character;
        }
        else {
            return '_';
        }
    };

    //Checks argument against character, updating boolean to true if guessed
    this.guessCheck = function (arg) {
        if (arg == character) {
            guessed = true;
            // console.log('guessed = true');
        }
        else {
            // console.log('guessed != true');
            return false;
        }
    };
};

// Export letter constructor
module.exports = Letter;