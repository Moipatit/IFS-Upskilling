// Importing the middleware functions
const loadCourses = require("./loader");
const chunkCourses = require("./chunker");
const retrieveChunks = require("./retriever");
const buildPrompt = require("./promptBuilder");
const mockLLM = require("./mockLLM");

// Function to run the RAG pipeline
function runRAG(question){
    // Load the courses, generate and retrieve the relevant chunks
    const courses = loadCourses();
    const chunks = chunkCourses(courses);
    const retrievedChunks = retrieveChunks(chunks, question);

    // Build the augmented prompt
    const augmentedPrompt = buildPrompt(question, retrievedChunks);

}