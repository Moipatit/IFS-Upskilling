const API_KEY = process.env.OPENROUTER_API_KEY;
const form = document.getElementById("aiForm");

function displayAIResponse(aiResponse) {
// Remove whitespace around the response
let content = aiResponse.trim();

// Detect HTML wrapped in a Markdown code block
const htmlMatch = content.match(
    /^```(?:html)?\s*([\s\S]*?)\s*```$/i
);

if (htmlMatch) {
    content = htmlMatch[1].trim();
}

// Detect a complete HTML document
const isHTMLDocument = /<!doctype html|<html[\s>]/i.test(content);

if (isHTMLDocument) {
    // Extract the body content from the HTML document
    const bodyMatch = content.match(
        /<body[^>]*>([\s\S]*?)<\/body>/i
    );

    if (bodyMatch) {
        content = bodyMatch[1].trim();
    }
} else {
    // Convert Markdown into HTML
    content = marked.parse(content);
}

// Display the generated content
output.innerHTML = DOMPurify.sanitize(content);
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const destination = document.getElementById("destination").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const numberOfPeople = document.getElementById("numberOfPeople").value;
    const budget = document.getElementById("budget").value;
    const interests = document.getElementById("interests").value;
    const output = document.getElementById("output");

    output.textContent = "Generating Travel Plan..."

    const prompt = `Act as an expert travel planner and web application assistant. 
    I will provide you with data submitted from an HTML travel form. 
    Your task is to process this data and generate a detailed, day-by-day custom travel itinerary.

    Here is the user form input:
    - Destination: ${destination}
    - Departure date: ${startDate}
    - Return date: ${endDate}
    - Number of Travelers: ${numberOfPeople}
    - Budget: ${budget}
    - Interests: ${interests}

    Please generate a structured travel plan that includes:
    1. Trip Overview: Total duration, estimated daily budget breakdown, and local weather/packing tips.
    2. Day-by-Day Itinerary: Morning, afternoon, and evening recommendations for each day, including specific attractions, historical spots, or hidden gems.
    3. Dining Suggestions: Local breakfast, lunch, and dinner spots matching the preferences and budget.
    4. Practical Tips: Local transport options, safety notes, and currency/language basics.

    The output will be displayed on a webpage. Format it cleanly using bold headers and bullet points.
    `;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "openai/gpt-4o-mini",
                "messages": [
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]
            })

        });

        const data = await response.json();

        if(data.choices && data.choices[0].message){
            output.innerText = data.choices[0].message.content;
        } else {
            output.innerText = JSON.stringify(data, null, 2);
        }
    } catch (error){
        output.innerText = "Error:" + error.message;
    }

})