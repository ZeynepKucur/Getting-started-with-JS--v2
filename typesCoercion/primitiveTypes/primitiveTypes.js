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
let b; //b is declared but not initiliazed
console.log(typeof b);//undefined
console.log(typeof c);//undefined but c has never been declared 
let x = null;
console.log(typeof x);

x = function () { };
console.log(typeof x);

x = [1,2,3];

console.log(typeof x);
