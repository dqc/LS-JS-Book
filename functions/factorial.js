function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

// Solution 1
let oneFactorial = times(1, 1);
let twoFactorial = times(2, oneFactorial);
let threeFactorial = times(3, twoFactorial);
let fourFactorial = times(4, threeFactorial);
let fiveFactorial = times(5, fiveFactorial);

// Solution 2
times(times(times(times(times(1, 1), 2), 3), 4), 5);
