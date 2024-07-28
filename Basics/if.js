// W.A.P to check a number < 10 then print that number with a message

num = 40
if (num<50) {
    console.log(`The given number ${num} is less than 50`);   
}
if (num<20) {
    console.log(`The given number ${num} is less than 20`);
   
}

// W.A.P to find a person is eligible for voting
age = 100
if (age>=18) {
    console.log(`Eligible for voting`);
} else {
    console.log(`Not Eligible for voting`);
}

// w.a.p to check a  number is positive or not
num = 0
if (num > 0) {
    console.log(`POSITIVE`);
} else if(num=0) {
    console.log(`NEGATIVE`);
} else{
    console.log(`ZERO`);
}

// w.a.p to print largest number among 2 number
num1 = 100
num2 = 100

if(num1>num2){
    console.log("Largest is num1");
}else if (num2>num1){
    console.log("Largest is num2");
}else{
    console.log(`Both are equal!!!`);
}

// w.a.p to print 'fizz' when a number is divisible by 3, 'buzz' if number is divisible by 5 and 'fizzbuzz' if number is divisible by 15

num = 30
if(num%15==0){
    console.log("Fizzbuzz");
} else if(num%5==0){
    console.log("Buzz");
}else if(num%3==0){
    console.log("Fizz");
}else{
    console.log("Nothing to Print");
}

// w.a.p to input 3 different number, print second largest number, and display these in any sorted order.