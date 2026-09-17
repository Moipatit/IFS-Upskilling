const submitBtn =
  document.getElementById("submit-btn");

const retryBtn =
  document.getElementById("retry-btn");

const status =
  document.getElementById("status");

const result =
  document.getElementById("result");

async function generateAIResponse() {

  const prompt =
    document.getElementById("prompt").value;

  submitBtn.disabled = true;

  submitBtn.textContent =
    "Generating...";

  status.textContent =
    "AI is creating your response...";

  result.textContent = "";

  retryBtn.hidden = true;

  try {

    const response = await fetch(
      "https://api.example.com/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      }
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data =
      await response.json();

    result.textContent =
      data.output;

    status.textContent =
      "Completed successfully.";

  } catch (error) {

    status.textContent =
      "The AI service is unavailable. Please try again.";

    retryBtn.hidden = false;

  } finally {

    submitBtn.disabled = false;

    submitBtn.textContent =
      "Generate";
  }
}

submitBtn.addEventListener(
  "click",
  generateAIResponse
);

retryBtn.addEventListener(
  "click",
  generateAIResponse
);
