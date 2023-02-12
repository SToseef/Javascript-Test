// First JavaScript Code!
console.log('Hello World');

let name = 'Toseef'; // String Literal
let age = 24; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;
let selectedColor = null; // Clear value of variable using null

// displays variable on console
console.log(name);
console.log(age);

// Cannot be reserved keyword
// Variable name should be meaningful 
// Case-sensitive

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// on console can use typeof name to check its type

let names = ['Stacy','Amy','Tracy'];
names.push('James'); // Adds name to end of array
// names = ['Lisa']; // reasigns array
console.log(names);

// const command forbids reassignment.
// const is read-only variable
// var allows variable that exists to be re-declared

// Array test (ordered list)
const myArray = ['dog', 1, true, 'cat'];
//console.log(myArray[0]);
myArray.push(55); //push adds to end of array
myArray.pop(); //to remove last element
myArray.splice(2, 1, false); //from index of 2 and delete 1 element
console.log(myArray);
console.log(myArray.length); // how many elements
