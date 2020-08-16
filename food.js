import {onSnake, expandSnake} from './snake.js'


let food = {x: 10, y:1}
const EXPANSION_RATE = 5  //growth of snake when consuming food

export function update() {
   if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = { x: 20, y:10}

   }
  }
    
   
    
  export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
  }
  
    
    function getRandomFoodPosition() {     //return new position every time eaten
   let newFoodPosition
   while (newFoodPosition == null || onSnake(newFoodPosition) ) {
     newFoodPosition = randomGridPosition()
   }
    }