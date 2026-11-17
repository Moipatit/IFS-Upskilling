const express = require("express");
// Import middleware functions
const validatePrompt = require("./middleware/validatePrompt");
const detectInjection = require("./middleware/detectInjection");

const app = express();
const PORT = 3000;

//Middleware to parse the JSON requests
app.use(express.json());

//Test route
app.get("/", (req, res) => {
    res.send("Secure AI Request Gateway is running");
});

app.post("/api/support", validatePrompt, detectInjection, (req, res) => {
    const { prompt } = req.body;

    res.status(200).json({ receivedPrompt: prompt });
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})