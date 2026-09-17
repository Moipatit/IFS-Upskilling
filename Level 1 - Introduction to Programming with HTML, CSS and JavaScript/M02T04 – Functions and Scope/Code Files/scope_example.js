// Global scope
let score = 100; // This is a variable declared in the global scope

// Function to display the current score
function displayScore() {
  console.log(score); // This function can access the global variable
}

// Function to increase the score by 100
function increaseScore() {
  score += 100; // As you can see this function can access the global variable 'score' too
}

// Calling functions to demonstrate global variable access
displayScore();
increaseScore();
displayScore();

// Function scope example
function stageTwo() {
  // Variable declared within the function scope
  let levelTwoScore = 100;
  console.log(levelTwoScore); // Output the levelTwoScore variable
}

/* Trying to access levelTwoScore outside its function scope
will result in a ReferenceError because levelTwoScore is not defined 
outside the function. */
stageTwo();

// Block scope example
let health = 100;
if (health > 50) {
  /* Variable declared within the block scope of the if statement.
  This can only be accessed inside the if statement. */
  let message = "Well done, you are getting better at this game";
  console.log(message); // Outputs the message within the if statement block
}

/* WARNING: Trying to access message outside its block scope
will result in a ReferenceError because message is not defined outside the block. */
console.log(message); // ReferenceError: message is not defined
