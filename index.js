import { Snake } from './snake';
import { generateFood, eat } from './food'
const canvas = document.getElementsByTagName("canvas")[0].getContext("2d");
const canvasHeight = 200;
const canvasWidth = 200;

const snake = new Snake(canvasWidth,canvasHeight); // you can acces hoisting conspect


let food = generateFood(canvasWidth,canvasHeight, snake)

document.addEventListener('keydown', (event) => {
  if ( event.keyCode === 37 && snake.dx != 1) {
// console.log('left',event.keyCode)
snake.dx  = -1
snake.dy  = 0
  } else if ( event.keyCode === 38 && snake.dy != 1 ) {
    snake.dy  = -1
    snake.dx  = 0
// console.log('top',event.keyCode)
  } else if ( event.keyCode === 39 && snake.dx != -1) {
    snake.dx = 1
    snake.dy  = 0
// console.log('right',event.keyCode)
  } else if ( event.keyCode === 40 && snake.dx != -1) {
// console.log('bottom', event.keyCode)
snake.dy  = 1
snake.dx  = 0
  }
  
})



function show () {
  canvas.clearRect(0, 0,canvasHeight, canvasWidth);
  canvas.fillStyle = "red";
  canvas.fillRect(food.x, food.y, snake.height, snake.width);
  snake.show(canvas);
  
}

function update() {
  
  snake.update(canvas);
  if (snake.dead()){
    console.log('Game Over')
  }
  if(eat(snake,food)){
    food = generateFood(canvasWidth,canvasHeight, snake);
    snake.grow(canvas);
  }
  
}

// function snake hoisting conspect

setInterval(() => {
  update();
  show();
}, 10);

