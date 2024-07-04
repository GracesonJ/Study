//  let variable

// let i=10
// console.log("initially, i="+i); //(Hoisting)

for(let i=1; i<=5; i++){ //i=1,i<=5 t, i-2,i<=5 t, i=3,i<=5 t, i=4,i<=5 t, i=5,i<=5 t, i=6,i<=5 f
    console.log("Inside loop, i ="+ i); // 1 2 3 4 5
}
// console.log("outside loop, i = "+i); //error

// var i=10
// console.log("initially, i="+i);

// for(var i=1; i<=5; i++){ 
//     console.log("Inside loop, i ="+ i); 
// }
// console.log("outside loop, i = "+i);