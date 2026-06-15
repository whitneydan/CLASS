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
//  WHILE LOOP
/* while loop a little different from for loop because the initial expression
is outside the parenthesis(), followed by the while statement, then the condition
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
    console.log(" i attended:", schoolNames[i]);
    i++;
}

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