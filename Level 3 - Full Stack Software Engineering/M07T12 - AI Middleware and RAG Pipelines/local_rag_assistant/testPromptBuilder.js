//import the middleware functions
const loadCourses = require("./middleware/loader");
const chunkCourses = require("./middleware/chunker");
const retrievedChunks = require("./middleware/retriever");
const buildPrompt = require("./middleware/promptBuilder");

// Load and process the courses
const courses = loadCourses();
const chunks = chunkCourses(courses);
const question = "What AWS skills can I learn?";
const retrieveChunks = retrievedChunks(chunks, question);

// Build the augmented prompt
const augmentedPrompt = buildPrompt(question, retrieveChunks);
console.log(augmentedPrompt);

