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

  var drawSnake = function() {
    // Initially the body of the snake will be formed by 5 squares.
    var length = 4;
    snake = [];

    // Using a for loop, we push the 5 elements inside the array(squares).
    // Every element will have x = 0 and the y will take the value of the index.
    for (var i = length; i >= 0; i--) {
      snake.push({ x: i, y: 0 });
    }
  }

  
})
