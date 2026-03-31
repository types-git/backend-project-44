function isPrime(num) {
  if (num <= 1) {
    return false
  }
  if (num === 2) {
    return true
  }
  if (num % 2 === 0) {
    return false
  }

  const sqrtNum = Math.sqrt(num)
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

function gameInfo() {
  const num = Math.floor(Math.random() * 30) + 1
  const correctAnswer = isPrime(num) ? 'yes' : 'no'

  return {
    question: num,
    correctAnswer: correctAnswer,
  }
}

export { description, gameInfo }
