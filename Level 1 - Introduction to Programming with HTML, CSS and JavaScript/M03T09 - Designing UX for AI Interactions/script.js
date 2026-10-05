const form = document.getElementById("studyForm");
const topic = document.getElementById("topic");
const generateButton = document.getElementById("generateButton");
const message = document.getElementById("message");
const result = document.getElementById("result");
const retryButton = document.getElementById("retryButton");

let lastTopic = "";

form.addEventListener("submit", function(event) {
    event.preventDefault();

    lastTopic = topic.value;

    generateTip();
});

retryButton.addEventListener("click", function() {
    generateTip();
});

function generateTip() {

    // Disable the button while loading
    generateButton.disabled = true;
    generateButton.textContent = "Generating...";

    // Clear previous results
    result.textContent = "";
    retryButton.classList.add("hidden");

    // Show loading message
    message.textContent = "Thinking of a helpful study tip...";

    // Simulate an AI response
    setTimeout(function() {

        // Randomly create a failure
        const failed = Math.random() < 0.3;

        if (failed) {

            message.textContent =
                "Sorry, we couldn't generate a study tip.";

            retryButton.classList.remove("hidden");

        } else {

            message.textContent = "Here's a study tip for you:";

            result.textContent =
                "Break " + lastTopic +
                " into smaller sections and study one section at a time. " +
                "Try explaining what you learned in your own words.";

        }

        // Enable the button again
        generateButton.disabled = false;
        generateButton.textContent = "Generate Tip";

    }, 2000);
}