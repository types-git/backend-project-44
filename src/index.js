import readlineSync from 'readline-sync'
import firstMessage from './cli.js'

const mainGame = (description, gameInfo) => {
  const name = firstMessage()
  console.log(description)

  for (let i = 1; i <= 3; i++) {
    const { question, correctAnswer } = gameInfo()

    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')

    if (answer === correctAnswer) {
      console.log('Correct')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export default mainGame
