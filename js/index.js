// make a computer that moves on its own on an interval toward the line
// render in the two blocks and finish line
// when either block touches the finishline game ends and the winner is stated
// reset button to restart the game
// start button to start a countdown 

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


canvas.setAttribute('width', getComputedStyle(canvas)['width'])
canvas.setAttribute('height', getComputedStyle(canvas)['height'])


class Game {
    constructor(x, y, color, width, height) {
        this.x = x,
        this.y = y,
        this.color = color,
        this.width = width,
        this.height = height,
        this.alive = true,
        
        this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

let playerOne = new Game(0, 150, 'red', 20,20)
playerOne.render()
let computer = new Game(0, 50, 'orange', 20,20)
computer.render()

let finishLine1 = new Game(687, 0, 'white', 20,34.8)
finishLine1.render()
let finishLine2 = new Game(687, 34.8, 'black', 20,20)
finishLine2.render()
let finishLine3 = new Game(687, 69.6, 'white', 20,34.8)
finishLine3.render()
let finishLine4 = new Game(687, 104.4, 'black', 20,20)
finishLine4.render()
let finishLine5 = new Game(687, 139.2, 'white', 20,34.8)
finishLine5.render()
let finishLine6 = new Game(687, 174, 'black', 20,34.8)
finishLine6.render()
let finishLine7 = new Game(687, 208.8, 'white', 20,34.8)
finishLine7.render()

// let centerLines1 = new Game()


document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', playerMovement)
    
})

const playerMovement = (p) => {
    switch (p.keyCode) {
        case (39):
            playerOne.x += 10
            break
    }
    console.log('move 10')
}