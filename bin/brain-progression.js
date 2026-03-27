#!/usr/bin/env node
import readlineSync from 'readline-sync';
import firstMessage from '../src/cli.js';

const name = firstMessage();
console.log('What number is missing in the progression?');

let counter = 0;

for (let i = 0; i < 3; i++) {
    const length = Math.floor(Math.random() * 3) + 7;
    const index = Math.floor(Math.random() * length);
    const start = Math.floor(Math.random() * 6) + 1;
    const step = Math.floor(Math.random() * 6) + 1;


    let result = [];
    let current = start;
    for (let j = 0; j < length; j++) {
        if (j === index) {
            result.push('..');
        } else {
            result.push(current);
        }
        current += step;
    }

    const correctAnswer = start + index * step;

    console.log(`Question: ${result.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === correctAnswer) {
        counter += 1;
        console.log('Correct');
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        break;
    }
}

if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
}