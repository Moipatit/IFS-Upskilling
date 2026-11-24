// Function that transforms the user question into a prompt to send to the LLM
function buildPrompt(question, retrievedChunks){
    // Collecting the content from the retrieved chunks
    let context = "";
    retrievedChunks.forEach((chunk) => {
        context += chunk.chunk.content + "\n";
    })

    // Instructions to define how to the assistant should respond
    const systemInstructions = `
    You are a helpful course recommendation assistant. 
    Use only the information in the retrieved context to answer the user's questions.
    If the retrieved context does not have enough information do not make anything up, 
    explain that you were unable to find a suitable course. 
    `;

    // Combining the instructions, context and user question 
    const augmentedPrompt = `
    ${systemInstructions}
    
    Retrieved Context:
    ${context}
    
    User Question:
    ${question}
    `;

    return augmentedPrompt;
}

module.exports = buildPrompt;