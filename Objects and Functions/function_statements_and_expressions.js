/**
 * Function statements and Function expressions
 * 
 * Expression: a unit of code that results in a value (it doesn't have to save to a variable)
 * 
 */

var a;
// Expression: 3 is returned as a value
a = 3;
// 3

// Expression: 3 is returned as a value
1 + 2;
// 3

// Expression: the equals operator returns a value (an object in this case)
a = {greeting: 'hi'};
// Object {greeting: 'hi'}

// Statement: no value is returned; the if is a statement, and inside has an expression.
if( a === 3 ){

}

// statements just does work, and expressions return values

// This is a function statement: this unit of code doesn't return a value, it's just saved in memory
function greet(){
  console.log("hi");
}

greet();

// This is a function expression: we are creating an object on the fly (it's in memory),
// and we are pointing a variable to the object in memory
// In this case, the function object doesn't have a name in its name property, it's an anonymous function
var anonymousGreet = function(){
  console.log("hi");
}

anonymousGreet();

function log(a){
  a();
}

log(function(){
  console.log("HEY");
});







