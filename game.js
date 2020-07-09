//setup game loop
let lastRenderTime= 0;
const SNAKE_SPEED = 2  //moves 2x per second

function main(currentTime) {
   window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) /1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    
    console.log('Render')
    lastRenderTime = currentTime
}

window.requestAnimationFrame(main)