// The next 3 lines of code return false
// which means that is something does not exist,
// boolean returns false
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));

var a;
// goes to internet and looks for a value

// the next if statement coerces 'a' to a Boolean
// if 'a' is undefined or null or an empty string, it's going
// to return false.
if(a) {
  console.log("a exists");
}
else {
  console.log("a doesn't exist");
}