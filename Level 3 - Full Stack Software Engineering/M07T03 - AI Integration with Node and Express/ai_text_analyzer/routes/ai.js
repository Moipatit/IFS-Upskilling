// Import required modules
const express = require('express');
const router = express.Router();

// Function to create a fallback response
function createFallBackResponse(text){
    const cleanText = text.toLowerCase();
    let sentiment = 'neutral';
    let priority = 'medium';

    // Check the inputted text and determine a sentiment and a priority
    if (cleanText.includes('error') || cleanText.includes('broken') || cleanText.includes('crash')){
        sentiment = 'negative';
        priority = 'high';
    }

    if(cleanText.includes('excellent') || cleanText.includes('great') || cleanText.includes('love')){
        sentiment = 'positive';
        priority = 'low';
    }


    return { sentiment, priority, summary: 'A local fallback response was generated because the AI service was unavailable', dataSource: 'local_fallback' };
}

// Endpoint to analyze the inputted text
router.post('/analyze', async (req, res) => {
    const { textToProcess }  = req.body;

    // Input validation on the text
    if (!textToProcess || textToProcess.trim() === '' || textToProcess === null){
        return res.status(400).json({ error: 'Text input cannot be empty '});
    }

    // Sending the prompt to the AI service
    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', 
            {
                method: "POST",
                headers : {
                    Authorization: `Bearer ${process.env.AI_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'openrouter/free',
                    messages: [
                        {
                            role: 'user', 
                            content: `Analyze the following text and return only a JSON object containing
                            - sentiment (positive, negative or neutral)
                            - priority (low, medium or high)
                            - summary (one short sentence)
                            Text: "$(textToProcess)"`
                        }
                    ]
                })
            }
        );

        // Send an error if the response has an issue
        if (!response.ok){
            throw new Error('AI service returned an error');
        }

        // Convert the data into an JSON object
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        const result = JSON.parse(aiResponse);

        // Sending the data to the client
        return res.json({ ...result, dataSource: 'ai_model' });


    } catch (error){
        console.warn('AI request failed. Activating fallaback response');
        const fallbackResponse = createFallBackResponse(textToProcess);
        return res.json(fallbackResponse)
    }
    
});

module.exports = router;