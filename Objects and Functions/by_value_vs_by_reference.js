/**
 * By Value vs. By Reference
 * 
 */

// By value (primitives)
var a = 3;
var b;

// A copy of the value of 'a' is created in memory
// so 'a' points to 3, and 'b' points to a copy of 3.
b = a;

// If we change the value of 'a', be will still be 3.
a = 2;

console.log(a);
console.log(b);

// By reference (objects (including functions))
// c points the an object
var c = {greeting: 'hi'};
var d;

// 'd' points to the same object 'c' is pointing to
d = c;

// If we mutate 'c'
c.greeting = "hello";

// We can see that 'd' is affected too, it's because 'c' and 'd' are pointing
// to the same object in memory
console.log(c);
console.log(d);

// By reference (even as parameters)
function changeGreeting(obj){
  obj.greeting = "Hola"; //mutate
}

// Passing an object as parameter to a function it is still passed as reference
changeGreeting(d);

console.log(c);
console.log(d);

// The equals operator sets up new memory space (new address)
c = {greeting: "howdy"};

console.log(c);
console.log(d);