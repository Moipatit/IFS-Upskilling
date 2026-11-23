// Function to retrieve chunks
function retrieveChunks(chunks, question){
    // Words that should not affect the retrieval
    const stopWords = ["which", "what", "where", "when", "who", "how", "the", "a", "an", "and", "or", "is", "are", "do", "does", "to", "of", "in", "for", "i", "can", "learn"];

    //Preprocess the question
    let lowercaseQuestion = question.toLowerCase();
    let words = lowercaseQuestion.split(/\s+/);
    const cleanedWords = words.map(word => word.replace(/[^\w]/g, ""));
    let filteredWords = cleanedWords.filter(word => !stopWords.includes(word));

    // Calculating the chunk scores
    const scoredChunks = [];
    chunks.forEach((chunk) => {
        // converting the chunk to lowercase
        const lowerChunkContent = chunk.content.toLowerCase();
        let score = 0;

        // Comparing the chunks with the user input and increasing the score if there is a match
        cleanedWords.forEach((word) => {
            if (lowerChunkContent.includes(word)){
                score++;
            }
        });

        // Storing the chunks and scores in the array
        const chunkScores = { chunk: chunk, score: score };
        scoredChunks.push(chunkScores);
    })

    // Sort and rank the chunks
    const sortedScoreChunks = scoredChunks.sort((a, b) => b.score - a.score);
    const topChunks = sortedScoreChunks.slice(0, 3);


    // Return the top 3 chunks
    return topChunks;
}

module.exports = retrieveChunks;