// 1
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar); // bar = 1 because it was defined outside of the function
// scope
