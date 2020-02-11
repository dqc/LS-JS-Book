// Exercise 3 (option 1)
/*
function multiply(prompt) {
  let readlineSync = require('readline-sync');
  let numbers = readlineSync.question(prompt);
  return numbers;
}

let firstNumber = multiply('Enter the first number?');
let secondNumber = multiply('Enter the second number?');
let sum = firstNumber * secondNumber;
console.log(sum);
*/

// option 2

function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
