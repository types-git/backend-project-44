#!/usr/bin/env node
import readlineSync from 'readline-sync';
import firstMessage from '../src/cli.js';

const name = firstMessage();
console.log('What is the result of the expression?');

const operators = ['+', '-', '*'];
let counter = 0;
let sum = 0;
for (let i = 0; i < 3; i++) {
    let randomNum1 = Math.floor((Math.random() * 7) + 1);
    let randomNum2 = Math.floor((Math.random() * 5) + 1);
    const randomIndex = Math.floor(Math.random() * operators.length);
    const randomOperator = operators[randomIndex];

    console.log(`Question: ${randomNum1} ${randomOperator} ${randomNum2}`);
    let answer = readlineSync.question('Your answer: ');

    for (let i = 0; i < 3; i++) {
        if (randomOperator === '-') {
            sum = randomNum1 - randomNum2;
        } else if (randomOperator === '+') {
            sum = randomNum1 + randomNum2;
        } else if (randomOperator === '*') {
            sum = randomNum1 * randomNum2;
        }
    }

    if (answer == randomNum1 - randomNum2) {
        console.log('Correct');
        counter += 1;
    } else if (answer == randomNum1 + randomNum2) {
        console.log('Correct');
        counter += 1;
    } else if (answer == randomNum1 * randomNum2) {
        console.log('Correct');
        counter += 1;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${sum}'`);
        console.log(`Let's try again, ${name}`);
        break; 
    }
}


if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
} 
