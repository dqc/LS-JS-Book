// 1.

let rlSync = require('readline-sync');
let name = rlSync.question("What is your name?\n");
console.log(`Hello, ${name}!`);


// 2.
let rlSync = require('readline-sync');
let firstName = rlSync.question("What is your first name?\n");
let lastName = rlSync.question("What is your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);
