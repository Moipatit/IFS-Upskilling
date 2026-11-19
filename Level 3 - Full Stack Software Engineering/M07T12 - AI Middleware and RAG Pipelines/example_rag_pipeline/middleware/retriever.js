// middleware/retriever.js
// ------------------------------------------------------------
// The retriever is the third stage of the RAG pipeline.
//
// In a production RAG system, the retriever often uses embeddings
// and vector similarity to find information with similar meaning.
//
// In this beginner-friendly example, we will not use embeddings.
// Instead, we will use a simple weighted keyword scoring strategy.
//
// The retriever will:
// 1. Receive the user's question.
// 2. Compare the question against every chunk.
// 3. Give each chunk a relevance score.
// 4. Sort chunks from most relevant to least relevant.
// 5. Return the top three chunks.
// ------------------------------------------------------------

function cleanText(text) {
  // Convert text to lowercase so matching is not affected by capital letters.
  return text.toLowerCase();
}

function getQuestionTerms(question) {
  // Split the question into individual words.
  // Remove very short words because words like "a", "is", and "to"
  // are usually not useful for retrieval.
  return cleanText(question)
    .split(/\W+/)
    .filter((word) => word.length > 2);
}

function scoreChunk(questionTerms, chunk) {
  const chunkText = cleanText(chunk.text);
  let score = 0;

  questionTerms.forEach((term) => {
    // If the term appears in the chunk, increase the score.
    if (chunkText.includes(term)) {
      score += 1;
    }

    // Give a slightly higher score if the term appears in the title.
    // This helps the retriever prioritise chunks where the main topic
    // matches the user's question.
    if (cleanText(chunk.title).includes(term)) {
      score += 2;
    }
  });

  return score;
}

function retrieveRelevantChunks(question, chunks, numberOfResults = 3) {
  // Convert the user's question into searchable terms.
  const questionTerms = getQuestionTerms(question);

  // Score every chunk.
  const scoredChunks = chunks.map((chunk) => {
    return {
      ...chunk,
      score: scoreChunk(questionTerms, chunk)
    };
  });

  // Sort chunks from highest score to lowest score.
  const sortedChunks = scoredChunks.sort((a, b) => b.score - a.score);

  // Remove chunks with a score of 0 because they did not match the question.
  const matchingChunks = sortedChunks.filter((chunk) => chunk.score > 0);

  // Return only the top results.
  return matchingChunks.slice(0, numberOfResults);
}

module.exports = {
  retrieveRelevantChunks
};