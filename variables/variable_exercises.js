// 3
/*
Because the let foo variable was written within a block, it is not accessible
outside of the block.
*/
{
  let foo = 'bar';
}

console.log(foo);

// 4
/*
Because the NAME variable was declared with a const, with a value of
Victor, the value cannot be changed. If the variable was instead declared
as let NAME = 'Victor' the NAME variable could be later updated.
*/
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

//5
/*
The console reads 'bar'.
Since the let foo = 'qux' variable was declared within a block scope,
only the let foo = 'bar' variable is accessible outside of the scope.
*/
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// 6
/*
The program logs 'bar'. It is similar to the previous problem with the
exception that on line 1 the FOO variable with a value of 'bar' is declared
with 'const'. When a variable is declared wtih 'const' the value cannot
later be updated.
*/
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
