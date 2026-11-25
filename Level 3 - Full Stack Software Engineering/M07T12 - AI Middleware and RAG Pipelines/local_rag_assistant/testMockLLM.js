const loadCourses = require("./middleware/loader");
const chunkCourses = require("./middleware/chunker");
const retrieveChunks = require("./middleware/retriever");
const buildPrompt = require("./middleware/promptBuilder");
const mockLLM = require("./middleware/mockLLM");


const courses = loadCourses();
const chunks = chunkCourses(courses);
const question = "What AWS skills can I learn?";
const retrievedChunks = retrieveChunks(chunks, question);
const augmentedPrompt = buildPrompt(question, retrievedChunks);

// Generate mock response
const response = mockLLM(augmentedPrompt);

// Display response
console.log("\nMock LLM Response:");
console.log(response);