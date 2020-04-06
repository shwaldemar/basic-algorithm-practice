// Intermediate Algorithm Scripting: Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

let Person = function(firstAndLast){
  this.getFullName = function(){
    return firstAndLast
  }
  this.getFirstName = function(){
    return firstAndLast.split(" ")[0]
  }
  this.getLastName = function(){
    return firstAndLast.split(" ")[firstAndLast.split(" ").length-1]
  }
  this.setFullName = function(name){
    return firstAndLast = name
  }
  this.setFirstName = function(name){
    return firstAndLast = `${(firstAndLast.split(" ")[0] = name)} ${firstAndLast.split(" ")[1]}`
  }
  this.setLastName = function(name){
    return firstAndLast = `${firstAndLast.split(" ")[0]} ${(firstAndLast.split(" ")[1] = name)}`
  }
}

var bob = new Person('Bob Ross');

console.log(bob.getFullName())
console.log(bob.getFirstName())
console.log(bob.getLastName())
console.log(bob.setFullName("Bertie Bacharat"))
console.log(bob.getFullName())
console.log(bob.setFirstName("Archie"))
console.log(bob.setLastName("Unicorn"))
console.log(bob.getFullName())
