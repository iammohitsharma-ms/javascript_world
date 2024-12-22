//* ===============================
//* Conditional statement Section
//* ===============================

//* ===============================
//* If Statement
//* ===============================
let score = 20;
if (score > 80){
    console.log("A grade");
}
else{
    console.log("B grade");
}

//? If Else:  The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

//? Syntax
// if (condition) {
//   // Code to be executed if the condition is true
// } else {
//   // Code to be executed if the condition is false
// }

//? We can also use an else if clause to check additional conditions:
let marks = -1;
if (marks >= 90){
    console.log("A grade");
}
else if (marks < 90 && marks >= 70){
    console.log("B Grade");
}
else if (marks < 70 && marks >= 40){
    console.log("C grade");
}
else if (marks < 40 && marks >= 20){
    console.log("D grade");
}
else{
    console.log("E grade");
}


//* ===============================
//* Interview Question
//* ===============================

//! Requirements:
// If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
// If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
// If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
// If the person is 18 or older, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.
// Extended voting eligibility checker with additional conditions

// Assume the user's age, citizenship status, and registration status as inputs
let userAge = 22;
let isCitizen = true; // Assume true for citizen, false for non-citizen
let isRegistered = false; // Assume false for not registered, true for registered
if (userAge >= 18){
    if (isCitizen){
        if (isRegistered){
            console.log("Yor are Eligible to vote");
        }
        else{
            console.log("You are not eligible due to registration status (Not registered)"); 
        }
    }
    else{
        console.log("You are not eligible due to citizenship status (Not a Citizen)");    
    }
}
else{
    console.log("YOu are Not elegible for vote (Younger)"); 
}


//* ===============================
//* Interview Questions
//* ===============================
//! 1: Write a program to check if a number is even or odd.
let num = 23;
if (num % 2 == 0){
    console.log("Even number");
}
else{
    console.log("Odd number");  
}


//! 2: Write a program to check if a number is prime.

let k = 15;
let isPrime;
for( let i=2; i<k; i++){
    prime = k%i == 0;
}
if (prime == false) {
    console.log("Prime Number");
} else {
    console.log("Not a prime number");  
}

//todo Prime numbers are numbers that have only 2 factors: 1 and themselves.
//? All prime numbers greater than 2 are odd.
//? However, not all odd numbers are prime.


//! 3: Write a program to check if a number is positive, negative, or zero.
let numbe = 2;
if (numbe > 0){
    console.log("positive number");
}
else if (numbe < 0){
    console.log("negative number");
}
else{
    console.log("Zero");
}


//* ===============================
//* Switch Statement
//* ===============================

//? Switch Statement: The switch statement is used to perform different actions based on different conditions.
//? Syntax:
// switch (expression) {
//   case value1:
//     //   Code to be executed if expression === value1
//     break;

//   case value2:
//     //   Code to be executed if expression === value2
//     break;

//   //  More cases can be added as needed

//   default:
//   //  Code to be executed if none of the cases match
// }

//todo let's see the example
//! Explain how the switch statement works and what will be the output when the variable day is set to different values.
var day = "Monday";
switch(day){
    case "Monday":
        console.log("Today is monday");
        break;

    case "Tuesday":
        console.log("Today is tuesday");
        break;

     case "Wednesday":
        console.log("Today is wednesday");
        break;
    
     case "Thrusday":
        console.log("Today is Thrusday");
        break;
    
     case "Friday":
        console.log("Today is Friday");
        break;
    
     case "Saturday":
        console.log("Today is Saturday");
        break;
    
     case "Sunday":
        console.log("Today is Sunday");
        break;

    default:
        console.log("Wrong");
        
}

//?=========================
// ? Challenge time
//? ==========================

//! Write a JavaScript switch statement that takes a variable areaOfShapes representing different shapes, and based on its value, calculates and logs the area of the corresponding shape. Consider three shapes: 'Rectangle,' 'Circle,' and 'Square.' For 'Rectangle,' use variables a and b as the sides; for 'Circle,' use a variable r as the radius; and for 'Square,' use variable a as the side length. If the provided shape is not recognized, log a message saying, 'Sorry the shape is not available.' Test your switch statement with areaOfShapes set to 'Square' and sides a and b set to 5 and 10, respectively. Ensure that the correct area (25 in this case) is logged to the console.
var areaOfShapes = "Circle";
var a = 3;
var b = 4;
var r = 2;
var result;

switch (areaOfShapes) {
    case "Rectangle":
        result = a*b;
        console.log("Area of rectangle is ", result);
        break;

    case "Circle":
        result = 3.14*(r*r);
        console.log("Area of circle is ", result);
       break;

    case "Square":
        result = a*a;
        console.log("Area of square is ", result);
        break;

    default:
        console.log("Sorry the shape is not available.");
        break;
}


//* ===============================
//* While Loop
//* ===============================

// ? While Loop: A while loop in JavaScript is a control structure that repeatedly executes a block of code as long as a specified condition remains true. The loop continues iterating while the condition is true, and it terminates when the condition becomes false.

// while (condition) {
//   // Code to be executed as long as the condition is true
// }

//* Simple while loop to count from 1 to 10 🧑‍💻
let count = 1;
while (count <= 10 ) {
    console.log(count);
    count++;
}

//! practice 🧑‍💻
//? let's create a table of 5
let n = 1;
while (n <= 10) {
    console.log("5 * " + n + " = " + 5*n);
    n++;
}


//* ===============================
//* Do-While Loop
//* ===============================

//? Do...While Loop: A do...while loop in JavaScript is similar to a while loop, but it guarantees that the loop body will be executed at least once before checking the loop condition. The loop continues to execute while the specified condition is true, and it terminates when the condition becomes false.

// Syntax: do {
//   // Code to be executed at least once
// } while (condition);

//* Simple do...while loop to count from 1 to 10 🧑‍💻
let m = 1;
do{
    console.log(m);
    m++;
}while(m<=10);


//? Common Use Cases:
// When you want to guarantee the execution of the loop body at least once.
// When the number of iterations is not known beforehand, and you want to validate the condition after the first iteration.

//? Example: Validating User Input with a Do...While Loop(user need to write a valid number) 🧑‍💻

// let userInput;
// let positiveNumber;
// do {
//     userInput = prompt("Enter positive number! ")
//     positiveNumber = parseFloat(userInput);
// } while (isNaN(positiveNumber) || positiveNumber < 0);
// console.log(positiveNumber);


//* ===============================
//* For Loop
//* ===============================

//? For Loop: A for loop in JavaScript is a control flow statement that allows you to repeatedly execute a block of code a specified number of times. It's particularly useful when you know the exact number of iterations needed.

// example: for (initialization; condition; iteration) {
//   // Code to be executed in each iteration
// }
// Initialization: Executed before the loop starts. Often used to initialize a counter variable.
// Condition: Evaluated before each iteration. If false, the loop terminates.
// Iteration: Executed after each iteration. Typically used to update the loop control variable.

//* Simple for loop to count from 1 to 10
for (let index = 1; index <= 10; index++) {
    console.log(index);
}


//? Key Point:
// The initialization, condition, and iteration expressions are optional. You can omit any or all of them, but you must include the semicolons.
//* The code for (;;) {} represents an infinite loop in JavaScript. This construct is commonly used when you want a loop to run indefinitely or until a break statement is encountered within the loop. It's equivalent to while (true) {}.

//* use case: Game Development:
//? In game development, an infinite loop can be used to continuously update and render game frames until a specific condition (e.g., game over) is met.

// for (;;) {
//   // Update game logic and render frames
// }

//? Common Use Cases:
// When you know the exact number of iterations needed.
// Iterating over elements in an array.
// Performing a task a specific number of times.

//! practice :
//! Calculate the sum of numbers from 1 to 10 using a for loop 🧑‍💻
sum = 0;
debugger;
for( let i=1; i<=10; i++){
    sum = sum + i;
}
console.log(sum);


//! Generating a Times Table:🧑‍💻
//! Example 3: Generating a times table of 5 with a for loop.
for( i=1; i<=10; i++){
    console.log(`5 * ${i} = ${5 * i}`); 
}


//! Homework ➡️ JavaScript program to print table for given number (8,9,12,15) using for Loop?

// table of 8
for( i=1; i<=10; i++){
    console.log(`8 * ${i} = ${8 * i}`); 
}

// table of 9
for( i=1; i<=10; i++){
    console.log(`9 * ${i} = ${9 * i}`); 
}

// table of 12
for( i=1; i<=10; i++){
    console.log(`12 * ${i} = ${12 * i}`); 
}

// table of 15
for( i=1; i<=10; i++){
    console.log(`15 * ${i} = ${15 * i}`); 
}


//? More Practice
//!1: program To check if a year is a leap year🧑‍💻

let year = 2024;
if ((year%4 == 0 && year%100 != 0) || year%400 == 0){
    console.log("Leap Year");
}
else{
    console.log("Not a leap year");
}