// I struggled quite a bit with this one
// I found a similar program on KrazyTech, this program made use a while loop instead of a for loop
// Here is a link to the website:https://krazytech.com/programs/an-html-code-to-reverse-a-given-number-using-javascript 
//I found help with split() on StackOverFlow
//Here is a link to the website: https://stackoverflow.com/questions/9914216/how-do-i-separate-an-integer-into-separate-digits-in-an-array-in-javascript

//Variable declaration
let num = prompt("Please enter a 3 digit number");
let numSplit = (""+num).split("");      //spliting the input into 3 different strings
let num1 = numSplit[0];     //The first number
let num2 = numSplit[1] + numSplit[2];       //The second and third number placed together
let rev = 0;
let remainder = 0;
let n = Number(num2);       //The second and third number will known as n

for(;n != 0;){      //For loop to reverse the last 2 numbers
    remainder = n % 10;
    rev = rev * 10 + remainder;
    n = Math.floor(n/10);
    
}
let finalNum = num1 + rev;      //The first number is placed in front of the reversed number
console.log("The original number:"+ num);       //The original number printed out
console.log("The reversed number:" + finalNum);     //The new number is printed out
