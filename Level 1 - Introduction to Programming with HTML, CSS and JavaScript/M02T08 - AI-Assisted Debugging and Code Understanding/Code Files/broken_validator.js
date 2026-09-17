// broken_validator.js
function processUserSubmissions(submissions) {
    let verifiedAdults = [];

    submissions.forEach(user => {
        // Bug 1: Throws an error if a user object is missing the status property
        // Bug 2: Does not safely validate whether required fields exist before processing the submission
        if (user.status.isApproved && user.age >= 18) {
            verifiedAdults.push(user.name);
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