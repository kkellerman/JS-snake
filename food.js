let food = {x: 10, y:1}
const EXPANSION_RATE = 1  //growth of snake when consuming food

export function update() {
   if (onSnake(food)) {
    expandSnake

   }
  }
    
   
    
    export function draw(gameBoard) {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = food.y
        snakeElement.style.gridColumnStart = food.x
        snakeElement.classList.add('food')
        gameBoard.appendChild(snakeElement)
      
    }