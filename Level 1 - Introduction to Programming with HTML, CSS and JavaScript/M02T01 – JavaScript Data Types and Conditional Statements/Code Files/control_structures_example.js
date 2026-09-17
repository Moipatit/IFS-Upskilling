// *** NOTE ON COMMENTS ***
// This is a comment in JavaScript.
// Comments can be placed anywhere in JavaScript code and the computer ignores them.
// They are intended to be read by humans.
// Any line with a // in front of it is a comment.

// If you want to add a long comment that spans several lines,
// you can use a multi-line comment. A multi-line comment starts
// with `/*` and ends with `*/`.

/* 
Example of a multi-line comment
*/

// ============ If Conditional ============

// ============ Example 1 ============
console.log("Example of simple if statement:");

let time = 5; // Variable to test the condition

// Check if `time` is greater than 0
if (time > 0) {
  greeting = "Hello"; // Set `greeting` if condition is true
  console.log(greeting); // Output the value of `greeting`
}

// ============= If, Else If, Else Conditional ============

// ============ Example 2 ============
console.log("Example of if...else if...else statement:");

// Check if `time` is less than 5
if (time < 5) {
  console.log("Early Riser");
  // Check if `time` is exactly 5
} else if (time === 5) {
  console.log("Still early");
  // Default case if none of the above conditions are met
} else {
  console.log("Good enough");
}
console.log(); // Add a blank line for readability

// ============ Example 3 ============
let grade = 66; // Variable for grade

// Check the grade and provide feedback based on ranges
if (grade >= 80) {
  console.log("Congratulations! You have an A");
} else if (grade >= 70) {
  console.log("Good job! You have a B");
} else if (grade >= 60) {
  console.log("Keep it up! You have a C");
} else if (grade >= 50) {
  console.log("Try a little harder next time! You have a D");
} else {
  console.log("Oh No! You have an F");
}

/* 
Run this code to see the output based on the value of `grade`. 
Try changing `grade` and running it again to observe different outputs.
*/

// ============ Example 4 ============
let helloWorld = "Hello World!"; // String to test length conditions

// Check the length of `helloWorld` and provide feedback
if (helloWorld.length > 6) {
  console.log("This sentence is long!");
} else if (helloWorld.length > 3) {
  console.log("Slightly more manageable!");
} else {
  console.log("Easy stuff");
}

// ****************** END OF EXAMPLE CODE *********************
