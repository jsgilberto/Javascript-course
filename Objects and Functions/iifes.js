/**
 * Immediately Invoked Functions Expressions (IIFEs)
 * 
 */

 //function statement
 function greet(name) {
   console.log("Hello " + name);
 }
 greet("Joe");

 // using a function expression
 var greetFunc = function(name){
   console.log("Hello " + name);
 };
 greetFunc("Joe");

 // using an Immediately Invoked Function Expression (IIFE)
 var greeting = function(name){
   return "Hello " + name;
 }("Joe");

 // greeting stores the value returned by the function object
 console.log(greeting);

 //valid javascript expressions
 3;
 "I'm a string";
 {
   name: "Joe"
 };

 // The javascript engine expects an expression when you use the
 // grouping operator ().
 // It's used to trick the syntax parser
(function(name){
  var greeting = "(inside iife) Hello";
  console.log(greeting + " " + name);
}("John")); //IIFE