import { useState } from "react";
import ResponsePanel from "./ResponsePanel";

function AILearningAssistant(){
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    const handlePromptSubmit = async () => {
        if (!prompt.trim()){
            setError("Please enter a question before submitting.")
            return;
        }
        setLoading(true);
        setError(null);
        setResponse("")
        try {
            const apiUrl = `https://text.pollinations.ai/${encodeURIComponent(prompt)}`;
            const result = await fetch(apiUrl);
            if (!result.ok){
                throw new Error ("THe API request was unsuccessful");
            }
            const data = await result.text();
            setResponse(data);
            setPrompt("");
        }catch (err) {
            setError("Unable to generate a response. Please try again");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Generating response...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h1>AI Learning Assistant</h1>
              <p>Ask a learning-related question about React,
                JavaScript, or AI-powered interfaces.</p>

            <input
              type="text"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder="Ask a question..."
            />
            <button onClick={handlePromptSubmit} disabled={loading}>
                Ask AI
            </button>

            {response && (
                <ResponsePanel response={response}/>
            )}
            

        </div>
    );
}

export default AILearningAssistant;