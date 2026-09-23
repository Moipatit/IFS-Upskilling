//Variable declaration
let litres = Number(prompt("Please enter number of litres used"));

if (litres <= 6000){//if the number of litres is less than 6000
    let litresUsed = litres/1000;//dividing to get the number of litres as a single digit
    let sum = 15.73*litresUsed; //multiplying the number of litres by the cost per litre
    console.log("Your water bill is R" + sum.toFixed(2));
}
else if (litres > 6000 && litres <= 10500){// if the number of litres is greater than 6000 but less than 10500
    let litresUsed = litres/1000;
    let total = (litresUsed-6); //subtracting the number litres to get the remainder
    let sum = (6*15.73 + total*22.38);
    console.log("Your water bill is R" + sum.toFixed(2));
}
else if (litres > 10500 && litres <= 35000){// if the number of litres is greater than 10500 but less than 35000
    let litresUsed = litres/1000;
    let total = (litresUsed-10.5); //subtracking the number of litres to get the remainder
    let sum = (total*31.77 + 6*15.73 + 4.5*22.38)
    console.log("Your water bill is R" + sum.toFixed(2));
}
else if (litres > 35000){ //if the number of litres is more than 35000
    let litresUsed = litres/1000
    total = litresUsed - 35
    let sum = (total*69.76 + 6*15.73 + 4.5*22.38 + 24.5*31.77)
    console.log("Your water bill is R" + sum.toFixed(2));
}
else{ //if the user did not input a number print the following
    console.log("You have entered invalid data");
}