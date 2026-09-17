/* This example shows how we use the built-in methods querySelector, createElement and 
appendChild for manipulating our HTML page. */

// Using querySelector to find the first <ol> element.
let htmlList = document.querySelector("ol");
alert("The list items on this page were added using JavaScript!! :) ");

// Create and append <li> items to the ordered list.
for (i = 0; i < 5; i++) {
  let listItem = document.createElement("li");
  // Set the content of the <li> element to display the list item number.
  listItem.innerHTML = "I am list item number " + i;
  htmlList.appendChild(listItem);
}

/* For more info about the above methods, refer to the following resources: 
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild */
