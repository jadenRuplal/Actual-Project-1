
// when either block touches the finishline game ends and the winner is stated
// reset button to restart the game

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let win = false
const start = document.getElementById('start2')
const reset = document.getElementById('stop2')
let stopPlayer
let stopComputer
const restartGame = document.getElementById('restartGame')

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

let finishLine1 = new Game(650, 0, 'white', 20,34.8)
finishLine1.render()
let finishLine2 = new Game(650, 34.8, 'black', 20,34.8)
finishLine2.render()
let finishLine3 = new Game(650, 69.6, 'white', 20,34.8)
finishLine3.render()
let finishLine4 = new Game(650, 104.4, 'black', 20,34.8)
finishLine4.render()
let finishLine5 = new Game(650, 139.2, 'white', 20,34.8)
finishLine5.render()
let finishLine6 = new Game(650, 174, 'black', 20,34.8)
finishLine6.render()
let finishLine7 = new Game(650, 208.8, 'white', 20,34.8)
finishLine7.render()

// let centerLines1 = new Game()









function countdown() {
    const interval = setInterval(function lightStart () {
        if(document.getElementById('yellow1').style.backgroundColor !== 'yellow') {
            document.getElementById('yellow1').style.backgroundColor= 'yellow'
        } else if (document.getElementById('yellow2').style.backgroundColor !== 'yellow') {
            document.getElementById('yellow2').style.backgroundColor= 'yellow'
        } else if (document.getElementById('yellow3').style.backgroundColor !== 'yellow') {
            document.getElementById('yellow3').style.backgroundColor= 'yellow'
        } else if (document.getElementById('green1').style.backgroundColor !== 'green') {
            document.getElementById('green1').style.backgroundColor= 'green'
            gameStart()

            clearInterval(interval)
        } 
    }, 1000)
    interval

        function gameStart() {
            document.addEventListener('keyup', playerMovement)
            stopPlayer = setInterval(gameLoop, 200)
        } 
    }

start.addEventListener('click', countdown)


function resetGame() {
     win = false
     gameStarted = false
     document.getElementById('yellow1').style.backgroundColor= 'black'
     document.getElementById('yellow2').style.backgroundColor= 'black'
     document.getElementById('yellow3').style.backgroundColor= 'black'
     document.getElementById('green1').style.backgroundColor= 'black'
     clearInterval(stopPlayer)
       clearInterval(stopComputer)
     ctx.clearRect(0, 0, canvas.width, canvas.height)
      playerOne = new Game(0, 150, 'red', 20,20)
playerOne.render()
 computer = new Game(0, 50, 'orange', 20,20)
computer.render()
    finishLine1.render()
    finishLine2.render()
    finishLine3.render()
    finishLine4.render()
    finishLine5.render()
    finishLine6.render()
    finishLine7.render()
    off()
}
 reset.addEventListener('click', resetGame)


const playerMovement = (p) => {
    switch (p.keyCode) {
        case (39):
            playerOne.x += 20
            break
        case (37):
            playerOne.x -= 5
            break
    }
}

function off() {
    document.getElementById('overlay').style.display = "none";
    document.getElementById('winBox').style.display = "none";
}

function on() {
    document.getElementById('overlay').style.display = "block";
    document.getElementById('winBox').style.display = "block";
}

function playerWon() {
    document.getElementById('whoWon').innerHTML = "You Won!";
}

function computerWon() {
    document.getElementById('whoWon').innerHTML = "You Lose!";
}

const detectCross = (line) => {
    if(playerOne.x < line.x + line.width
        && playerOne.x + playerOne.width > line.x
        && playerOne.y < line.y + line.height
        && playerOne.y + playerOne.height > line.y) {
        win = true
            on()
            playerWon()
    }
}

const detectComputerCross = (line) => {
    if(computer.x < line.x + line.width
        && computer.x + computer.width > line.x
        && computer.y < line.y + line.height
        && computer.y + computer.height > line.y) {
        win = true
        on()
        computerWon()
    }
}

restartGame.addEventListener('click', resetGame)


const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const computerMovement = () => {
        computer.x += 15 
        console.log(computer.x)
    }
    if(win === false) {
       computerMovement()
        detectCross(finishLine5)
        detectCross(finishLine6)
        detectCross(finishLine7)
        detectComputerCross(finishLine2)
        detectComputerCross(finishLine3)
        detectComputerCross(finishLine4)
    } else {
        clearInterval(stopComputer)
        clearInterval(stopPlayer)
    }

    playerOne.render()
    computer.render()
    finishLine1.render()
    finishLine2.render()
    finishLine3.render()
    finishLine4.render()
    finishLine5.render()
    finishLine6.render()
    finishLine7.render()
}

