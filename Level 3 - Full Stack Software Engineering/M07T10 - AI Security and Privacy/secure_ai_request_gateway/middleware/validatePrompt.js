// Middleware function to validate the prompt
function validatePrompt(req, res, next){
    const { prompt } = req.body;

    // Check if the prompt is missing
    if(!prompt){
       return res.status(400).json({ message: "No prompt has been provided."});
    }

    // Check if the prompt is a string
    if(typeof prompt !== "string"){
        return res.status(400).json({ message: "Please provide the prompt as a string."});
    }

    // Check if the prompt is an empty string
    if(prompt.trim().length === 0){
        return res.status(400).json({ message: "Please provide a prompt that is not empty."})
    }

    //Check the length of the prompt
    if(prompt.length > 500){
        return res.status(400).json({ message: "Prompt is longer than 500 characters."})
    }

    next()

}

module.exports = validatePrompt;