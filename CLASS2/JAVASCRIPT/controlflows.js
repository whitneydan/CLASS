// CONTROL FLOWS
// LOOPS
/**FOR LOOPS
 (a loop is a type of control flow in javascript)
 Loops allow you to execute a block of code repeatedly until a specified condition is met.
 We don't add a ; at the end of the {} because it is a code block.
 Always add an increment at the end if not we would get an unending loop. 
**/

/** for loop explanation
 for ("initial expression"; "condition"; "increment") {
 console.log()
 }
 */

 for (let i = 0; i < 10; i++) {
  console.log("This is number:", i);
 }
 
 let myCars = [
    "dodge",
    "bmw",
    "rolls royce",
    "cyber truck",
    "challenger",
    "urus",
    "lexus",
    "ferrari",
    "ford",
    "mustang",
 ];
 for (let i = 0; i < myCars.length; i++){
    console.log(myCars [i], "is my favorite car");
 }
 for (let i = 0; i < 5; i++) {
  console.log("This is my car", myCars[i]);
  
 }

//  for (let i = 0; i < 4; i++){
//     console.log(myCars[i], "i do not like this car");
//  }


// let myHouse = [
//     "Duplex",
//     "Bungalow",
//     "Villa",
//     "Detached Houses",
// ];
// for(let n = 0; n < myHouse.length; n++) {
//    console.log("My house is a", myHouse[n]);
// }


//  WHILE LOOP
/* while loop is a little different from for loop because the initial expression
is outside the parenthesis(), followed by the while statement, then the condition,
the increment is inside the code block just after the console.log.
*/

/** while loop explanation
 "initial expression"
 while ('condition'){
  console.log()
  'increment'
 }
 */

 const schoolNames = ["babcock", "covenant", "uniport", "UST"];
 let i = 0;
while (i < schoolNames.length) {
    console.log(" I attended:", schoolNames[i]);
    i++;
}

// const states = ["Rivers", "Abia", "Kano", "Lagos"];
// let p = 0;
// while (p < states.length) {
//     console.log("This is my state:", states[p]);
//     p++;
// }

// const $places = ["Gambia", "Malaysia", "London", "UK"];
// let e = 0;
// while(e < 3) {
//     console.log("I went to", $places[e]);
//     e++;
// }

// DO WHILE LOOP (it is an extension of a while loop and used to loop regardless whether the condition is true/false)
// in do-while loop when a condition isn't met it will run once but when its met, it will loop through.
// in do-while loops, the conditions is at the end after the code block.
// Do while loop explanation
/**
 "initial expression"
 do{
  console.log();
  "increment"
  while("condition");
 }
 */
// when a condition isn't met.
let age = 6;
do {
    console.log("condition not met at age:", age);
    age++;
} while (age < 5);

// when a condition is met.
let $age = 2;
do {
    console.log("this is age:", $age);
    $age++;
} while ($age <= 10);

// 1
// let land = 4;
// do{
//     console.log("It is not met", land);
//     land++;
// } while(land <= 3);

// 2
// let name = 8;
// do{
//     console.log("You passed", name);
//     name++;
// }while (name <= 10);

// 3
// let $page = 2;
// do{
//     console.log("This is amazing interesting", $page);
//     $page++;
// }while ($page < 12);


// BREAK AND CONTINUE FLOW FOR LOOPING
/**
 BREAK keyword is used when a particular value is assigned.
 It breaks out the remaining after the assigned value.
 While using the if statement in 'for loop',
 we log into the console before writing the if statement,
 for the 'break' to be effective.
 */
let admissionNumber = [20, 30, 10, 0, 25, 100, 36, 73, 2];
for (let i = 0; i < admissionNumber.length; i++) {
    console.log("Admission No:", admissionNumber[i]);

if (admissionNumber[i] === 100){
    break;
}
}

// let $scores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// for (let p = 0; p < $scores.length; p++){
//     console.log("This is my score:", $scores[p]);

//     if($scores[p] === 60){
//        break; 
//     }
// }

// let names = ["John", "Caleb", "Nero", "Luke"];
// for (let l = 0; l < names.length; l++) {
//     console.log("These are their names:", names[l]);

//   if(names[l] === "Luke"){
//     break;
//   }
// }


/**CONTINUE keyword tells the browser to skip(not displaying on the browser/console)
 the assigned value and move to other values.
 while using the if statement in for loop, we write the if statement
 before logging into the console for the 'continue' to be effective.
 */
let userScore = [20, 30, 10, 0, 25, 100, 36, 73, 2];
for (let i = 0; i < userScore.length; i++){
    if (userScore[i] === 0){
        continue;
    }
    console.log(`you scored : ${userScore[i]}`);
}

// let myScore = [25, 35, 45, 55, 65, 77];
// for (let u = 0; u < myScore.length; u++){
//     if (myScore[u] === 55){
//         continue;
//     }
//     console.log(`I passed my exams ${myScore[u]}`);
// }


// Exercises
// 1
let countDown = 10;
while(countDown > 0) {
  console.log(countDown);
  countDown--;
}
console.log("liftoff");

// let upDown = 10;
// while(upDown > 0) {
//   console.log(upDown);
//   upDown--;
// }
// console.log("Stop!");



// 2
// let password;
// do{
//     password = prompt(`Enter Password`)
// } while (password != "secret123");
// console.log("Access Granted");


// let $password;
// do{
//     $password = prompt(`Enter passkey`)
// } while($password != "null222");
// console.log("Do Give Access");

// 3
for (let i = 1; i <= 10; i++){
    console.log(i);

    if (i === 6){
        break;
    }
}

// for (let p = 1; p <= 11; p++) {

//     console.log(p);
//  if( p === 5) {
//     break;
//  }
// }

// 4
for (let i = 0; i <= 20; i++){
    if (i % 3 === 0){
        continue;
    }
    console.log("This is", i);
}

// for (let q = 0; q < 33; q++) {
//   if (q % 2 === 0){
//     continue;
//   }
//   console.log("I scored", q);
// }


// (CONTROL FLOWS)

// CONDITIONAL STATEMENT
// IF STATEMENT (the code will only execute if the condition is true)
/*
 if (condition){
 console.log()
 }
 */
const myBabyAge = 10;
if (myBabyAge < 20) {
    console.log("This is correct");
}
const models = ["hanna", "divine", "jane", "favour"];
if (models.length >= 4) {
    console.log("These are my models");
}


// This has to do with Later alphabets are greater than earlier alphabets
// const myChild = "Jane";
// if (myChild < "Peace") {
//     console.log("This is my child");
// }

// const myAge = 20;
// if (myAge > 12) {
//     console.log("This my age");
// }

const newAge = ["Praise", "Favour", "Kate", "Loveth"];
if (newAge.length < 5) {
    console.log("This is the number of students");
}



// ELSE STATEMENT
// when the condition is not met ELSE will display.
if (models.length >= 4){
    console.log("These are my candidates");
} else{
    console.log("My candidates are outnumbered");
}


// if (newAge.length < 2){
//     console.log("These are my students🙂");
// }else {
//     console.log("These are not my students");
// }



// ELSE IF STATEMENT
// It consists of two or more conditions. when the first condition falls,
// it moves to the 2nd condition.
if (models.length < 4){
    console.log("These are my candidates but they are not complete");
} else if (models.length >= 6){
    console.log("These are my favorite candidates");
} else if (models.length === 4){
    console.log("Check out my models");
} else {
    console.log("These are not my candidates");
}


/**
 LOGICAL OPERATORS OR || and AND &&
both conditional statement has to be true when using the && operator to pass or display on the console/browser
one out of both conditional statement has to be true.
For the || operator to pass or display on the console/browser
 */
const mySecurity = "password";
if (mySecurity.length >= 8 && mySecurity.includes("@")){
    console.log("This is a perfect password");
} else if(mySecurity.length <= 3 || mySecurity.includes("d")){
    console.log("This is a weak password");
} else {
    console.log("Please change password");
}
// LOGICAL NOT (!) it switches the value to the opposite (from TRUE to FALSE or from FALSE to TRUE)
let myUser = false;
if (!myUser){
    console.log("This is valid");
}
console.log(true, false);
console.log(!true, !false);

/**
 SWITCH STATEMENT
 switch statement come in place and makes it easy
 locating an assigned value instead of using ELSE IF STATEMENT.
 It also uses strict equality ===
 break; helps it not to loop through other values
 */
let studentGrade = "d";
switch (studentGrade){
    case "A":
        console.log("Your grade is A");
        break;
    case "B":
        console.log("Your grade is B");
        break;
    case "C":
        console.log("Your grade is C");
        break;
    case "D":
        console.log("Your grade is D");
        break;
    default:
        console.log("You missed the exam");
}

let gradeScore = 80;
if (gradeScore < 40){
    console.log("Failed, try again");
} else if (gradeScore < 50){
    console.log("try better next time");
} else if (gradeScore <= 60){
    console.log("Good Score");
}else if (gradeScore < 70){
    console.log("very good student");
}else if (gradeScore <= 100){
    console.log("Serious Student");
} else {
    console.log("You are not my student");
}