//setup game loop
function main(currentTime) {
    window.requestAnimationFrame(main)
    console.log(currentTime)
}

window.requestAnimationFrame(main)