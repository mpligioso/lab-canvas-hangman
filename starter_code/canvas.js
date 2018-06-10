
function HangmanCanvas(secretWord) {
  // this.hangman = new Hangman(this);
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;

  this.createBoard();

  this.drawLines();

}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1200, 800);
  this.ctx.lineWidth = 6;
};


HangmanCanvas.prototype.drawLines = function () {
  for (i = 0; i < this.secretWord.length; i++){
    this.ctx.beginPath();
    this.ctx.moveTo((xPos-240) + (i*100), yPos+150);
    this.ctx.lineTo((xPos-190) +(i*100), yPos+150);
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.font = "50px Arial";
  this.ctx.beginPath();
  this.ctx.fillText(this.secretWord[index].toUpperCase(), (xPos-235)+(index*100), yPos+140)
};

var distance = 500;

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font = "50px Arial";
  distance += 50;
  this.ctx.beginPath();
  this.ctx.fillText(letter.toUpperCase(), distance, 200);
};

var xPos = 500;
var yPos = 400;

HangmanCanvas.prototype.drawHangman = function (shape) {
switch(shape) {
  //base shape
  case 9:
    this.ctx.beginPath();
    this.ctx.moveTo(xPos-400, yPos+100)
    this.ctx.lineTo(xPos-500, yPos+150);
    this.ctx.lineTo(xPos-300, yPos+150);
    this.ctx.closePath();
    this.ctx.stroke();
    break;

  //stand shape
  case 8:
    this.ctx.beginPath();
    this.ctx.moveTo(xPos-400, yPos+100);
    this.ctx.lineTo(xPos-400, yPos-350);
    this.ctx.stroke();
    this.ctx.closePath();
    break;

  //overhead shape
  case 7:
    this.ctx.beginPath();
    this.ctx.moveTo(xPos-400, yPos-350);
    this.ctx.lineTo(xPos-200, yPos-350);
    this.ctx.stroke();
    this.ctx.closePath();
    break;

  //down shape
  case 6:
    this.ctx.beginPath();
    this.ctx.moveTo(xPos-200, yPos-350);
    this.ctx.lineTo(xPos-200, yPos-300);
    this.ctx.stroke();
    this.ctx.closePath();
    break;

  //head shape
  case 5:
    this.ctx.beginPath();
    this.ctx.arc(xPos-200, yPos-270, 30, 0, 2*Math.PI);
    this.ctx.stroke();
    this.ctx.closePath();
    break;

  //body shape
  case 4:
    this.ctx.beginPath();
    this.ctx.moveTo(xPos-200, yPos-240);
    this.ctx.lineTo(xPos-200, yPos-90);
    this.ctx.stroke();
    this.ctx.closePath();
    break;

  //right arm
  case 3:
    this.ctx.beginPath();
    this.ctx.moveTo(xPos-200, yPos-220);
    this.ctx.lineTo(xPos-250, yPos-170);
    this.ctx.stroke();
    this.ctx.closePath();
    break;

  //left arm
  case 2:
    this.ctx.beginPath();
    this.ctx.moveTo(xPos-200, yPos-220);
    this.ctx.lineTo(xPos-150, yPos-170);
    this.ctx.stroke();
    this.ctx.closePath();
    break;

  //right leg
  case 1:
    this.ctx.beginPath();
    this.ctx.moveTo(xPos-200, yPos-90);
    this.ctx.lineTo(xPos-250, yPos-40);
    this.ctx.stroke();
    this.ctx.closePath();
    break;

  //left leg
  case 0:
    this.ctx.beginPath();
    this.ctx.moveTo(xPos-200, yPos-90);
    this.ctx.lineTo(xPos-150, yPos-40);
    this.ctx.stroke();
    this.ctx.closePath();
    break;
}

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};

// var startGameBtn = document.querySelector("#start-game-button");

// startGameBtn.click(function () {

// })