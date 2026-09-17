// *** NOTE ON COMMENTS ***
// This is a comment in JavaScript.
// Comments can be placed anywhere in JavaScript code and the computer ignores them.
// They are intended to be read by humans.
// Any line with a // in front of it is a comment.

// If you want to add a long comment that spans several lines,
// you can use a multi-line comment. A multi-line comment starts
// with `/*` and ends with `*/`.

/* 
Example of a multi-line comment
*/

// ========= Reading JavaScript code =========
/* You're actually reading a JavaScript program right now.
Most other programming languages have the same structure as JavaScript,
so if you learn JavaScript, you can learn the others 
more easily! It's not like learning human languages. */

//  =========  The console.log() function =========
// You may want your program to display or output information to the user.
// The most common way to view program output is to use the console.log function.
// To use this, we enter the console.log command followed by one or more arguments as below.

// ************ Example 1 ************
console.log("Hello, World!");
/* 
When you run this program the computer will output the argument Hello, World!
Note that the argument is enclosed in double quotes ("..."), which are not
displayed in the output. This is because "Hello, World!" is a string 
(remember that it can also be viewed and treated as a list of characters). 
*/

// ************ Example 2 ************
console.log("Printing a string.");

/* 
A common SYNTAX error you could make above is by forgetting to add a closing " 
or a semicolon (;) at the end of the line. Remember that all opening quotation
marks (") require a closing one! 
*/

// ========= How to get input with prompt() =========

/* 
Sometimes you want a user to enter something through the keyboard.
The following input command will show the text "Enter your name: " in the 
output box of the program and the program will halt
until the user enters something with their keyboard and presses ENTER. 
*/

// ========= How the HTML File Interacts with This Script =========

/*
When you open the HTML file in Visual Studio Code (VSC), you'll notice a
<script> tag that links this JavaScript file to the HTML file. 

For now, don't worry about the details of this linkage; we'll cover it
in more detail later. 

You can simply open the `prompt_example.html` file in your browser to see
how user input is handled. This setup has been provided for you in this lab
to help you prepare for future tasks.

Now, let's get back to using the `prompt()` function.
*/

// ************ Example 3 ************
// The following input commands will get the user's name and age.

let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");

// The variable 'name' stores what the user entered into the box as a string.
// The variable 'age' also stores what the user entered into the box as a string.
// Now, when you try running this file, notice the output produced by the following command.

console.log(name, age);
console.log(name + " is " + age + " years old!");

// A common SYNTAX error you could make above is by forgetting to add a closing ‘)’.
// Remember that all opening brackets ‘(’ , require a matching closing one!

// ****************** END OF EXAMPLE CODE *********************
