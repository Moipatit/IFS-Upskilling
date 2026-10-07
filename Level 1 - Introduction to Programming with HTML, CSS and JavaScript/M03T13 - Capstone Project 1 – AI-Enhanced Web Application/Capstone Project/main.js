// Declaring the variables from the DOM elements
const form = document.getElementById("userInput");
const ingredient = document.getElementById("ingredient");
const searchButton = document.getElementById("searchButton");
const message = document.getElementById("message");
const result = document.getElementById("result");
const retryButton = document.getElementById("retryButton")
let orders = JSON.parse(sessionStorage.getItem("orders")) || [];;
const activeOrderDisplay = document.getElementById("active-orders");
const orderNumber = document.getElementById("orderNumber")

// Function to format the user input
function getIngredient(){
    let userInputtedIngredient = ingredient.value.toLowerCase().replace(" ", "_");
    return userInputtedIngredient;
}

// Call the fetchMeal() function when the submit button is clicked
form.addEventListener("submit", function(event){
    event.preventDefault();
    fetchMeal();
    ingredient.value = ""

});

// Call the fetchMeal() function when the retry button is clicked
retryButton.addEventListener("click", function(){
    fetchMeal();
})


// Function to fetch meals from the api
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
        let newOrder = {
          "orderNumber": orders.length + 1,
          "description": randomMeal.strMeal,
          "completed": false
        }
        orders.push(newOrder);
        sessionStorage.setItem("orders", JSON.stringify(orders))
        sessionStorage.setItem("lastOrderNumber", orders.length)

        message.textContent = ""

        result.textContent = `The Chef analyzed your ingredient selection and recommends: \n${randomMeal.strMeal} `;
       

        searchButton.disabled = false;
    }catch (err){
        message.textContent = "The recipe service is currently unavaliable. Please try again."
        retryButton.classList.remove("hidden");
    }
}

//Function to display all of the active orders from session storage
function displayActiveOrders(){
    let activeOrders = JSON.parse(sessionStorage.getItem("orders")) || [];
    //Clear existing orders
    activeOrderDisplay.innerHTML = "";

    for (const order of activeOrders){
        if (order.completed === false){
           activeOrderDisplay.innerHTML += `
           <p>Order Number: ${order.orderNumber}<p>
           <p>Order Name: ${order.description}</p>
           <p>Completion status: ${order.completed}</p>
           <hr>`
        }
    }
}

// function to complete orders
function completeOrders(){
    let activeOrders = JSON.parse(sessionStorage.getItem("orders")) || [];
    const exists = activeOrders.some(order => order.orderNumber === Number(orderNumber.value));
    
}