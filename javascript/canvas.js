class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
  }

  createBoard() {
    // ... your code goes here
    let newDraw = new HangmanCanvas();

    drawLines();
  }

  drawLines() {
    let longestWord = 0;
    while (longestWord <= secretWord.lenght) {
      // start the path
      ctx.beginPath();
      // starting position is x=50, y=50
      let move = ctx.moveTo(15, 30);
      // draw the line that has final coordinates x=250, y=50
      ctx.lineTo(250, 30);

      // .stroke() executes the drawing
      ctx.stroke();

      this.context.lineTo(200, 30);
      // ... your code goes here
      moveTo(move + 30, 30);
    }
    longestWord++;
  }

  writeCorrectLetter(letter) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
