import {SNAKE_SPEED} from './snake.js'

//setup game loop
let lastRenderTime= 0;


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

}

function draw(){

}