


import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 5

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}

//outputs the food to the board
export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

//function that randomly decides where the next piece of "food" should be positioned
function getRandomFoodPosition() {
  let newFoodPosition
  //while no new food exist or food on snake head (has been "ate"
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}