const description = 'What number is missing in the progression?'

const progression = () => {
  const length = Math.floor(Math.random() * 3) + 7
  const index = Math.floor(Math.random() * length)
  const start = Math.floor(Math.random() * 6) + 1
  const step = Math.floor(Math.random() * 6) + 1

  let result = []
  let current = start
  for (let i = 0; i < length; i++) {
    if (i === index) {
      result.push('..')
    }
    else {
      result.push(current)
    }
    current += step
  }
  const correctAnswer = start + index * step

  return {
    question: result.join(' '),
    correctAnswer: String(correctAnswer),
  }
}

export { description, progression }
