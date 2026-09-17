// ========= Maps =========

// Maps allow us to save key-value pairs, rather than just individual items.
let colourMap = new Map();

// We use the .set function to add key-value pairs to the map.
colourMap.set("blue", "the sky");
colourMap.set("red", "an apple");
colourMap.set("yellow", "the sun");
colourMap.set("green", "grass");
colourMap.set("orange", "a peach");
colourMap.set("purple", "a flower");
colourMap.set("black", "coal");
colourMap.set("white", "snow");

// We now create a for loop to print the key-value pairs.
for (let [key, value] of colourMap) {
  console.log(`The colour of ${value} is ${key}.`);
}

console.log(colourMap.has("blue")); //  Checks to see if a key exists in the map.
console.log(colourMap.has("dark_blue"));
if (colourMap.has("black")) {
  console.log("The colour black is present in this map.");
}

console.log(colourMap.get("blue")); // Returns the value of a given key.

colourMap.delete("blue"); // Deletes the given key-value pair.
console.log(colourMap.get("blue")); // Should return undefined now.

console.log(colourMap);
colourMap.clear(); // Removes ALL key-value pairs in the map, complete wipeout.
console.log(colourMap);
