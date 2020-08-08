import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 6  //moves 1x per second
const snakeBody = [{x: 10, y: 11}]
let newSegments = 0

//export for use in game.js
export function update() {
const inputDirection = getInputDirection()
  for(let i = snakeBody.length-2; i >=0; i--){
    snakeBody[i+1] = { ...snakeBody[i] }
  }


    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
 newSegments += amount
}

export function onSnake(position) {
return snakeBody.some(segments =>{
  return equalPositions(segment, position)
  })
}