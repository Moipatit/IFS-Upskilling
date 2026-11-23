// Function to chunk the courses
function chunkCourses(courses){
    // Array used to store the chunks
    const chunks = [];

    // Loop through the courses
    courses.forEach((course) => {
        // Create an overview chunk
        const overviewContent = course.title + ": " + course.description;
        const overview = { 
            courseId: course.id, 
            courseTitle: course.title, 
            type: "overview", 
            content: overviewContent
        }

        // Create the details chunk
        const detailsContent = "Difficulty: " + course.difficulty + ". " + "Duration: " + course.duration + "."; 
        const details = {
            courseId: course.id,
            courseTitle: course.title,
            type: "details",
            content: detailsContent
        }
    

        // Create the skills chunk
        const skillsContent = course.skills.join(", ");
        const skills = {
            courseId: course.id,
            courseTitle: course.title,
            type: "skills",
            content: skillsContent
        }

        // Add the chunks to the array
        chunks.push(overview, details, skills);
    })

    return chunks;

}

module.exports = chunkCourses;