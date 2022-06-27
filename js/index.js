
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let win = false
let startTime = false
const start = document.getElementById('start2')
const reset = document.getElementById('stop2')
let stopPlayer
let stopComputer
let gameDifficulty = 'easy'
const restartGame = document.getElementById('restartGame')
let timer
const playerTime = document.getElementById('playerTime')
const computerTime = document.getElementById('computerTime')
const easy = document.getElementById('easy')
const medium = document.getElementById('medium')
const hard = document.getElementById('hard')

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
let playerOne2 = new Game(20, 150, 'red', 20,20)
playerOne2.render()
let playerOne3 = new Game(40, 150, 'red', 20,20)
playerOne3.render()
let playerOne4 = new Game(60, 150, 'red', 20,20)
playerOne4.render()
let playerOne5 = new Game(40, 130, 'red', 20,20)
playerOne5.render()
let playerOne6 = new Game(20, 130, 'red', 20,20)
playerOne6.render()
let playerOne7 = new Game(80, 150, 'red', 20,20)
playerOne7.render()
let playerOne8 = new Game(10, 165, 'black', 15,15)
playerOne8.render()
let playerOne9 = new Game(70, 165, 'black', 15,15)
playerOne9.render()

 function car1() {
    playerOne.render() 
    playerOne2.render() 
    playerOne3.render()
    playerOne4.render() 
    playerOne5.render() 
    playerOne6.render() 
    playerOne7.render() 
    playerOne8.render() 
    playerOne9.render()}

 function car2() {
        computer.render()
        computer2.render()
        computer3.render()
        computer4.render()
        computer5.render()
        computer6.render()
        computer7.render()
        computer8.render()
        computer9.render()
    }

let computer = new Game(0, 50, 'orange', 20,20)
computer.render()
let computer2 = new Game(20, 50, 'orange', 20,20)
computer2.render()
let computer3 = new Game(40, 50, 'orange', 20,20)
computer3.render()
let computer4 = new Game(60, 50, 'orange', 20,20)
computer4.render()
let computer5 = new Game(80, 50, 'orange', 20,20)
computer5.render()
let computer6 = new Game(20, 30, 'orange', 20,20)
computer6.render()
let computer7 = new Game(40, 30, 'orange', 20,20)
computer7.render()
let computer8 = new Game(10, 65, 'black', 15,15)
computer8.render()
let computer9 = new Game(70, 65, 'black', 15,15)
computer9.render()


let finishLine1 = new Game(1030, 0, 'white', 20,34.8)
finishLine1.render()
let finishLine2 = new Game(1030, 34.8, 'black', 20,34.8)
finishLine2.render()
let finishLine3 = new Game(1030, 69.6, 'white', 20,34.8)
finishLine3.render()
let finishLine4 = new Game(1030, 104.4, 'black', 20,34.8)
finishLine4.render()
let finishLine5 = new Game(1030, 139.2, 'white', 20,34.8)
finishLine5.render()
let finishLine6 = new Game(1030, 174, 'black', 20,34.8)
finishLine6.render()
let finishLine7 = new Game(1030, 208.8, 'white', 20,34.8)
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
            startTiming()
            startTime = true
            clearInterval(interval)
        } 
    }, 1000)
    interval



        function gameStart() {
            if (gameDifficulty === 'easy') {
            document.addEventListener('keyup', playerMovement)
            stopPlayer = setInterval(gameLoop, 300)
            } else if (gameDifficulty === 'medium') {
                document.addEventListener('keyup', playerMovement)
            stopPlayer = setInterval(gameLoop, 200)
            } else if (gameDifficulty === 'hard') {
                document.addEventListener('keyup', playerMovement)
            stopPlayer = setInterval(gameLoop, 150)
            }
        } 
    }

start.addEventListener('click', countdown)

function easyDifficulty() {
    gameDifficulty = 'easy'
    hard.style.backgroundColor = 'red'
    medium.style.backgroundColor = 'orange'
    easy.style.backgroundColor = 'green'
}

function mediumDifficulty() {
    gameDifficulty = 'medium'
    hard.style.backgroundColor = 'red'
    medium.style.backgroundColor = 'green'
    easy.style.backgroundColor = 'yellow'
}

function hardDifficulty() {
    gameDifficulty = 'hard'
    hard.style.backgroundColor = 'green'
    medium.style.backgroundColor = 'orange'
    easy.style.backgroundColor = 'yellow'
}

    easy.addEventListener('click', easyDifficulty)
    medium.addEventListener('click', mediumDifficulty)
    hard.addEventListener('click', hardDifficulty)



let sec=0
let mil=0
let seconds=document.getElementById('seconds')
    let mill=document.getElementById('milliseconds')
function startTiming() {
    timer = setInterval(gameTimer = () => {
        if(mil!=99){
            mil++ 
            if(mil<10) {mill.innerHTML='0' + mil}
            else {mill.innerHTML=mil}
        }else{
            sec++
            if(sec<10) seconds.innerHTML='0'+sec
            else seconds.innerHTML=sec
                mil=0
        }
    },10)
    timer
}


const playerMovement = (p) => {
    switch (p.keyCode) {
        case (39):
            playerOne.x += 20
            playerOne2.x += 20
            playerOne3.x += 20
            playerOne4.x += 20
            playerOne5.x += 20
            playerOne6.x += 20
            playerOne7.x += 20
            playerOne8.x += 20
            playerOne9.x += 20
            break
        case (37):
            playerOne.x -= 5
            playerOne2.x -= 5
            playerOne3.x -= 5
            playerOne4.x -= 5
            playerOne5.x -= 5
            playerOne6.x -= 5
            playerOne7.x -= 5
            playerOne8.x -= 5
            playerOne9.x -= 5
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
        && playerOne9.x + playerOne9.width > line.x
        && playerOne9.y < line.y + line.height
        && playerOne9.y + playerOne9.height > line.y) {
        win = true
            on()
            playerWon()
            clearInterval(timer)
            playerTime.innerHTML= 'Player Time: ' + sec + ':' + mil + ' Seconds'
            computerTime.innerHTML= 'Computer Time: DNF'
    }
}

const detectComputerCross = (line) => {
    if(computer.x < line.x + line.width
        && computer9.x + computer9.width > line.x
        && computer9.y < line.y + line.height
        && computer9.y + computer9.height > line.y) {
        win = true
        on()
        computerWon()
        clearInterval(timer)
        computerTime.innerHTML= 'Computer Time: ' + sec + ':' + mil + ' Seconds'
        playerTime.innerHTML= 'Player Time: DNF'
    }
}

restartGame.addEventListener('click', resetGame)


const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const computerMovement = () => {
        computer.x += 20 
        computer2.x += 20 
        computer3.x += 20 
        computer4.x += 20 
        computer5.x += 20 
        computer6.x += 20 
        computer7.x += 20 
        computer8.x += 20 
        computer9.x += 20 
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
    car1()
    car2()
    finishLine1.render()
    finishLine2.render()
    finishLine3.render()
    finishLine4.render()
    finishLine5.render()
    finishLine6.render()
    finishLine7.render()
}

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
 playerOne2 = new Game(20, 150, 'red', 20,20)
 playerOne3 = new Game(40, 150, 'red', 20,20)
 playerOne4 = new Game(60, 150, 'red', 20,20)
 playerOne5 = new Game(40, 130, 'red', 20,20)
 playerOne6 = new Game(20, 130, 'red', 20,20)
 playerOne7 = new Game(80, 150, 'red', 20,20)
 playerOne8 = new Game(10, 165, 'black', 15,15)
 playerOne9 = new Game(70, 165, 'black', 15,15)
car1()
computer = new Game(0, 50, 'orange', 20,20)
 computer2 = new Game(20, 50, 'orange', 20,20)
computer3 = new Game(40, 50, 'orange', 20,20)
 computer4 = new Game(60, 50, 'orange', 20,20)
 computer5 = new Game(80, 50, 'orange', 20,20) 
 computer6 = new Game(20, 30, 'orange', 20,20)
 computer7 = new Game(40, 30, 'orange', 20,20)
 computer8 = new Game(10, 65, 'black', 15,15)
 computer9 = new Game(70, 65, 'black', 15,15)
car2()
   finishLine1.render()
   finishLine2.render()
   finishLine3.render()
   finishLine4.render()
   finishLine5.render()
   finishLine6.render()
   finishLine7.render()
   off()
   mill.innerHTML= '00'
   seconds.innerHTML= '00'
   sec = 0
   mil = 0
   clearInterval(timer)
}

reset.addEventListener('click', resetGame)

// // checkBox.addEventListener('change', e => {
// //     if(e.target.checked) {
// //         canvas.style.width = "1000px";
        
// //     } else {
// //         canvas.style.width = "670px";
// //         console.log('not working')
// //     }
// // })

