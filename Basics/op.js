x = 10
y = 3

console.log(`${x} + ${y} = ${x + y}`);
console.log(`${x} - ${y} = ${x - y}`);
console.log(`${x} * ${y} = ${x * y}`);
console.log(`${x} - ${y} / ${x / y}`);


// Modulus % operator
const result = x%y // Return remainder  of x/y
console.log(`${x} % ${y} = ${result}`);

// Power / Exponential ** , 10^3 = 10 x 10 x 10 = 1000
console.log(`${x} ** ${y} = ${x**y}`);


// Relational Operators
console.log(`Check x < y : ${x < y}`);
console.log(`Check x >= y : ${x >= y}`);

p  = 10
q = "10"

console.log(`Check p == q : ${p == q}`); // check the value only
console.log(`Check p === q : ${p === q}`); // Check the value with Data type

// Logical Operators - for combining
// console.log(`check 5<x<7 : ${5<x<7}`); // Cannot done multiple relational operators
console.log(`Check 5<x<7 : ${5<x && x<7}`); // Use AND operator for multiple relation operation

//  ! operator
empId = false
console.log(`!empId : ${!empId}`);
empId = true
console.log(`!empId : ${!empId}`);

// Increment and Decrement operators

r=20
console.log(`Before applying Increment : r= ${r}`);
// console.log(`After applying Increment : r= ${r++}`); //post increment operator
// console.log(r);
console.log(`After applying Increment : r= ${++r}`); //pre increment operator
console.log(`r= ${r}`);

r=20
console.log(`Before applying Decrement : r= ${r}`);
// console.log(`After applying Decrement : r= ${r--}`); //post Decrement operator
// console.log(`r= ${r}`);
console.log(`After applying Decrement : r= ${--r}`); //pre Decrement operator
console.log(`r= ${r}`);
