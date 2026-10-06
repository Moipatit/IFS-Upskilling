// Declaring the variables from the DOM elements
const form = document.getElementById("userInput");
const ingredient = document.getElementById("ingredient");
const searchButton = document.getElementById("searchButton");
const message = document.getElementById("message");
const result = document.getElementById("result");
const retryButton = document.getElementById("retryButton")

// Function to format the ingredients
function getIngredient(){
    let userInputtedIngredient = ingredient.value.toLowerCase().replace(" ", "_");
    return userInputtedIngredient;
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    fetchMeal();
    ingredient.value = ""

});

retryButton.addEventListener("click", function(){
    fetchMeal();
})

async function fetchMeal(){
    try{
        searchButton.disabled = true;
        message.textContent = "Generating chef recommendation...";
        result.textContent = "";
        retryButton.classList.add("hidden");

        let ingredient_name = getIngredient();

        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient_name}`);

        if (!response.ok){
            message.textContent = "The recipe service is currently unavaliable. Please try again";
            retryButton.classList.remove("hidden");
            return;
        }

        const data = await response.json();

        if (!data.meals){
            result.textContent = "";
            message.textContent = "No matching meals were found for that ingredient";
            retryButton.classList.remove("hidden");
            return;
        }

        const meals = data.meals;

        const randomIndex = Math.floor(Math.random() * meals.length);
        const randomMeal = meals[randomIndex];

        message.textContent = ""

        result.textContent = `The Chef analyzed your ingredient selection and recommends: \n${randomMeal.strMeal} `;

        searchButton.disabled = false;
    }catch (err){
        message.textContent = "The recipe service is currently unavaliable. Please try again."
        retryButton.classList.remove("hidden");
    }
}