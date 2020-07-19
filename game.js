import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from './snake.js'

//setup game loop
let lastRenderTime= 0;
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
}

function draw(){
    gameBoard.innerHTML = ''  //clear everything in moving view
    drawSnake(gameBoard)
}