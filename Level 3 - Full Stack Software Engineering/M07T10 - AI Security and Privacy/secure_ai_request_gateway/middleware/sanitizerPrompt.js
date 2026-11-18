//Middleware function to sanitize the prompt
function sanitizerPrompt(req, res, next){
    // Extracting the prompt
    const { prompt } = req.body;

    // Defining regular expression
    const emailRegex =  /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
    const phoneRegex = /(?:\+27|0)\s?[1-9]\d{1,2}\s?\d{3}\s?\d{4}/g;

    // Replacing the phone numbers and email addresses
    let sanitizedPrompt = prompt.replace(emailRegex, "[EMAIL_REMOVED]");
    sanitizedPrompt = sanitizedPrompt.replace(phoneRegex, "[PHONE_REMOVED]");

    // Updating the request body with the sanitized prompt
    req.body.prompt = sanitizedPrompt;

    next();
}

module.exports = sanitizerPrompt;