// Example 1: While loop
console.log("Example 1 of a while loop:");

// Initialise the counter variable to start from 0
let counter = 0;

// Start the while loop, which will run as long as counter is less than 5
while (counter < 5) {
  // Output the current value of the counter
  console.log("\nThe number is " + counter);

  // Increment the counter by 1
  counter++;

  // Check if the counter is still less than 5
  if (counter < 5) {
    // Output the updated value of the counter
    console.log("The value for counter is now: " + counter);

    // Output that the loop will continue running as the condition is still true
    console.log(
      "The condition (counter < 5) is, therefore, still TRUE so this loop will run again!"
    );
  } else {
    // Output the final value of the counter
    console.log("The value for counter is now: " + counter);

    // Output that the loop will terminate as the condition is now false
    console.log(
      "The condition (counter < 5) is, therefore, FALSE now, so this loop will terminate!!"
    );

    // Indicate the end of the loop
    console.log("GOODBYE");
  }
}

// Print an empty line for better readability of the output
console.log();

// Example 2: Do-while loop
console.log("Example 2 of a do-while loop:");

// Initialise the iterationCount variable to start from 0
let iterationCount = 0;

// Start the do-while loop
do {
  // Output the current value of iterationCount
  console.log("The number is " + iterationCount);

  // Increment the iterationCount by 1
  iterationCount++;

  // Continue looping as long as iterationCount is less than 10
} while (iterationCount < 10);

// Print an empty line for better readability of the output
console.log();

// Example 3: For loop
console.log("Example 3 of a for loop:");

// Start a for loop with three parts: initialisation, condition, and increment
for (let iterationVariable = 0; iterationVariable < 5; iterationVariable++) {
  // Output the current value of iterationVariable
  console.log("The number is " + iterationVariable);
}

// Print an empty line for better readability of the output
console.log();

// Example 4: Nested loops
console.log("Example 4 of nested loops:");

// Define the number of rows and columns for the pattern
let numRows = 5;
let numColumns = 10;

// Initialise an empty string to build each row of the pattern
let rowOutput = "";

// Outer loop to iterate over each row
for (let row = 1; row <= numRows; row++) {
  // Inner loop to iterate over each column in the current row
  for (let column = 1; column <= numColumns; column++) {
    // Append an asterisk to the row string for each column
    rowOutput += "*";
  }

  // Output the complete row to the console
  console.log(rowOutput);

  // Reset the row string for the next iteration
  rowOutput = "";
}

// Print an empty line for better readability of the output
console.log();

// Example 5: Nested loops with conditional statements
console.log("Example 5 of nested loops with conditional statements:");

// Outer loop to iterate over each row
for (let row = 1; row <= numRows; row++) {
  // Inner loop to iterate over each column in the current row
  for (let column = 1; column <= numColumns; column++) {
    // Conditional statement to decide whether to add an asterisk or a space
    if (row === 1 || row === numRows || column === 1 || column === numColumns) {
      // Add an asterisk for the border of the pattern
      rowOutput += "*";
    } else {
      // Add a space for the interior of the pattern
      rowOutput += " ";
    }
  }

  // Output the completed row to the console
  console.log(rowOutput);

  // Reset the row string for the next iteration
  rowOutput = "";
}

// Print an empty line for better readability of the output
console.log();

// Example 6: Break statement
console.log("Example 6 of a break statement:");

// Loop from 1 to 9
for (let i = 1; i < 10; i++) {
  // Check if the counter reaches 5
  if (i === 5) {
    // Exit the loop when the counter is 5
    break;
  }
  // Output the current value of the counter before the loop exits
  console.log("Counter: " + i);
}

/*
Just for fun, do you think you could write a small program
to output a pyramid of *s like the example below?

   *   
  ***
 *****
******* 

*/