// You can create an object in the 2 following ways:
// The first way is better

var Tony = {
  firstname: "Tony",
  lastname: "Alicea",
  address: {
    street: "111 Main St",
    city: "New York",
    state: "NY"
  }
};

/* 
person = new Object();
person.firstname = "Tony";
person.lastname = "Alicea"
console.log(person); */

function greet(person){
  console.log("Hi " + person.firstname);
}

greet(Tony);

//You can create an object on the fly
greet({
  firstname: "Mary",
  lastname: "Doe"
});

// You can add properties to an object (address2)
Tony.address2 = {
  street: "333 Second St."
};