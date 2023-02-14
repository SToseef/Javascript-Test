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


// JavaScript Objects //
const user = {
    firstName: 'Teddy',
    lastName: 'Lock',
    activated: true
  }
  console.log(user);
  
  user.email = 'tlock@example.com'
  console.log(user.email);
  
  user.lastName = 'Manning'
  console.log(user.lastName);
  
  user.skills = ['HTML', 'CSS', 'JavaScript']
  console.log(user.skills);
  user['skills'][1] = 'SASS'  //replacing in array
  console.log(user.skills);
//

// JavaScript Functions //
function total(amount,tax){
  console.log(amount + tax);
};

total(50,10);

// function expression
var sayGreeting = function(firstName){
  console.log('Hello ' + firstName);
};

sayGreeting('Ginger');

// arrow function
const square = (number) => {
  console.log(number * number);
};

square(10);


// JavaScript Comparison Operators //
console.log(10 == 10);
console.log(10 == '10'); //converts string to number
console.log(10 === '10'); //Extra = for additional strictness
console.log(10 === 10);
console.log(20 > 10);
console.log(20 >= 10);
console.log(10 < 10);
console.log(10 <= 10);

// JavaScript Logical Operators //
console.log(20 > 10 && 10 < 50); // && if first and second condition are true then returns true
console.log(true && true); //direct boolean.
console.log(false || true);  //or operator. return true if one is true. false if all conditions are false.
console.log(!false); //not operator !  (returns opposite value)
let number;
console.log(!number); //check if variable has been assigned a value. true if undefined or null.

//JavaScript Conditionals (If Statements)//
const number1 = 15;
const number2 = 12;

function compareNumbers(numberOne, numberTwo){
  let message;

  if(numberOne > numberTwo){
    message = "Number one is greater than number two"

  } else if (numberOne == numberTwo){

    message = "both numbers are equal";

  } else { 

    message = "Number two is greater than number one";

  }

    return message;
  
}

console.log(compareNumbers(number1, number2));
