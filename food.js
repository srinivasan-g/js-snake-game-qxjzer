export function generateFood(canvasWidth,canvasHeight, snake) {
  const x =  Math.floor(Math.random()*(canvasWidth / snake.width))* snake.width;
  const y =  Math.floor(Math.random()* (canvasHeight / snake.height))* snake.height;
  // floor round nearset small number , floor round nearset largest number.
  
  return { x:x, y:y};
}

export function eat(snake, food) {
  let result = false;
if ( snake.x == food.x  && snake.y === food.y) {
  result = true;
}
  

  return result;
}