const students = [ 
{ name: "Sarah", completed: 5 }, 
{ name: "John", completed: 8 }, 
{ name: "Aisha", completed: 12 } 
]; 
function calculateAverageCompletion(data) { 
let total = 0; 
for (let i = 0; i <= data.length; i++) { 
total += data[i].completed; 
} 
return total / data.length; 
} 
console.log(calculateAverageCompletion(students)); 