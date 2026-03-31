const operators = ['+', '-', '*']

const description = 'What is the result of the expression?'

function gameInfo() {
  let randomNum1 = Math.floor(Math.random() * 7) + 1
  let randomNum2 = Math.floor(Math.random() * 5) + 1
  const randomIndex = Math.floor(Math.random() * operators.length)
  const randomOperator = operators[randomIndex]

  let sum = 0
  if (randomOperator === '-') {
    sum = randomNum1 - randomNum2
  }
  else if (randomOperator === '+') {
    sum = randomNum1 + randomNum2
  }
  else if (randomOperator === '*') {
    sum = randomNum1 * randomNum2
  }

  const question = `${randomNum1} ${randomOperator} ${randomNum2}`
  const correctAnswer = String(sum)

  return {
    question: question,
    correctAnswer: correctAnswer,
  }
}

export { description, gameInfo }
