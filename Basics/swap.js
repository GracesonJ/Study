// w.a.p to swap values of 2 variables
// x=20, y=30
// after swaping x=30, y=20

// Algorithm

x=20
y=30
console.log(`Before swaping , x = ${x}, y = ${y}`);
// create a new variable, z
var z;
// Assign value of x to z, z = x
z=x
// Assign value of y to x, y = x
x=y
// Assign value of z to y, y = z
y=z
// print x, y
console.log(`After swaping , x = ${x}, y = ${y}`);
