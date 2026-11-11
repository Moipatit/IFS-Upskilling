const button = document.getElementById("myButton");

// Calculate the cosine similarity
function calculateCosineSimilarity(vecA, vecB){
    let dotProduct = 0;
    let magA = 0;
    let magB = 0;

    for (let i = 0; i < vecA.length; i++){
        // Calculate the dotProduct
        dotProduct += vecA[i] * vecB[i];
        magA += vecA[i] * vecA[i];
        magB += vecB[i] * vecB[i];
    }

    // Calculate the magnitude of vector A
    magA = Math.sqrt(magA);

    // Calculate the magnitude of vector B
    magB = Math.sqrt(magB);

    // Return the cosine similarity score
    return dotProduct / (magA * magB);
}


button.addEventListener('click', () => {
    const query = document.getElementById("query").value;
    searchQuery(query);
});

function searchQuery(query){
    // Check if the user used a supported phrase
    if (!Object.hasOwn(queryEmbeddings, query)){
        alert("This phrase is not supported. Please try again using a supported phrase");
        return;
    }

    // Get the embedding for the search query
    let queryVector = queryEmbeddings[query];

    // Calculate the similarity scores for all of the courses
    const results = courses.map(item => {
        const score = calculateCosineSimilarity(queryVector, item.embedding);
        return { id: item.id, title: item.title, description: item.description, similarityScore: score}
    });

    // Sort the courses by similarity score 
    results.sort((a, b) => b.similarityScore - a.similarityScore);

    // Get the top three courses
    const topThreeCourses = results.slice(0, 3);

    // Display the results
    displayResults(topThreeCourses);
    
}

function displayResults(results){
    const resultsContainer = document.getElementById("search-results");

    // remove the previous results
    resultsContainer.replaceChildren();

    // Create a heading 
    const heading = document.createElement("h2");
    heading.textContent = "Top 3 Search Results";

    // Display each course
    results.forEach(course => {
        const courseElement = document.createElement("div");
        
        const title = document.createElement("h3");
        title.textContent = course.title;

        const description = document.createElement("p");
        description.textContent = course.description;

        const score = document.createElement("p");
        score.textContent = `Similarity Score: ${course.similarityScore.toFixed(3)}`;

        courseElement.appendChild(title);
        courseElement.appendChild(description);
        courseElement.appendChild(score);

        resultsContainer.appendChild(courseElement)

    })
}


