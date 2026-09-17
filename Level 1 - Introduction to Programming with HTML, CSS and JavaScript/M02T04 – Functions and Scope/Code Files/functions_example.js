// Please read all the comments in this example file and all others.

console.log("============ Example 1: Name and Age Program ============");
/* The JavaScript below should look familiar.
We declare variables called name and age and assign values.
We then use the console.log() method to display a message using the variables. */

let name1 = "Nkosi";
let age1 = 25;
console.log("Hello World! I'm " + name1 + " I am " + age1 + " years old.");

console.log("============ Example 2: Name and Age Program ============");
/* Again, we declare variables called name and age.
This time, we have 2 additional variables: yearOfBirth and thisYear.
We use Date().getFullYear() to get the current year from your computer's settings. 
Learn more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
We then calculate a person’s age by subtracting their birth year from the current year. */

const name2 = "Bethany";
const yearOfBirth2 = 1994;
const thisYear2 = new Date().getFullYear();
const age2 = thisYear2 - yearOfBirth2;
console.log("Hello World! I'm " + name2 + " I am " + age2 + " years old.");

console.log("============ Example 3: Name and Age Program ============");
/* Consider the code below. We want the same functionality as before.
However, we want to display the info for several people.
We could write the solution as below. While this works, 
a good programmer would think, "This is inefficient! 
We’re just repeating the same code over and over again!" */

let name3 = "Bethany";
let yearOfBirth3 = 1994;
const thisYear3 = new Date().getFullYear();
let age3 = thisYear3 - yearOfBirth3;
console.log("Hello World! I'm " + name3 + " I am " + age3 + " years old.");

name3 = "Timothy";
yearOfBirth3 = 2000;
age3 = thisYear3 - yearOfBirth3;
console.log("Hello World! I'm " + name3 + " I am " + age3 + " years old.");

name3 = "Jack";
yearOfBirth3 = 1986;
age3 = thisYear3 - yearOfBirth3;
console.log("Hello World! I'm " + name3 + " I am " + age3 + " years old.");

name3 = "Eric";
yearOfBirth3 = 1991;
age3 = thisYear3 - yearOfBirth3;
console.log("Hello World! I'm " + name3 + " I am " + age3 + " years old.");

console.log(
  "============ Example 4: Name and Age Program with Functions ============"
);

/* One way to make our code more efficient is to use functions. 
As you have read, a function is a block of code.
In the code above, we do two key tasks: 
1) Calculate the person's age, and 
2) Display the message. We can write reusable functions to achieve this.
We could write a function called 'calculateAge' as shown below.
The function needs to know the birth year, so we create a parameter called birthYear. */

function calculateAge(birthYear) {
  const thisYear = new Date().getFullYear();
  const age = thisYear - birthYear;
  return age;
}

/* We could also create a function called displayMessage that takes the name and age
of a person and uses template literals to display a personalised message as shown below. */
function displayMessage(name, age) {
  console.log(`Hello World! I'm ${name} I am ${age} years old.`);
}

/* We can then call these functions as often as we like, passing different values each time. */
displayMessage("Bethany", calculateAge(1994));
displayMessage("Timothy", calculateAge(2000));
displayMessage("Jack", calculateAge(1986));
displayMessage("Eric", calculateAge(1991));

/* Compare this code to the previous version. 
Both achieve the same result, but using functions is more efficient
because we only write the logic once. */

console.log("============ Example 5: Arrow Functions ============");
/* Remember, you can read an arrow function as something like 
“let functionName take parameters and return the result of the expression”. */

// This arrow function takes two parameters and returns the result of multiplying them
let multiplyNumbers = (a, b) => a * b;

console.log("Multiplication arrow function result: ", multiplyNumbers(3, 5));

console.log("============ Example 6: Nested Functions ============");
// The outer function "multiplier" that takes one parameter "x".
function multiplier(x) {
  // The nested function "inside" which takes one parameter "y".
  function inside(y) {
    // Return the product of "x" and "y".
    return x * y;
  }
  // Return the "inside" function. It has access to "x" from "multiplier".
  return inside;
}

// Create a new function where "x" is set to 2
const multiplyByTwo = multiplier(2);

// Call the new function with "y" as 5, outputting 10
console.log(multiplyByTwo(5));
