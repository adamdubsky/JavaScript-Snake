//Basic javascriptsnake game using javascript and html

import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

//game loop that keeps game constant
function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location = '/'
    }
    return
  }


  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

//handles the actually theory behind the game
function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

//handles all outputs to the UI
function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

//checks for end game
function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}