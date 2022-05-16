//Scope: where the JS engine looks for things

x= 42; /*we need to know where in the program to find x
where in memory is it? and what bucket of organizitaion does it fit into?
And the rules for that is called SCOPE
*/

console.log(y); /*Same thing with console.log(y);
Not only do i need to look up console and log, but i also need to look up y
I need to figure out that variable. Where does it come from? Does it come from this scope?
Does it come from a different bucket of scope?
So all the rules that go into figuring that out, that's called scope.*/

var teacher = "Kyle";

function otherClass(){
    teacher= "Suzy"; //finds teacher declared in the global scope
    topic = "React";// Because of the rules of scope, it creates topic into the global scope
    console.log("Welcome!");
}
otherClass();

//FUNCTION EXPRESSIONS
var clickHandler = function(){ //The function here doesnt have a name
    //this ian anonymoous function expression.
};

var keyHandler = function keyHandler(){ 
    /*function here does have a name and it's called keyHandler 
    and its assigned to a variable of the same name, keyHandler*/
    //this is a named function expression
};



//IIFE Immediately Invoked Function Expression
var teacher2 = "Kyle";

(function anotherTeacher(){
    var teacher2 = "Suzy";
    console.log(teacher2); // 
}) ();
console.log(teacher2);