// middleware/loader.js
// ------------------------------------------------------------
// The loader is the first stage of the RAG pipeline.
//
// In a real RAG application, a loader might read from PDFs,
// Word documents, databases, web pages, or company knowledge bases.
//
// In this beginner-friendly example, our knowledge source is a
// local JSON file called articles.json.
//
// The loader's job is simple:
// 1. Open the knowledge base.
// 2. Read the course/article data.
// 3. Return the data so the next pipeline stage can process it.
// ------------------------------------------------------------

const fs = require("fs");
const path = require("path");

function loadKnowledgeBase() {
  // Build the full path to the articles.json file.
  // __dirname points to the current middleware folder.
  // We use ".." to move one level up into the project root,
  // then enter the knowledge folder.
  const filePath = path.join(__dirname, "..", "knowledge", "articles.json");

  // Read the JSON file as text.
  // The "utf-8" option ensures the file is read as readable text.
  const fileContents = fs.readFileSync(filePath, "utf-8");

  // Convert the JSON text into a JavaScript array of objects.
  const knowledgeBase = JSON.parse(fileContents);

  // Return the loaded knowledge base to the rest of the pipeline.
  return knowledgeBase;
}

// Export the function so other files can use it.
module.exports = {
  loadKnowledgeBase
};