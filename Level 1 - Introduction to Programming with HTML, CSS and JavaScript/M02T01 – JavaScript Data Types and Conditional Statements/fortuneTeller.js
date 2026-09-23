let mothersName = prompt("Please enter your mother's first name"); //asking user to input mother's name
let streetName = prompt("Please enter the name of street you grew up on");//asking user to input street name
let favColour = prompt("Please enter your favourite colour as a child");//asking user to input favourite colour
let age = Number(prompt("Please enter your current age"));//asking user to input their current age
let num = Number(prompt("Please enter a number between 1 and 10"));//asking user to input a number


console.log("In " + num + " years you are going meet your best friend named " + `${mothersName} ${streetName}.\n`
+ "You will get married in " + Math.round(age/num) +" years and have " + age%num + " children.\n"
+ "In " + (age - num) + " years you are going to dye your hair " + favColour + ".");// a message using information user gave us
