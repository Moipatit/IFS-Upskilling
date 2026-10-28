const API_KEY = "";
const form = document.getElementById("aiForm");

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const destination = document.getElementById("destination").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const numberOfPeople = document.getElementById("numberOfPeople").value;
    const budget = document.getElementById("budget").value;
    const interests = document.getElementById("interests").value;
})