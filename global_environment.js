// Run this code with node
console.log("Hello world");
// The global object is equal to "this"
console.log(this, this === module.exports)

var a = "Hello world!";
this.a = "Hey";

function b(){

}
// You can attach objects to the global object!
console.log(this.a);
console.log(module.exports.a);
//In the browser every object is attached to the global object automatically