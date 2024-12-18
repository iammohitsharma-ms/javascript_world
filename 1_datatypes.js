//* ============================
//* Data Types Section
//* ============================

//* Data types define the type of values that a variable can hold.

//? Types of Primitive Data types

//? Number: Represents numeric values, including integers and floating-point numbers.
// Example:
var myFavNum = 12
var myNum = -2
console.log(myFavNum);
console.log(typeof myFavNum);

//? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:
var myName = "Mohit"
console.log(myName);
console.log(typeof myName);


//? Boolean: Represents a logical entity with two values: true or false.
// Example:
var isRanning = true
console.log(isRanning);
console.log(typeof isRanning);

//? undefined: Represents the absence of a value or an uninitialized variable.
// Example:
var age = undefined
console.log(age);
var name;
console.log(name);
console.log(typeof name);



//? Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
// Example:
var temp = null;
console.log(temp);
console.log(typeof temp);

//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example:
// const bigNumber = 1234567890123456789012345678901234567890n;

//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
// const mySymbol = Symbol("description");

//! ============================
//! Data Types Interview Questions
//! ============================

//? 1: What is the difference between null and undefined in JavaScript❓

//? 2: What is the purpose of typeof operator in JavaScript❓
var num = 23;
console.log(typeof num);


//? 3: What is the result of `typeof null` in JavaScript❓
// Objecct
var city = null
console.log(typeof city);

//? 4: What are primitive data types in JavaScript❓
// String,  number, boolean, bigint, symbole, undefind, null  

//? 5: Convert a string to a number?
var state = "27"
var pin = Number(state)
console.log("pin = ", typeof pin);

// We just need to add the '+' sign before the string
// Example:
var place = "Noida"
console.log(typeof +place);

//? 6: Convert a number to a string?
var num = 123;
var numToStr = String(num)
console.log("Type is ", typeof numToStr);

// We just need to add an empty string after the number
// Example:
var num1 = 345
console.log(typeof (num1 + ""));

//? 7: Explain the concept of truthy and falsy values in JavaScript. Provide examples.❓

//? 8: To check if a non-empty string is truthy or falsy in JavaScript, we can directly use if statement.
var myName = "mohit";
if (myName){
    console.log("this is truthy  value");
}
else{
    console.log("this is falsy value");
    
}

//* ==========  Data Types End Section ==========

//todo ---------------- todo Bonus ----------------------

//* ========== parseInt & parseFloat Section ==========
//? parseInt and parseFloat are both functions in JavaScript used for converting strings to numbers, but they have different use cases.

//* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
const myString = "42";
const myNumber = parseInt(myString, 10);
console.log(myNumber); // Output: 42
console.log(typeof myNumber)

const myString1 = "42.5";
const myNumber1 = parseInt(myString1);
console.log(myNumber1); // Output: 42
console.log(typeof myNumber1); // Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).
const myString2 = "42.5";
const myNumber2 = parseFloat(myString2);
console.log(myNumber2); // Output: 42.5
console.log(typeof myNumber2);

const myString3 = "42"
const myNumber3 = parseFloat(myString3)
console.log(myNumber3);  // output: 42
console.log(typeof myNumber2);



//TODO  Key Differences:
//? parseInt is used for converting to integers and ignores anything after the decimal point.
//? parseFloat is used for converting to floating-point numbers, preserving the decimal part.
//? Both functions will attempt to convert as much of the string as possible until an invalid character is encountered.

//! Here are more examples
console.log(parseInt("123"));
// 123 (default base-10)

console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)

console.log(parseInt("   123 "));
// 123 (whitespace is ignored)

console.log(parseInt("0077"));
console.log(parseFloat("0077"));
// 77 (leading zeros are ignored)

console.log(parseInt("1.9"));
// 1 (decimal part is truncated)

//! When we will not get an Output
console.log(parseInt("&123"));
console.log(parseInt("-123"));
console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)

//? What is the purpose of the NaN value in JavaScript❓
console.log(isNaN("Mohit"));
console.log(isNaN(123));
console.log(isNaN("123"));   // false

// NaN === NaN , why is it false?
if(NaN === NaN){
    console.log("both are equal");
}
else{
    console.log("Not equal");
    
}


//* ========== parseInt & parseFloat End Section ==========
