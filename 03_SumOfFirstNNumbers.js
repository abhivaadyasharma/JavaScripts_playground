//Author:Abhivaadya Sharma

const ps = require("prompt-sync");
const prompt = ps();

// Input
let n = (prompt("Enter the value of n: "));
n=Number.parseInt(n)
// Sum of first n natural numbers
let sum = 0;

if (isNaN(n) || n < 1) {
    console.log("Number invalid");
}
else {
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log("Sum = " + sum);
}



// Or the simple way is:

// const ps = require("prompt-sync");
// const prompt = ps();

// let n = Number.parseInt(prompt("Enter the value of n: "));

// if (isNaN(n) || n < 1) {
//     console.log("Number invalid");
// } 
// else {
//     let sum = (n * (n + 1)) / 2;
//     console.log("Sum = " + sum);
// }