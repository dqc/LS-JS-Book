/*
let name = 'Jane';
console.log(`Good morning, ${name}!`);
*/

let greetingMessage = 'Good Morning!';

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage('Good Evening');
greetPeople();
