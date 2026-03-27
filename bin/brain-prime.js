#!/usr/bin/env node
import readlineSync from 'readline-sync';
import firstMessage from '../src/cli.js';


const name = firstMessage();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let x = Math.floor((Math.random() * 7) + 1);
console.log(`Question: ${x}`);

const answer = readlineSync.question('Your answer: ');


function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }

  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) {
      return false; 
    }
  }

  return true;
}

let str = '',
    anotherAnswer = '';


if (answer === 'yes') {
    str = true;
    anotherAnswer = 'no';
} else if (answer === 'no') {
    str = false;
    anotherAnswer = 'yes';
}



if (str === isPrime(x)) {
    console.log('Correct');
} else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${anotherAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
}