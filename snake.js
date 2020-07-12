export const SNAKE_SPEED = 1  //moves 1x per second
const snakeBody = [
    {x: 10, y: 11} ,
    {x: 11, y: 11} ,
    {x: 12, y: 11}
]

//export for use in game.js
export function update() {
  for(let i = snakeBody.length-2; i >=0; i--){
    snakeBody[i+1] = { ...snakeBody[i] }
  }
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}