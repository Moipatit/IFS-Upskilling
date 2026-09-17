// Training data used by the model.
// Each object contains the number of practice hours
// and the corresponding project score.
const trainingData = [
  { hours: 1, score: 45 },
  { hours: 2, score: 50 },
  { hours: 3, score: 55 },
  { hours: 4, score: 65 },
  { hours: 5, score: 70 },
  { hours: 6, score: 75 },
  { hours: 7, score: 80 }
];

// Model parameters.
// These values will be adjusted during training.
let slope = 0;
let intercept = 0;

// Controls how much the model changes
// during each training step.
const learningRate = 0.01;

// Controls how many times the model
// will repeat the training process.
const trainingSteps = 1000;

/**
 * Makes a prediction using the
 * linear regression formula:
 *
 * y = mx + b
 *
 * y = predicted score
 * m = slope
 * x = practice hours
 * b = intercept
 */
function predict(hours) {
  return slope * hours + intercept;
}

/**
 * Trains the model using gradient descent.
 * The model repeatedly checks its errors
 * and adjusts the slope and intercept
 * to improve future predictions.
 */
function trainModel() {

  // Repeat the training process many times.
  for (let step = 0; step < trainingSteps; step++) {

    // Store the adjustment values that
    // will be applied to the model.
    let slopeGradient = 0;
    let interceptGradient = 0;

    // Process every training example.
    trainingData.forEach((example) => {

      // Generate a prediction.
      const prediction = predict(example.hours);

      // Calculate the difference between
      // the prediction and the actual value.
      const error = prediction - example.score;

      // Accumulate the gradient values.
      slopeGradient += error * example.hours;
      interceptGradient += error;
    });

    // Calculate the average gradient.
    slopeGradient = slopeGradient / trainingData.length;
    interceptGradient = interceptGradient / trainingData.length;

    // Update the model parameters.
    slope = slope - learningRate * slopeGradient;
    intercept = intercept - learningRate * interceptGradient;
  }
}

// Start training the model.
trainModel();

// Display the learned model values.
console.log("Training complete.");
console.log(`Learned slope: ${slope.toFixed(2)}`);
console.log(`Learned intercept: ${intercept.toFixed(2)}`);

// Test the model with a new input value.
const newPracticeHours = 8;

// Generate a prediction.
const predictedScore = predict(newPracticeHours);

// Display the prediction.
console.log(
  `Predicted score for ${newPracticeHours} hours of practice: ${predictedScore.toFixed(0)}`
);