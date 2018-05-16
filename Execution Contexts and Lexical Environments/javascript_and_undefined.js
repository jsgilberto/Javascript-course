
var a; // if this line is commented, the next statement returns an error: object is not defined
// but if leave the line above uncommented, the next statement returns 'undefined'
// isn't 'not defined' and 'undefined' the same?
// No. 
console.log(a);

// Never set a variable to undefined
// a = undefined;

if (a === undefined){
  console.log("a is undefined");
}
else {
  console.log("a is defined");
}

// 'undefined' is a JavaScript value.
// In JavaScript, undefined means a variable has been declared but has 
// not yet been assigned a value.