/**
	* Callback functions is a function that is passed to another function
	* as a parameter, and the callback function is executed inside the 
other function
**/

function sayHiLater() {
	
	var greeting = 'Hi!';
	
	// setTimeout takes a function as first argument
	// and it gets executed after the given milliseconds
	setTimeout(function() {
		// this anonymous function has access to its outer environment
		// thanks to the closure, it has access to the variable greeting
		console.log(greeting);
	}, 1000);

}

sayHiLater();

function tellMeWhenDone(callback) {
	var a = 1000;
	var b = 2000;

	callback();
}

tellMeWhenDone(function(){
	console.log("You are done");
});
