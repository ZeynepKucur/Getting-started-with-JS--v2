/*A function's this keyword references the execution context for that call,
determined entirely bu how the function was called. */

/* A this-aware function can thus have a different context each time it's called,
which makes it more flexible & reusable.*/

//Example 1
var workshop = {
    teacher: "Kyle ",
    ask(question) {
        console.log(this.teacher, question);
        console.log(typeof ask);
    }
}

workshop.ask("What is implicit binding?");
console.log("workshop is an " +typeof workshop);

//Example 2
function ask(question) {
    console.log(this.teacher, question);
}

function otherClass() {
    var myContext = {
        teacher: "Suzy"
    };
    ask.call(myContext, "Why?"); //Suzy Why?
}

otherClass();
console.log(typeof ask);