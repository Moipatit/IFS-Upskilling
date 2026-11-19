// middleware/mockLLM.js
// ------------------------------------------------------------
// The mock LLM is the fifth stage of the RAG pipeline.
//
// In a real AI application, this stage would send the augmented
// prompt to a large language model through an API.
//
// For this example, we are not using a real AI API. Instead, this
// file simulates the final response so students can understand the
// RAG workflow without needing an API key, paid service, or external
// AI provider.
//
// The goal is not to create a perfect AI response.
// The goal is to show how retrieved context is used to generate
// a useful answer.
// ------------------------------------------------------------

function generateResponse(question, retrievedChunks) {
  // If no chunks were retrieved, the mock response should be honest.
  // A real AI assistant should avoid guessing when it does not have
  // enough supporting information.
  if (retrievedChunks.length === 0) {
    return `
I could not find enough information in the local knowledge base to answer this question confidently.

Question asked:
"${question}"

Try asking about one of the courses, technologies, difficulty levels, or skills listed in the knowledge base.
    `.trim();
  }

  // Combine the retrieved chunks into a short evidence summary.
  const evidenceSummary = retrievedChunks
    .map((chunk, index) => {
      return `${index + 1}. ${chunk.text}`;
    })
    .join("\n\n");

  // Return a simulated natural-language answer.
  // This response uses the retrieved information instead of inventing
  // information from outside the knowledge base.
  return `
Based on the retrieved knowledge base information, here is a possible response to your question:

"${question}"

The most relevant information I found is:

${evidenceSummary}

This response was generated using a mock language model. In a production RAG application, the augmented prompt would be sent to a real LLM API, and the model would generate a more natural answer using the retrieved context.
  `.trim();
}

module.exports = {
  generateResponse
};