let x = 5;    
let y = 6;
let z = x + y;
console.log(z);
// JS is case sensitive
// JS Variable (let, const)
// Let cannot be redeclared but can be updated
// Const cannot be redeclared and cannot be updated
let mySchool = "uniport";
// console.log(mySchool)
mySchool = "RSU";
console.log(mySchool);
// Different ways for variable naming
// Variable, Variable Name, Value. Arrays where we can add various datatype
let myPosition = "Intern";
let savage21 = 15;
let my_church = "SOJ";
let $company = "MRsoft";
let _hobby = "Table tennis";
// const
const myName = "UBA";
console.log(myName);

/**
JS DATA TYPES: Primitive & Non-Primitive
Primitive Data type consist of single values.
Non-Primitive Data types consist of multiple values.
Primitive Data type = strings, numbers, boolean, null, undefined, symbols.
Non-Primitive Data types = Objects, Arrays, Function, Regular Expression. */

//Strings is a sequence of characters in quote.
// A JavaScript string is zero or more characters written inside quotes. 


// 1.STRINGS
console.log("Ken", "Divine", "whitney", 12, true, null);
const programmingLanguage = "JavaScript";
const $programmingLanguage = "Python";
console.log(programmingLanguage, $programmingLanguage);
const studentsAge = "50" + "50";
console.log(studentsAge);
// Single Line Comment
/** Multi Line comment */

// string concatenation
let myFullName = "Uba" + " " + "Emmanuel";
console.log(myFullName);

let surName = "Great";
let firstName = "victor";
let fullName = surName + " " + firstName;
let age = 20;
console.log(fullName);

// templates literals
let studentFullName = `My surname is ${surName} and my first name is ${firstName}. I am ${age} years old`;
console.log(studentFullName);

/**
 Strings are classified into 2 types: 
 Properties and Method

 STRINGS PROPERTIES
 strings length
 when checking for the length of a string, it doesn't start from 0 but starts from 1.
 */
console.log(surName.toUpperCase());
const childName = "QUEEN";
console.log(childName.toLowerCase());

// Common methods
// index
console.log(fullName.indexOf("a"), fullName.indexOf("v"));
console.log(fullName.indexOf("c"), fullName.lastIndexOf("c"));
// slice
console.log(fullName.slice(5, 11));
let $myCompany = "mrsoft";
console.log($myCompany.slice(0, 2), $myCompany.slice(0, 2).toUpperCase());
// replace
console.log(fullName.replace("v", "p"));
// substring
let text = "web3 is the future";
console.log(text.substring(0, 4));
console.log(text.substring(7));
// when doing the length property, it starts from 1, when doing the index, it starts from 0

/**
 1.	Number:  A number representing a numeric value.
2.	Bigint: A number representing a large integer.
3.	String:  A text of characters enclosed in quotes.
4.	Boolean:  A data type representing true or false
5.	Undefined: A variable with no assigned value.
6.	Null:  A value representing object absence.
7.	Symbol: A unique primitive identifier.
8.	Object: A collection of key-value pairs of data


 */

// 2. NUMBERS

let myDateOfBirth = 2025;
myDateOfBirth = 1960;
console.log(myDateOfBirth);

// math operators +, -, /, *, **, %
// we make use of the ++ to add by 1
// we make use of the -- to subtract by 1
// + (addition), -(subtraction), /(division), *(multiplication), **(raise to the power), %(remainder)

// addition
let myDogAge = 5;
// myDogAge++
myDogAge += 15;
console.log(myDogAge);

// subtraction
let myCat = 10;
// myCat--
myCat -= 5;
console.log(myCat);

// multiplication
let myNumber = 5 * 5;
console.log(myNumber);

// let $sum = 20;
// $sum *= 11;
// console.log($sum);

// division
let myHouseNumber = 30 / 15;
console.log(myHouseNumber);

let mySonsAge = 40;
let myDaughtersAge = 20;
let ageDifference = mySonsAge / myDaughtersAge;
console.log(ageDifference);

// remainder
let myProperty = 100 % 30;
console.log(myProperty);

let $myProperty = 100 % 20;
console.log($myProperty);

// raise to power
let myBirth = mySonsAge ** 2;
console.log(myBirth);

// let myDay = "a" * "b";
// console.log(myDay);

/**
 ORDER OF OPERATION B O D M A S
 B - BRACKET
 O - ORDER(Indices/Raise to power or Roots)
 D - DIVISION
 M - MULTIPLICATION
 A - ADDITION
 S - SUBTRACTION
 */
let myFoodDigits = 20 + (2 * 3) / (20 - 18);
console.log(myFoodDigits);

let pi = 5;
let cookies = (pi ** 2 * (52 - 2)) % 10;
console.log(cookies);

// shorthand notation of numbers
let likes = 20;
//  likes = likes + 10;
// likes++; (addition of one number)
// likes--; (subtraction of one number)
// likes += 10;
// likes -= 10;
// likes /= 10;
// likes *= 10;
// likes **= 2;

// 3.Boolean
/** BOOLEAN (we use boolean to evaluate conditions in our code
   and to check if certain values are true or false) 
 */
console.log(true, false, "true", "false");
let myLastName = "Chizoba";
myLastName = true;
console.log(typeof programmingLanguage, typeof mySonsAge, typeof myLastName);
// Methods can return as boolean
let namesOfChildren = ["kerry", "steven", "providence", "Emmanuel"];
let myChildName = 'Divine';
console.log(myChildName.includes("D"));
console.log(namesOfChildren.includes("uba"));
console.log(namesOfChildren.includes("steven"));
// Comparison operators in boolean
/*in boolean a single = sign set's value of a variable
but a == is used to check the equality of a variable and can
be called abstract/loose equality.
*/
let timeZone = 30;
console.log(timeZone == 25);
console.log(timeZone == 30);
console.log(timeZone != 25);
console.log(timeZone != 30);
console.log(timeZone >= 25);
console.log(timeZone <= 30);
console.log(timeZone > 25);
console.log(timeZone < 25);
// = is assignment(assigning a value)
// == equality
// === strict equality
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// != not equal to

/**
 BOOLEANS USED WITH STRINGS
 Later alphabets are greater than early alphabets.
 Alphabets with lowercase are greater than alphabets with uppercase.
 uppercase and lowercase alphabets are different in JavaScript

 e.g: A < Z (A is less than Z)
      Z > B (Z is greater than B)
      a > E (a is greater than E)
      a < w (a is less than w)
      w > a (w is greater than a)

 */
let myCourse = "javaScript";
console.log(myCourse == "JavaScript");
console.log(myCourse > "JavaScript");

let jackScore = 50;
console.log(jackScore == "50"); //behind the scene, JS does its conversion and sees it as a number.
console.log(jackScore === "50");

// Strict Comparison
// strict equality can be identified with the === sign.
let myChurch = "winners chapel";
console.log(myChurch === "winners chapel");
console.log(myChurch === "Winners Chapel");

// null
// null is 0
let yourName = null;
console.log(yourName, yourName + 3, `my name is ${yourName}`);
// {} CB: Curly Braces
// () B: Bracket
// [] SB: Square Bracket (Array in JavaScript)

/***Template strings or Template literals
 * (the variable is injected into the string to avoid going in and out of a string)
 **/
const $title = "Last Days in high school";
const author = "Miracle";
const reaction = 50;
// concatenation way
let myNovel =
  "The novel, " +
  $title +
  " written by " +
  author +
  " has " +
  reaction +
  " reactions ";
console.log(myNovel);

// Template literals
let myBlogPost = `The novel, ${$title} written by ${author} has ${reaction} reaction`;
console.log(myBlogPost);

// Creating HTML Templates
let html = `
<h2>${$title}</h2>
<p> written by ${author}</p>
<span>has ${reaction} likes </span>
`;
console.log(html);

// Undefined
// UNDEFINED is said to not defining a given variable
let hisClass;
console.log(hisClass, hisClass + 3, `his is ${hisClass}`);
// NaN = Not a Number.
let herClassName = "Gold";
let $number = 3;
console.log(herClassName - $number);
let herClassAge = herClassName / 5;
console.log(herClassAge);

// Symbols
const mySymbol = Symbol("myDescription");
console.log(mySymbol, typeof mySymbol);

// NON PRIMITIVE DATA TYPES
// Arrays
// An array is a data structure that stores multiple value in a single variable.
let student1 = "John";
let student2 = "Emma";
let student3 = "Micheal";
let student4 = "Sophia";
// let student5 = Using array
let students = ["John", "Emma", "Micheal", "Sophia", "Daniel"];
// console.log(students, students[4], students[0]);
console.log(students);
console.log(students[4], students[0])
console.log(students[4], students.length, typeof students);
/* array method (some method do not alter the original value while
some method changes the original value and
they are called 'destructive method')
*/
let randomNames = ["john", true, "jacob", "joshua", 20, "sonia", null, undefined, Symbol];
console.log(randomNames.indexOf("joshua"));
console.log(randomNames.join(","));
// console.log(randomNames);
console.log(randomNames.concat("Jane"));
console.log(randomNames);

// examples of destructive methods(methods that alters the original value)
console.log(randomNames.push("Emmanuel")); //push() adds to the array but takes it to the last.
console.log(randomNames);
console.log(randomNames.unshift("Samuel")); //unshift() adds to the array but takes it to the first
console.log(randomNames);
console.log(randomNames.pop()); //removes the last item in an array
console.log(randomNames);
console.log(randomNames.shift()); //removes the first item in an array
console.log(randomNames);

// TYPE CONVERSION (turning one data type to another data type)
// converting a string into a number:
let myScore = "200";
console.log(typeof myScore);
myScore = Number(myScore);
console.log(myScore, typeof myScore);

// converting a number into a string
let miraclesScore = 50;
miraclesScore = String(miraclesScore);
console.log(miraclesScore);

// converting a Boolean into a string
let $boolean = true;
$boolean = String($boolean);
console.log($boolean);

// DOM(Document Object Module)

// converting a Boolean into a Number
let abomination = true;
abomination = Number(abomination);
console.log(abomination);

// in type conversion for boolean, some values are considered true and false
// positive/negative (1 /-1) numbers are true value, only zero(0) is a false value in type conversion
const childAge = Boolean(20);
console.log(childAge, typeof childAge);

const childAge1 = Boolean(0);
console.log(childAge1, typeof childAge1);

// all strings in a boolean type conversion are always true except it is empty it becomes false

// We should the const more in JS. We can only use let if it will be updated in the future
const schoolAttended = Boolean("UST");
console.log(schoolAttended);

const primarySchoolAttended = Boolean();
console.log(primarySchoolAttended);



