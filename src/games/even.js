const description = 'Answer "yes" if the number is even, otherwise answer "no".'

function gameInfo() {
  const randomNum = Math.floor(Math.random() * 7) + 1
  const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no'

  return {
    question: randomNum,
    correctAnswer,
  }
}

export { description, gameInfo }
