/**
	* Call, Apply and Bind
	* All functions in JavaScript has access to some other special methods
	* These special methods are call(), apply() and bind()
	* 
**/

var person = {
	firstname: "John",
	lastname: "Doe",
	getFullName: function() {
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}
};

var logName = function(lang1, lang2){

	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: '+ lang1 + ', ' + lang2);
	console.log("--------------");
};

// bind creates a copy of the function
// and sets the value for the 'this' keyword
// in this case, the this keyword will be pointing to the object 'person'
var logPersonName =  logName.bind(person)
logPersonName('en');

// the call method is the same as using parenthesis to call your function,
// but it can take an argument to set to what object should point the 'this' keyword
// and also you can pass the arguments to the function. So call executes the function normally.
logName.call(person, 'en', 'es');

// the apply method is the same as the call method, with only one difference,
// it expects an array of parameters
logName.apply(person, ['en', 'es']);

(function(lang1, lang2){

	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: '+ lang1 + ', ' + lang2);
	console.log("--------------");
}).apply(person, ['en', 'es'])


// So when are we going to use this methods?
// There's something called: Function borrowing
var person2 = {
	firstname: 'Jane',
	lastname: 'Joe'
};

// We borrow the function from the 'person' object and use it in the 'person2' object
console.log(person.getFullName.apply(person2));

// Function currying:
// Creating a copy of a function but with some preset parameters.
function multiply(a, b){
	return a*b;
}

// it sets the variable 'a' to a permanent value of 2
var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));