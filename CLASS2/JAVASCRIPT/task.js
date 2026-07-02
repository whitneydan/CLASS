// Function Declaration

function school() {
    console.log("MRsoft is the name of my school")
};
school();

// Function Expression

let girl = function() {
    console.log("She is tall")
};
girl();

// Arrow Function
let land = () => {
    console.log("The land is expensive")
};
land();

// FUNCTION TASK
/**
 Function Declaration or Expression:
 1. Write a function called 'welcomeStudent' that prints.
 Output: "Welcome to Javascript Class"

 2. Create a function called 'greet' that accepts a person's name and prints.
 Output: "Hello name"

 3. Create a function called introduce that accepts two parameters(name,age).
 Output: My name is name,  I am age years old 

 4. Create a function that accepts two numbers and prints their sum.

 5. Write a function that returns the number: 90 + 10
 */

//  Function Declaration

// 1
function welcomeStudent() {
    console.log("Welcome to Javascript Class")
};
welcomeStudent();

// 2
function greet(){
    console.log("Hello Peace")
};
greet();

// 3
const introduce = (name, age)=> {
    console.log(`My name is ${name}, I am ${age} years old`)
};
introduce("John", "20");

// 4
function myData (){
    console.log(19 + 19);
};
myData();

// 5

function returnValue(c, d) {
   return c + d;
}

let myAge = returnValue(90, 10);
console.log(myAge);

// OBJECT LITERALS

const laptop = {
     name: "Hp EliteBook",
     processor: "CORE i5",
     keyboard: ["Navigation keys", "Alphanumeric keys", "Function keys"],
     
     brand: () => {
        console.log("This is HP brand");
     },

     name: () => {
        console.log("This is HP EliteBook");
     },
};
console.log(laptop);
laptop.brand();
laptop.name();