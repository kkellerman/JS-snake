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
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = food.y
        snakeElement.style.gridColumnStart = food.x
        snakeElement.classList.add('food')
        gameBoard.appendChild(snakeElement)
    }
    
    function getRandomFoodPosition() {     //return new position every time eaten

    }