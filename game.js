import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from './snake.js'
 
 import {update as updateFood, draw as drawFood } from './food.js'

//setup game loop
let lastRenderTime= 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
   window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) /1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    
    console.log('Render')
    lastRenderTime = currentTime

//update loop
update()

//render loop
draw()

}

window.requestAnimationFrame(main)

function update() {
    updateSnake()  
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = ''  //clear everything in moving view
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}