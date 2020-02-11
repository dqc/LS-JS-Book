// 1.
/*
let rlSync = require('readline-sync');
let name = rlSync.question("What is your name?\n");
console.log(`Hello, ${name}!`);


// 2.
let rlSync = require('readline-sync');
let firstName = rlSync.question("What is your first name?\n");
let lastName = rlSync.question("What is your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);
*/

// Exercise from Functions chapter
/*
function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name?');
let lastName = getName('What is your last name?');
console.log(`Hello, ${firstName} ${lastName}!`);


// Extra practice
function birthCity(prompt) {
  let readlineSync = require('readline-sync');
  let city = readlineSync.question(prompt);
  return city;
}

let myCity = birthCity('What city were you born in?');
let myState = birthCity('Which state is that in?');
console.log(`You were born in ${myCity} ${myState}!`);
*/
