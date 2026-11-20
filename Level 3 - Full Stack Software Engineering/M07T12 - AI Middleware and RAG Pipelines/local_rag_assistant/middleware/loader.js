// Import required modules
const fs = require("fs");
const path = require("path");

function loadCourses(){
    // Create a file path to courses.json
    const filePath = path.join(__dirname, "..", "knowledge", "courses.json");

    // Read the file contents
    const fileContents = fs.readFileSync(filePath, "utf8");

    //Convert the JSON string to a JavaScript object
    const courseData = JSON.parse(fileContents);

    // Return the data
    return courseData
}

module.exports = loadCourses;