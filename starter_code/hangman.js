var hangman

function Hangman() {
this.words = ["cat", "dog", "bird", "ironhack", "coding", "mouse"];
this.secretWord = "";
this.letters = [];
this.guessedLetter = "";
this.errorsLeft = 10;
// this.board = board;
}

Hangman.prototype.getWord = function (words) {
  if (this.words.length < 1){
    return
  } else {
  randomNum = Math.floor(Math.random()*this.words.length);
  randomWord = this.words[randomNum];
  return this.secretWord = randomWord;
  }
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode > 64 && keyCode < 91){
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  // if(this.checkIfLetter()){
    if (this.letters.indexOf(key) === -1){
      this.letters.push(key);
      console.log(this.letters);
      return true;
    } else {

      return false;
    };
  // } else {
  //   return
  // }
};

Hangman.prototype.addCorrectLetter = function (i) {;
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft -= 1;
};

Hangman.prototype.checkGameOver = function () {
  if( this.errorsLeft === 0) {
    alert("I'm sorry! You're out of guesses : (");
    return true;
  } else {
    return false
  };
};

Hangman.prototype.checkWinner = function () {
  if(this.guessedLetter.length === this.secretWord.length){
    alert('You won! Great job :)')
    return true;
  } else {
    return false;
  }
}



document.getElementById('start-game-button').onclick = function () {
  var hangman = new Hangman();
  hangman.getWord(this.words);
  var game = new HangmanCanvas(hangman.secretWord);
  console.log(hangman.secretWord);

  document.onkeydown = function (e) {
    // console.log(e.key);
    if (hangman.checkIfLetter(e.keyCode)){
      var letter = e.key
      console.log(letter);
      if (hangman.checkClickedLetters(letter)){
        console.log(hangman.secretWord);
        if (hangman.secretWord.indexOf(letter) >=  0){
          var position = hangman.secretWord.indexOf(letter)
          console.log(position);
          hangman.addCorrectLetter(position);
          game.writeCorrectLetter(position);
          hangman.checkWinner();
        } else {
          hangman.addWrongLetter(letter);
          game.writeWrongLetter(letter, hangman.errorsLeft);
          game.drawHangman(hangman.errorsLeft);
          hangman.checkGameOver()
        }
      }
    }
  };

};


