// middleware/ragPipeline.js
// ------------------------------------------------------------
// The RAG pipeline is the central coordinator of the application.
//
// This file connects all the smaller middleware components together.
//
// Each component has one clear responsibility:
// 1. loader.js loads the knowledge base.
// 2. chunker.js divides the knowledge into searchable chunks.
// 3. retriever.js selects the most relevant chunks.
// 4. promptBuilder.js creates the augmented prompt.
// 5. mockLLM.js generates a simulated response.
//
// This file shows how AI middleware orchestrates a complete workflow.
// ------------------------------------------------------------

const { loadKnowledgeBase } = require("./loader");
const { createChunks } = require("./chunker");
const { retrieveRelevantChunks } = require("./retriever");
const { buildPrompt } = require("./promptBuilder");
const { generateResponse } = require("./mockLLM");

function runRagPipeline(question) {
  // Step 1: Load the local knowledge base.
  const knowledgeBase = loadKnowledgeBase();

  // Step 2: Convert the knowledge base into smaller searchable chunks.
  const chunks = createChunks(knowledgeBase);

  // Step 3: Retrieve the chunks that best match the user's question.
  const retrievedChunks = retrieveRelevantChunks(question, chunks);

  // Step 4: Build the augmented prompt.
  const augmentedPrompt = buildPrompt(question, retrievedChunks);

  // Step 5: Generate a simulated AI response.
  const response = generateResponse(question, retrievedChunks);

  // Return all stages so the browser can display the full pipeline.
  return {
    question,
    retrievedChunks,
    augmentedPrompt,
    response
  };
}

module.exports = {
  runRagPipeline
};