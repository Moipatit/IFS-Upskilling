// Declaring variables from the DOM elements
const recommendationForm = document.getElementById("recommendation-form");
const resultDisplay = document.getElementById("result-display");

let recommendation = "";
let explanation = ""

// A function that takes the user input from the form and determines a learning path
recommendationForm.addEventListener("submit", function(e){
    e.preventDefault();

    const quizScore = Number(document.getElementById("quiz-score").value);
    const confidenceLevel = document.getElementById("confidence-level").value;
    const learningPace = document.getElementById("learning-pace").value;

     if (quizScore < 60 || confidenceLevel === "low"){
        recommendation = "Foundation Review"
        explanation = "This learning path is recommended because your quiz score or confidence level indicates it would be beneficial to reinforce core concepts before moving forward."
    } else if (quizScore >= 85 && confidenceLevel === "high"){
        recommendation = "Advanced challenge";
        explanation = "This learning path is recommended because your high quiz score and strong confidence show you are ready for more complex material.";
    } else {
        recommendation = "Guided practice";
        explanation = "Recommended because your score and feedback suggest a balanced approach with targeted practice will help solidify your skills.";
    }

    // Displaying the learning path and explanation
    resultDisplay.innerHTML = `
    <h3>Recommended Path: ${recommendation}</h3>
    <p><strong>Reason:</strong> ${explanation}</p>
    <p>Note: This is a rule-based recommendation and not a trained machine learning model</p>`

})



