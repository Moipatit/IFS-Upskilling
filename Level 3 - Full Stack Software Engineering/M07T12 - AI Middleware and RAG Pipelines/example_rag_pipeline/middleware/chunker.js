// middleware/chunker.js
// ------------------------------------------------------------
// The chunker is the second stage of the RAG pipeline.
//
// In a real RAG system, documents are often too large to search
// effectively as one complete document.
//
// For example, a course catalogue may contain many different
// sections: title, description, difficulty, duration, skills,
// assessment rules, and support information.
//
// If we searched the full document every time, the retriever might
// return too much unrelated information.
//
// Chunking solves this problem by breaking larger documents into
// smaller searchable pieces.
//
// In this example, each article/course is divided into two chunks:
// 1. An overview chunk containing the title, category, difficulty,
//    duration, and summary.
// 2. A skills chunk containing the title and skills covered.
// ------------------------------------------------------------

function createChunks(knowledgeBase) {
  // This array will store all the smaller searchable chunks.
  const chunks = [];

  // Loop through every item in the knowledge base.
  knowledgeBase.forEach((item) => {
    // Chunk 1: general course overview.
    // This helps answer questions about difficulty, duration,
    // category, and the general purpose of the course.
    chunks.push({
      id: `${item.id}-overview`,
      sourceId: item.id,
      title: item.title,
      type: "overview",
      text: `
Title: ${item.title}
Category: ${item.category}
Difficulty: ${item.difficulty}
Duration: ${item.duration}
Summary: ${item.summary}
      `.trim()
    });

    // Chunk 2: skills covered.
    // This helps answer questions about what learners will practise
    // or what technologies are included in a course.
    chunks.push({
      id: `${item.id}-skills`,
      sourceId: item.id,
      title: item.title,
      type: "skills",
      text: `
Title: ${item.title}
Skills covered: ${item.skills.join(", ")}
      `.trim()
    });
  });

  // Return the full list of chunks to the next stage of the pipeline.
  return chunks;
}

module.exports = {
  createChunks
};