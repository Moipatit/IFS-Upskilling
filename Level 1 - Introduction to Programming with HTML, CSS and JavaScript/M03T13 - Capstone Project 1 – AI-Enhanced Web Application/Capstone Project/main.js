// Declaring the variables from the DOM elements
const form = document.getElementById("userInput");
const ingredient = document.getElementById("ingredient");
const searchButton = document.getElementById("searchButton");
const message = document.getElementById("message");
const result = document.getElementById("result");
const retryButton = document.getElementById("retryButton")
let orders = JSON.parse(sessionStorage.getItem("orders")) || [];;
const activeOrderDisplay = document.getElementById("order-list");
const orderNumber = document.getElementById("orderNumber")

// Function to format the user input
function getIngredient(){
    let userInputtedIngredient = ingredient.value.trim().toLowerCase().replace(/\s+/g, "_");
    return userInputtedIngredient;
}

// Call the fetchMeal() function when the submit button is clicked
form.addEventListener("submit", function(event){
    event.preventDefault();
    fetchMeal();

});

// Call the fetchMeal() function when the retry button is clicked
retryButton.addEventListener("click", function(){
    fetchMeal();
})


// Function to fetch meals from the api
async function fetchMeal(){
    try{
        //Disable the search button, display message and display the retry button
        searchButton.disabled = true;
        message.textContent = "Generating chef recommendation...";
        result.textContent = "";
        retryButton.classList.add("hidden");
        retryButton.disabled = true;

        // Get the ingredient that the user inputted and format it
        let ingredient_name = getIngredient();

        // Fetch the data from the api using the ingredient that was inputted
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient_name}`);

        // If there is a problem display a message and the retry button
        if (!response.ok){
            message.textContent = "The recipe service is currently unavaliable. Please try again";
            retryButton.classList.remove("hidden");
            return;
        }

        // Convert the data into json
        const data = await response.json();

        // If no meals are found display a message and the retry button
        if (!data.meals){
            result.textContent = "";
            message.textContent = "No matching meals were found for that ingredient";
            retryButton.classList.remove("hidden");
            return;
        }

        // Fetch a random meal from the data
        const meals = data.meals;
        const randomIndex = Math.floor(Math.random() * meals.length);
        const randomMeal = meals[randomIndex];

        // Create a new order object using from the random meal
        let lastOrderNumber = Number(sessionStorage.getItem("lastOrderNumber")) || 0;
        let newOrder = {
          "orderNumber": lastOrderNumber + 1,
          "description": randomMeal.strMeal,
          "completed": false
        }

        // Push the new order into the array and save in the array in session storage
        orders.push(newOrder);
        sessionStorage.setItem("orders", JSON.stringify(orders))
        sessionStorage.setItem("lastOrderNumber", newOrder.orderNumber)

        message.textContent = "";
        ingredient.value = "";

        // Display the randomly selected meal to the user
        result.textContent = `The Chef analyzed your ingredient selection and recommends: \n${randomMeal.strMeal} `;
       
        // Enable the search button
        searchButton.disabled = false;
    }catch (err){
        //Display error message and retry button if there is a problem
        message.textContent = "The recipe service is currently unavaliable. Please try again."
        retryButton.classList.remove("hidden");
    } finally {
        searchButton.disabled = false;
    }
}

//Function to display all of the active orders from session storage
function displayActiveOrders(){
    // Fetch all of the orders session storage
    let activeOrders = JSON.parse(sessionStorage.getItem("orders")) || [];
    //Clear existing orders
    activeOrderDisplay.innerHTML = "";

    // Display all of the orders that have not been completed
    for (const order of activeOrders){
        if (order.completed === false){
           activeOrderDisplay.innerHTML += `
           <p>Order Number: ${order.orderNumber}</p>
           <p>Order Name: ${order.description}</p>
           <p>Completion status: ${order.completed}</p>
           <hr>`
        }
    }
}

// function to complete orders
function completeOrders(){
    // Fetch all of the orders from session storage
    let activeOrders = JSON.parse(sessionStorage.getItem("orders")) || [];

    // Convert the user input in a number
    const orderNumberValue = Number(orderNumber.value);

    // Check if an order exists and has not been completed
    const exists = activeOrders.some(order => order.orderNumber === orderNumberValue && order.completed === false);
    
    if (exists){
        // Find the relevant order and update its status to true
       const orderToUpdate = activeOrders.find(order => order.orderNumber === orderNumberValue);
        orderToUpdate.completed = true;
        // Save the updated order to session storage
        sessionStorage.setItem("orders", JSON.stringify(activeOrders));

        orderNumber.value = "";
        message.textContent = `Order #${orderNumberValue} has been marked as completed`;
        // Display the orders that have not been completed
        displayActiveOrders()
    } else {
        // Display this message if there is an issue
        message.textContent = "That order number does not exist or the order is already completed.";
    }
}