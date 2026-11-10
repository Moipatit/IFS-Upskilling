/* Vector Database Seed Registry containing pre-calculated 
four-dimensional semantic profiles*/

const vectorStore = [ 
{ id: 201, title: "Introduction to Python Scripts", vector: [0.91, 
0.08, 0.12, 0.02] }, 
{ id: 202, title: "Advanced Oil Painting Mediums", vector: [0.05, 
0.94, 0.03, 0.11] }, 
{ id: 203, title: "Financial Investment Strategies", vector: [0.14, 
0.02, 0.88, 0.25] }, 
{ id: 204, title: "Organic Chemistry Lab Basics",   vector: [0.03, 
0.11, 0.18, 0.92] } 
];

// function to calculate the dot product
function dotProduct(vec1, vec2){
    if (vec1.length !== vec2.length){
        console.log("Vectors must be of equal length");
    }
    return vec1.reduce((sum, val, i) => sum + val * vec2[i], 0);
}

// function to calculate the vector magnitude
function vectorMagnitude(arr){
    const sumOfSquares = arr.reduce((sum, val) => sum + val ** 2, 0)
    return Math.sqrt(sumOfSquares);
}

// function to calculate the cosine similarity
function cosineSimilarity(vec1, vec2){
    if (vec1.length !== vec2.length){
        console.log("Vectors must be of equal length");
    }

    let dp = dotProduct(vec1, vec2);
    let magnitude1 = vectorMagnitude(vec1);
    let magnitude2 = vectorMagnitude(vec2);

    return dp / (magnitude1 * magnitude2)
}

const queryA = [0.85, 0.12, 0.05, 0.09];
const queryB = [0.02, 0.89, 0.15, 0.04];
const queryC = [0.22, 0.07, 0.81, 0.31];


// function to loop through the store and finds the best match
function evaluateQuery(queryName, queryVector){
    console.log(`\n--- ${queryName}---`);

    let bestMatch = null;
    let highestScore = -1;

    const results = vectorStore.map(item => {
        const score = cosineSimilarity(queryVector, item.vector);

        // Look for the highest matching result
        if (score > highestScore){
            highestScore = score;
            bestMatch = item.title;
        }

        return { title: item.title, similarityScore: score };
    });

    console.table(results);
    console.log(`Closest Semantic Match: "${bestMatch}" (Score: ${highestScore.toFixed(4)})`);
}

// Running the evaluations for the profiles
evaluateQuery("Query Profile A (Tech Bias Search)", queryA);
evaluateQuery("Query Profile B (Art Bias Search)", queryB);
evaluateQuery("Query Profile C (Finance Bias Search)", queryC);

