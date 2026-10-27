const articleRegistry = [ 
    { 
        title: "Mastering React State Hooks", 
        embedding: [0.95, 0.10, 0.20, 0.05] 
    }, 
    { 
        title: "Building Microservices with Node and Express", 
        embedding: [0.15, 0.90, 0.10, 0.30] 
    }, 
    { 
        title: "Flutter vs React Native for iOS and Android", 
        embedding: [0.40, 0.20, 0.95, 0.05] 
    }, 
    { 
        title: "Pandas and NumPy Data Analysis Workflows", 
        embedding: [0.05, 0.40, 0.05, 0.90] 
    } 
]; 
// The target user preference profile vector you are testing against 
// This user is heavily focused on server-side architecture and data parsing 
const targetUserVector = [0.10, 0.85, 0.00, 0.60];


// Calculate the Euclidean distance
function getEuclideanDistance(vecA, vecB){
    let sum = 0;
    for (let i = 0; i < vecA.length; i++){
        sum += Math.pow(vecA[i] - vecB[i], 2);
    }

    return Math.sqrt(sum);
}

// Adding the calculated distances to the array of objects
articleRegistry.forEach(item => {
    const distance = getEuclideanDistance(targetUserVector, item.embedding);
    item.distance = distance;
});

// Sorting based on the distance
articleRegistry.sort((a, b) => a.distance - b.distance);

console.log(`Title: ${articleRegistry[0].title}, Calculated Distance: ${articleRegistry[0].distance}`);



