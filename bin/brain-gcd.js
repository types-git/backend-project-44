#!/usr/bin/env node
import readlineSync from 'readline-sync';
import firstMessage from '../src/cli.js';


const name = firstMessage();
console.log('Find the greatest common divisor of given numbers.');

const gcd = (a, b) => {
    let x = Math.abs(a);
    let y = Math.abs(b);

    while (y !== 0) {
        const temp = y;
        y = x % y;
        x = temp;
    }
    return x;
};

let counter = 0;
for (let i = 0; i < 3; i++) {
    let randomNum1 = Math.floor((Math.random() * 11) + 1);
    let randomNum2 = Math.floor((Math.random() * 16) + 1);
    let sumNumbers = gcd(randomNum1, randomNum2);

    console.log(`Question: ${randomNum1} ${randomNum2}`);
    let answer = readlineSync.question('Your answer: ');

    if (answer == sumNumbers) {
        counter += 1;
        console.log('Correct');
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${sumNumbers}.`);
        break;
    }
}

if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
}