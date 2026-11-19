// public/script.js
// ------------------------------------------------------------
// This file connects the browser interface to the Express server.
// It sends the user's question to /api/ask, receives the full RAG
// pipeline result, and displays each stage on the page.
// ------------------------------------------------------------

const questionInput = document.getElementById("questionInput");
const askButton = document.getElementById("askButton");
const errorMessage = document.getElementById("errorMessage");

const resultsSection = document.getElementById("results");
const displayQuestion = document.getElementById("displayQuestion");
const retrievedChunksContainer = document.getElementById("retrievedChunks");
const augmentedPrompt = document.getElementById("augmentedPrompt");
const responseText = document.getElementById("responseText");

askButton.addEventListener("click", handleAskAssistant);

async function handleAskAssistant() {
  const question = questionInput.value.trim();

  clearError();

  if (!question) {
    showError("Please enter a question before asking the assistant.");
    return;
  }

  setLoadingState(true);

  try {
    const data = await askAssistant(question);
    displayResults(data);
  } catch (error) {
    showError(error.message);
  } finally {
    setLoadingState(false);
  }
}

async function askAssistant(question) {
  const response = await fetch("/api/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ question })
  });

  const contentType = response.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    throw new Error(
      "The server did not return JSON. Check that the /api/ask route exists in server.js and that the server was restarted."
    );
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Something went wrong while processing your question.");
  }

  return data;
}

function displayResults(data) {
  resultsSection.classList.remove("hidden");

  displayQuestion.textContent = data.question;
  augmentedPrompt.textContent = data.augmentedPrompt;
  responseText.textContent = data.response;

  displayRetrievedChunks(data.retrievedChunks);
}

function displayRetrievedChunks(chunks) {
  retrievedChunksContainer.innerHTML = "";

  if (!chunks || chunks.length === 0) {
    retrievedChunksContainer.innerHTML = `
      <p>No relevant chunks were retrieved from the knowledge base.</p>
    `;
    return;
  }

  chunks.forEach((chunk) => {
    const chunkElement = document.createElement("div");
    chunkElement.className = "chunk";

    chunkElement.innerHTML = `
      <h3>${chunk.title}</h3>
      <p><strong>Chunk type:</strong> ${chunk.type}</p>
      <p><strong>Retrieval score:</strong> ${chunk.score}</p>
      <pre>${chunk.text}</pre>
    `;

    retrievedChunksContainer.appendChild(chunkElement);
  });
}

function setLoadingState(isLoading) {
  askButton.disabled = isLoading;
  askButton.textContent = isLoading ? "Processing..." : "Ask Assistant";
}

function showError(message) {
  errorMessage.textContent = message;
}

function clearError() {
  errorMessage.textContent = "";
}