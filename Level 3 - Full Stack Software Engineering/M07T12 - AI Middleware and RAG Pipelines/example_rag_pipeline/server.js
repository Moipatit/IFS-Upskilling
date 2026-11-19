// server.js
// ------------------------------------------------------------
// This file creates a small Express server so the example project
// can run in the browser.
//
// The server has two jobs:
// 1. Serve the front-end files from the public folder.
// 2. Later, receive a user question and send it through the RAG pipeline.
// ------------------------------------------------------------

const express = require("express");
const path = require("path");

const { runRagPipeline } = require("./middleware/ragPipeline");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/api/ask", (req, res) => {
  const { question } = req.body;

  if (!question || question.trim() === "") {
    return res.status(400).json({
      error: "Please provide a question."
    });
  }

  const result = runRagPipeline(question);
  res.json(result);
});

app.get("/api/health", (req, res) => {
  res.json({
    message: "Example RAG Pipeline server is running."
  });
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});