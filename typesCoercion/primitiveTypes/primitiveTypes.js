/*Primitive Types
    undefined
    string
    number
    boolean
    object
    symbol
    null?
    function?
    array?
*/

//UNDEFINED
let b; //b is declared but not initiliazed
console.log(typeof b);//undefined
console.log(typeof c);//undefined but c has never been declared 
let x = null;
console.log(typeof x);

x = function () { };
console.log(typeof x);

x = [1,2,3];

console.log(typeof x);

//UNDEFINED
let age = "Twenty five";
let something = age /2;

console.log(something);//NaN not a number
console.log(Number.isNaN(age)); //False
console.log(Number.isNaN(something)); //False 

//NEW
//new keyword is used to instantiate instances

/*Use new:
Object()
Array()
Function()
Date()
RegExp()
Error */

/*Don't use new:
String()
Number() 
Boolean() */

let yesterday = new Date("March 6,2019");
yesterday.toUTCString();