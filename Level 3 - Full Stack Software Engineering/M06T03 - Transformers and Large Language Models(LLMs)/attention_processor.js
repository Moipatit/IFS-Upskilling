// Token Dataset: "React", "Manages", "State"
// Each token contains 4-dimensional Query, Key, and Value vector arrays
const textSequence = [
  {
    word: "React",
    query: [0.90, 0.10, 0.05, 0.00],
    key: [0.85, 0.15, 0.00, 0.05],
    value: [100, 5, 0, 0]
  },
  {
    word: "Manages",
    query: [0.20, 0.80, 0.10, 0.10],
    key: [0.15, 0.75, 0.20, 0.00],
    value: [10, 50, 10, 0]
  },
  {
    word: "State",
    query: [0.85, 0.30, 0.00, 0.40],
    key: [0.90, 0.20, 0.10, 0.30],
    value: [0, 10, 80, 5]
  }
];

// Target token evaluating context parameters: We are analyzing the word "State"
const focusTokenIndex = 2; 


/* Expected Verification Output:
- Word: "React" | Raw: 0.7875 | Scaled: 0.3938
- Word: "Manages" | Raw: 0.3525 | Scaled: 0.1763
- Word: "State" | Raw: 0.9450 | Scaled: 0.4725
*/