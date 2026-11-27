const runRAG = require("./middleware/ragPipeline");

const result = runRAG("What AWS skills can I learn?");

console.log("\nRetrieved Chunks:");
console.log(result.retrievedChunks);

console.log("\nAugmented Prompt:");
console.log(result.augmentedPrompt);

console.log("\nFinal Response:");
console.log(result.response);