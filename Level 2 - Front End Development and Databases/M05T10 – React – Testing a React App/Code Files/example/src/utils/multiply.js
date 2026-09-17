// Define a function named 'multiply' that accepts a variable number of arguments and multiplies them.
function multiply(...args) {
  // Use the `reduce` method to multiply all the arguments together
  // - 'product' is the accumulator that starts at 1
  // - 'element' is each element in the 'args' array
  return args.reduce((product, element) => product * element, 1);
}

export default multiply;
