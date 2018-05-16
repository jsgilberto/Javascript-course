// Every function invocation creates a different execution context
// so every "vay myVar;" declaration is a new variable.

// It means that every function has his own execution context.

function b() {
	var myVar;
    console.log(myVar);
}

function a() {
	var myVar = 2;
    console.log(myVar);
	b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);
