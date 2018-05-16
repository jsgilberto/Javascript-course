
b();
console.log(a); //returns undefined even if 'a' is declared after

var a = "Hello World!";

function b(){
  console.log("Called b!");
}


/**
 * b();
 * console.log(a);
 *
**/

/**
 * The JavaScript Engine takes care of reserving and storing in Memory
 * all the variables and objects you 'declare' in your program; that's called
 * Hoisting.
 * When the Hoisting is done, the JavaScript Engine doesn't know what value
 * is going to end up in every object, until the code is executed.
 * That's why we end up printing in console 'undefined", because all variables
 * are set to undefined before the code executes.
 * 
 * So it's always better to define an object before it's used.
 */