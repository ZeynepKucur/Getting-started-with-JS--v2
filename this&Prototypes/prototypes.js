//Prototype means that it is an object where any instances are linked to or  to delegate to

//This is a constructor function
function Workshop(teacher) {
    this.teacher = teacher;
}
Workshop.prototype.ask = function (question) {
    console.log(this.teacher, question);
}
var deepJS = new Workshop("Kyle");//Creating an object from constructor function
var reactJS = new Workshop("Suzy");
var yo = new Workshop("Martin");

deepJS.ask("Is 'protoype' a class?"); //Kyle Is 'protoype' a class?
reactJS.ask("Is 'protoype' ugly?");//Suzy Isnt't 'prototype' ugly?
yo.ask("hey");