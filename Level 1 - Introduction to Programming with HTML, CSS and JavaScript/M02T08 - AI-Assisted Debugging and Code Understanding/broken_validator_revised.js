// broken_validator.js
function processUserSubmissions(submissions) {
    let verifiedAdults = [];

    // Defensive check: Ensure input is a valid array
    if (!Array.isArray(submissions)){
        return verifiedAdults;
    }

    submissions.forEach(user => {
        // Defensive check to ensure that user is a non-null object
        if (!user || typeof user !== 'object'){
            return;
        }

        // Safe property extraction with Optional chaining 
        const isApproved = user.status?.isApproved === true;
        const isAdult = typeof user.age === 'number' && user.age >= 18;
        const hasValidName = typeof user.name === 'string' && user.name.trim().length > 0;

        //Process only when all conditions are securely validated
        if (isApproved && isAdult && hasValidName){
            verifiedAdults.push(user.name)
        }
    });

    return verifiedAdults;
       
}

// Test execution footprint that triggers the runtime crash
const rawData = [
    { name: "Alice", age: 25, status: { isApproved: true } },
    { name: "Bob", age: 17, status: { isApproved: false } },
    { name: "Charlie", age: 30 } // Missing status object property completely
];

console.log(processUserSubmissions(rawData));