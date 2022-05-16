//The way to convert from one type to another: coercion
let msg1 = "There are ";
let numStudents = 10;
let msg2 = " students";
console.log(msg1 + numStudents + msg2); 
//numStudents gets converted to number from string
console.log(typeof numStudents); //number
console.log(`There are ${numStudents +""} students.`);

//Falsy values that become false when converted to boolean
/* 
    ""
    0, -0
    null
    NaN
    false
    undefined 
*/