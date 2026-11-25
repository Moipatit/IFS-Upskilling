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
        response = "The Cloud Computing course with AWS covers AWS services. Some of the popular AWS services include EC2, S3, IAM and Lambda."
    }

    return response;

}

module.exports = mockLLM;