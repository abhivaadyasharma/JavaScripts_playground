//Author:Abhivaadya Sharma

//Modules
const ps = require("prompt-sync");
const prompt = ps();

//Asking to enter the number
Number=prompt("Enter the number: ")

//Check wheather even or odd and giving answer

if(Number%2===0){
    console.log(Number+ " is even")
}
else{
    console.log(Number+ " is odd")
}

//End of program