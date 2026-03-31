#!/usr/bin/env node
import readlineSync from 'readline-sync';
import firstMessage from '../src/cli.js';

const name = firstMessage();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;
let anotherAnswer = '';
for (let i = 0; i < 3; i++) {
    let randomNum = Math.floor((Math.random() * 7) + 1);

    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === 'yes') {
        anotherAnswer = 'no';
    } else if (answer === 'no') {
        anotherAnswer = 'yes';
    }

    if (randomNum % 2 === 0 && answer === 'yes' || randomNum % 2 !== 0 && answer === 'no') {
        counter += 1;
        console.log('Correct');
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${anotherAnswer}'`);
        console.log(`Let's try again, ${name}!`);
        break;
    }
}


if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
} 
