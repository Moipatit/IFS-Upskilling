// Simulates the response of an LLM
function mockLLM(augmentedPrompt){
    // Extract the context
    const sections = augmentedPrompt.split("Retrieved Context:");

    // Extract the user question
    const contextAndQuestion = sections[1];
    const contextSections = contextAndQuestion.split("User Question:");

    //Store the context and question
    const context = contextSections[0].trim();
    const question = contextSections[1].trim();
    console.log("Retrieved context:", context);
    console.log("User Question:", question);

    // Basic response generator
    let response = "";
    if(context.includes("AWS")){
        response = "The Cloud Computing course with AWS covers AWS services. Some of the popular AWS services include EC2, S3, IAM and Lambda.";
    }
    else if (context.includes("React")){
        response = "The Frontend Development with React course covers the following: React, JSX, Components, Props, State and Hooks.";

    } else if (context.includes("SQL")){
        response = "The SQL and Database Management course covers the following: SQL, Database Design, SELECT, JOIN, Filtering and Relational Databases.";
    } else if (context.includes("Python")){
        response = "The Python for Data Analysis course covers the following: Pandas, Data Analysis, Data Cleaning and Data Visualization.";
    } else if (context.includes("Cybersecurity")){
        response = "The Cybersecurity course covers the following: Cybersecurity Fundamentals, Network Security, Encryption, Authentication and Threat Detection.";
    } else if (context.includes("Node.js")){
        response = "The Node.js course covers the following: Backend Development with Node.js, Express, REST APIs, Middleware, Routing and Async JavaScript.";
    } else if (context.includes("DevOps")){
        response = "The DevOps course covers the following: DevOps and CI/CD, Git, Docker, CI/CD, Automation, Deployment, Infrastructure."
    } else {
        response = "I couldn't find a suitable course based on the information available."
    }

    return response;

}

module.exports = mockLLM;