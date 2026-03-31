const gcd = (a, b) => {
  let x = Math.abs(a)
  let y = Math.abs(b)

  while (y !== 0) {
    const temp = y
    y = x % y
    x = temp
  }
  return x
}

const description = 'Find the greatest common divisor of given numbers.'

function gameInfo() {
  let randomNum1 = Math.floor(Math.random() * 11) + 1
  let randomNum2 = Math.floor(Math.random() * 16) + 1
  let sumNumbers = gcd(randomNum1, randomNum2)

  const question = `${randomNum1} ${randomNum2}`
  const correctAnswer = String(sumNumbers)

  return {
    question: question,
    correctAnswer: correctAnswer,
  }
}

export { description, gameInfo }
