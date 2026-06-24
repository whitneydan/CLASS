// Global Variable and Block scope
// in block scope, a global Variable can be redefined locally be it LET or CONST inside a code block.
/*In block scope, when a variable is redefined it only have an effect inside the code block i.e It's effective locally.
but if it is updated without using the keyword LET or CONST in a block scope, global scope can have access to it
because it was updated and not redeclared.
*/
// global scope cannot access block scope, but block scope can access global scope when a variable is not defined locally
// VAR doesn't work with block scope, it ignores it. So its best we make use of LET and CONST.

// Global Scope
let myAge = 20;
console.log(myAge);

// local scope or Block scope
if (true) {
    let age = 30;
    let myName = "Uba";
    console.log(`code in block scope 1: ${age} ${myName}`);

if (true){
    // let age = 51;
    myAge = 50;
    console.log(`code in block scope 2: ${age} ${myName}`);
}
}
// console.log(age, myName)
console.log(myAge);

// FUNCTIONS
// functions can be declared or expressed and can ne invoked(called) multiple times
// we have 2 ways of displaying a function 
/*Hoisting: The functions is moved to the top during execution,
so you can call it before it appears in the code.
Hoisting can only be done when declaring a function and cannot be done when using
function expression
 */ 

// function declaration
/**
 function name(){
 console.log()
 }
 name()
 */

 function greet(){
    console.log("Good Morning All");
 }
 greet();

//  Function Expression
// The functions is stored in a variable name, and after a code block, we add a semi-colon because its an expression
const data = function () {
    console.log("There are 5 candidates available");
};
data();

// Arrow function
// converting a function into an arrow function
const variableName = function() {
    console.log(2 + 2);
};

const anyName = () => {
    console.log(3 +3);
};
anyName();

// Function Argument and Parameter
// A parameter is an arbitrary data(a slot) passed into the function
// An argument is the value passed in for the parameter
// The first way of making use of a parameter in a function is by passing the value(argument) inside of the invoked(called) function.
// The parameters passed into the function should be accordingly(orderly with the argument)
// parameters cannot be accessed outside of a function because its a local variable
const myData = (firstChild, lastChild) => {
    console.log(`Hey there ${firstChild} and ${lastChild} are my children`);
};
myData("John", "Favour");
// Giving parameters default values
const myFriends = (friend1 = "Joy", friend2 = "Debby") => {
    console.log(`I have got two pals and they are ${friend1} and ${friend2}`);
};
myFriends();

// Function returning values
// we are able to reuse the value javascript brings to us
/*
A function in JavaScript can return a value using the return keyword.
This allows a function to produce an output that can be used elsewhere in the program
*/ 
// basic function
function goodMorning(person) {
    console.log(`Good morning ${person}`);
}
goodMorning("Jay");

// function returning value
function returnValue(a, b) {
    return a + b;
}

let myCall = returnValue(10, 5);
console.log(myCall);

function checkYear(presentYear){
    return presentYear + 2025;
}
let yearValue = checkYear(myCall);
console.log(yearValue);

// Call back function
/*
A callback function is a function that is passed as an argument
to another function and is executed later
*/

function displayMessage(callback){
    console.log("This is the main function.");
    callback(); // calling the callback function
}

function showCallback() {
    console.log("This is the callback function.");
}

// Passing 'showCallback' as a callback to 'displayMessage'
displayMessage(showCallback);

// 2
const myFunc = (iAmCalling) => {
    let myValue = 10 + 20;
    iAmCalling(myValue);
};
myFunc(function (myValue){
    console.log(myValue);
});

// forEach method
const myPeople = ["providence", "James", "simeon", "jane"];
myPeople.forEach((person, index) => {
    console.log(person, index);
});

// we can also define a function, then pass the function we defined into the myPeople.forEach()
const students = (myStudent) => {
    console.log(`Hello ${myStudent}`);
};
myPeople.forEach(students);

// total sum of numbers in an array
const myNumbers = [10, 20, 30, 40];
let mySum = 0;
myNumbers.forEach((num) => {
    mySum += num;
});
console.log("Total sum:", mySum);