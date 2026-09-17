// Note: You can use ctrl + / to comment and uncomment a set of selected lines

// ========= Array built-in methods =========

let games = ["Call of Duty", "Candy Crush", "FIFA"];

// Adding elements to end of an array
games.push("Street Fighters", "King of Fighters"); // This is the push method; it adds one or more elements to an array
console.log(games); //Output: ["Call of Duty", "Candy Crush", "FIFA", "Street Fighters", "King of Fighters"];

// Removing last element from an array
let lastGame = games.pop(); // This is the pop method; it removes an element from the end of an array
console.log("Removed element returned after pop:", lastGame); // Output: King of Fighters

// Remove first element from an array
let firstGame = games.shift(); // This is the shift method; it removes an element from the beginning of an array
console.log("Removed element returned after shift: ", firstGame); // Output: Call of Duty

// Add elements to the beginning of an array
games.unshift("Street Fighters 3", "Street Fighters 4"); // This is the unshift method; it adds elements to the beginning of an array
console.log(games);
//Output:
// [
//   "Street Fighters 3",
//   "Street Fighters 4",
//   "Candy Crush",
//   "FIFA",
//   "Street Fighters",
// ];

// Sorting
//// Sorting in ascending order
console.log(games.sort());
// Output: [
//     'Candy Crush',
//     'FIFA',
//     'Street Fighters',
//     'Street Fighters 3',
//     'Street Fighters 4'
//   ]

//// Descending order
console.log(games.reverse());
// Output: [
//     'Street Fighters 4',
//     'Street Fighters 3',
//     'Street Fighters',
//     'FIFA',
//     'Candy Crush'
// ]

games.splice(1, 2); //starting at position 1, remove 2 elements i.e. remove 'Street Fighters 3' and 'Street Fighters'
console.log(games); // Output: [ 'Street Fighters 4', 'FIFA', 'Candy Crush' ]

// ========= String built-in methods =========

let player_name = "John Doe";
let upperCaseName = player_name.toUpperCase(); // This is how we use the toUpperCase method: name_of_variable.toUpperCase(). This converts the string to upper case letters and returns it.
console.log("Returned string after toUpperCase: ", upperCaseName);
let lowerCaseName = player_name.toLowerCase(); // This is how we use the toLowerCase method: name_of_variable.toLowerCase(). This converts the string to lower case letters and returns it.
console.log("Returned string after toLowerCase: ", lowerCaseName);

let greet = "Hello how are you?";
let greetSlice = greet.slice(1, 5); // This is how we use the slice method. It extracts a section of the string and returns it. The arguments in the method are the start position and the number of characters to return. Here this gives us "ello " which is placed in the variable greetSlice
console.log("Result after slice: ", greetSlice);

//Note: None of these built-in methods change the original string, they just return a modified version of the string which can then later be assigned to another variable.

// ========= Array / String built-in methods =========

let travelHistory = ["Malaysia", "Singapore", "Thailand", "UK", "UAE"];
let countryIndex = travelHistory.indexOf("Malaysia"); // Returns the index of the first occurrence of the specified value within the array or in a string. If the item is not found, -1 will be returned.
console.log(countryIndex);

let playerName = "Babar Azam";
let nameIndex = playerName.indexOf("Azam");
console.log(nameIndex);

let sportsmen = ["Muhammad Ali", "Mike Tyson", "Imran Khan", "Lionel Messi"];
console.log(sportsmen.includes("Lionel Messi")); // Checks if the array contains a given element.
console.log(sportsmen.includes("C. Ronaldo"));

let sampleString = "Welcome to the hotel california.";
console.log(sampleString.includes("california")); // Look, it works with strings too!
console.log(sampleString.includes("gotham"));
