let food = {x: 0, y:0}

export function update() {
   
      }
    
   
    
    export function draw(gameBoard) {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = food.y
        snakeElement.style.gridColumnStart = food.x
        snakeElement.classList.add('food')
        gameBoard.appendChild(snakeElement)
      
    }