// Task: Implement a counter that starts and stops using setInterval() and clearInterval().

// Variables
// These variables are already provided for you to use in the task.
let intervalID; // To store the interval ID
let counter = 0; // To keep track of the counter value

// Start Counter Function
// This function starts the counter and logs the counter value to the console.
// Part of the function is already provided. Add the missing logic to:
// - Use setInterval() to increment the counter by 1 every 1,000 milliseconds (1 second).
// - Log the current counter value to the console.
function startCounter() {
  if (!intervalID) {
    // Add the logic here to set the interval and log the counter value.
  }
}

// Stop Counter Function
// This function stops the counter.
// Part of the function is already provided. Add the missing logic to:
// - Use clearInterval() to stop the interval.
// - Reset intervalID to null so a new interval can be created later if needed.
function stopCounter() {
  // Add the logic here to stop the interval and reset the interval ID.
}

// Button References
// The start and stop buttons are already defined in the HTML with IDs "start" and "stop".
// These references are already provided for you.
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

// Event Listeners
// Event listeners for the buttons are already attached below.
// The Start button triggers the startCounter function.
// The Stop button triggers the stopCounter function.
startButton.addEventListener("click", startCounter);
stopButton.addEventListener("click", stopCounter);

// Notes:
// - Complete the `startCounter` function to use setInterval() and log the counter value every second.
// - Complete the `stopCounter` function to use clearInterval() and reset the interval ID.
// - The Start and Stop buttons are already connected to their respective functions via event listeners.
// - Ensure that the counter increments correctly and stops immediately when required.