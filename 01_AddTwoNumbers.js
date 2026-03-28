//Author: Abhivaadya Sharma

const ps = require("prompt-sync");
const prompt = ps();

let num1 = prompt("Enter number-1: ");
num1=Number.parseInt(num1)
let num2 = prompt("Enter number-2: ");
num2=Number.parseInt(num2)
let sum = num1 + num2;
console.log("Sum: " + sum);