// middleware/promptBuilder.js
// ------------------------------------------------------------
// The prompt builder is the fourth stage of the RAG pipeline.
//
// After the retriever selects relevant chunks, the application must
// combine those chunks with the user's original question.
//
// This process is called prompt augmentation.
//
// Instead of sending only the user's question to an AI model, the
// application sends:
// 1. A system instruction.
// 2. Retrieved context from the knowledge base.
// 3. The user's original question.
//
// This gives the model more information to work with and reduces
// the chance of unsupported or inaccurate answers.
// ------------------------------------------------------------

function buildPrompt(question, retrievedChunks) {
  // Convert the retrieved chunks into a readable context block.
  // Each chunk is numbered so it is easy to see which pieces of
  // information were included in the augmented prompt.
  const context = retrievedChunks
    .map((chunk, index) => {
      return `Context ${index + 1}:
${chunk.text}`;
    })
    .join("\n\n");

  // Build the full augmented prompt.
  const prompt = `
You are an AI course assistant for an online learning platform.

Use only the information in the retrieved context to answer the user's question.
If the retrieved context does not contain enough information, say that the knowledge base does not provide enough detail.

Retrieved Context:
${context}

User Question:
${question}

Answer:
  `.trim();

  return prompt;
}

module.exports = {
  buildPrompt
};