const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

/**
 * Base endpoint - greets the user.
 * If a name query parameter is provided, it customizes the greeting.
 */
app.get("/greet", (req, res) => {
  const name = req.query.name;
  if (!name) {
    res.send("Hello world");
  } else {
    res.send(`Hello, ${name}`);
  }
});

/**
 * Utility function - retrieves people data from 'people.json'.
 * If the file doesn't exist, it creates an empty file.
 * @returns {Array} - Array of people names.
 */
function getPeople() {
  try {
    const content = fs.readFileSync("people.json");
    return JSON.parse(content);
  } catch (e) {
    // Handle case when file doesn't exist
    fs.writeFileSync("people.json", "[]");
    return [];
  }
}

/**
 * Utility function - adds a person to 'people.json'.
 * @param {string} name - Name of the person to add.
 */
function addPerson(name) {
  const people = getPeople();
  people.push(name);
  fs.writeFileSync("people.json", JSON.stringify(people));
}

/**
 * Utility function - deletes a person from 'people.json'.
 * @param {string} name - Name of the person to delete.
 */
function deletePerson(name) {
  const people = getPeople();
  const index = people.indexOf(name);
  if (index > -1) {
    people.splice(index, 1);
    fs.writeFileSync("people.json", JSON.stringify(people));
  }
}

/**
 * Endpoint to add a new person.
 * Checks if the person already exists before adding.
 */
app.post("/person", (req, res) => {
  const name = req.query.name;
  const people = getPeople();
  if (people.includes(name)) {
    res.send("Person already exists");
  } else {
    addPerson(name);
    res.send("Success, added person");
  }
});

/**
 * Endpoint to update a person's name.
 * Requires both old and new name query parameters.
 */
app.put("/person", (req, res) => {
  const oldName = req.query.name;
  const newName = req.query.newName;
  const people = getPeople();
  const index = people.indexOf(oldName);

  if (index > -1) {
    people[index] = newName;
    fs.writeFileSync("people.json", JSON.stringify(people));
    res.send("Success, updated person");
  } else {
    res.send("Person does not exist");
  }
});

/**
 * Endpoint to check if a person exists.
 * Takes a name query parameter to search in the list.
 */
app.get("/person", (req, res) => {
  const name = req.query.name;
  const people = getPeople();
  if (people.includes(name)) {
    res.send("Can confirm person exists");
  } else {
    res.send("Person does not exist");
  }
});

/**
 * Endpoint to delete a person.
 * Checks if the person exists before deletion.
 */
app.delete("/person", (req, res) => {
  const name = req.query.name;
  const people = getPeople();
  if (people.includes(name)) {
    deletePerson(name);
    res.send("Success, deleted person");
  } else {
    res.send("Person does not exist");
  }
});

/**
 * Starts the server on the specified port.
 */
app.listen(port, () => console.log(`Server is listening on port ${port}`));
