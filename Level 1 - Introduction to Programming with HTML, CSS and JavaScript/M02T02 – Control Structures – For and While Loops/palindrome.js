//For help on how to reverse a string I used freecodecamp
//Here is a link to the website:https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

//Variable declaration
let word = prompt("Please enter a word");
let revWord = "";
let x = 0;
for(let i = word.length-1; i>=0;i--){       //for loop to reverse a string 
    revWord += word[i];
}

while(x <= 0){      //while loop to check if the reversed string and the string the user entered are the same
    if (word === revWord){      //if the 2 words are the same the word is a palindrome
        x++;
        console.log("The word " + word + " is a palindrome");
    }
    else{
        x++;
        console.log("The word " + word + " is not a palindrome");
    }

}
    
