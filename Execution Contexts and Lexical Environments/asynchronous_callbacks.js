/** 
  * Asynchronous means one or more at a time
  * How does JavaScript handle asynchronous callbacks
  * when it's synchronous
**/ 

/**
  * Every event happening in the browser is queued
  * The event queue isn't handled until the execution stack
  * is empty.
  * Or in other terms, until the function calls are finished.
  * 
  * It means JavaScript code isn't really asynchronous.
  * It runs code line by line.
  * It's just the way JavaScript handles the code; with
  * queues and stacks (queues for events and stacks for functions)
**/
var events = require('events');
var eventEmitter = new events.EventEmitter();


//long running function
function waitThreeSeconds(){
  var ms = 3000 + new Date().getTime();
  while(new Date() < ms){}
  console.log("finished waitThreeSeconds() function");
}

function clickHandler(){
  console.log("click event");
}

// Assign the event handler to an event:
eventEmitter.on("click", clickHandler);

waitThreeSeconds();
// Fire the click event!
eventEmitter.emit("click");
console.log("finished execution");