// Module Pattern
var drawModule = (function () {
  var bodySnake = function(x, y) {
    // This is the single square
    ctx.fillStyle = 'green';
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    // this is the border of the square
    ctx.strokeStyle = 'darkgreen';
    ctx.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
  }

  var pizza = function(x, y) {
    // Border of the pizza
    ctx.fillStyle = 'yellow';
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    // This is ithe single square
    ctx.fillStyle = 'red';
    ctx.fillRect(x * snakeSize + 1, y * snakeSize + 1, snakeSize - 2, snakeSize - 2);
  }

  var scoreText = function() {
    // How many pizzas did the snake eat
    var score_text = "Score: " + score;
    ctx.fillStyle = 'blue';
    ctx.fillRect(score_text, 145, h - 5);
  }
})
