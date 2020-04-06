// Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

// function truthCheck(collection, pre) {
//   // Create a counter to check how many are true.
//   var counter = 0;
//   // Check for each object
//   for (var c in collection) {
//     // If it is has property and value is truthy
//     if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
//       counter++;
//     }
//   }
//   // Outside the loop, check to see if we got true for all of them and return true or false
//   return counter == collection.length;
// }

// function truthCheck(collection, pre) {
//   let counter = 0;
//   for (let i in collection){
//     if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])){
//       counter++
//     }
//   }
//   return counter ===  collection.length
// }

// function truthCheck(collection, pre){
//   let counter = 0
//   for (let i in collection){
//     if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])){
//       counter++
//     }
//   }
//   return counter === collection.length
// }


// function truthCheck(collection, pre) {
//   return collection.every(function(element) {
//     return element.hasOwnProperty(pre) && Boolean(element[pre]);
//   });
// }

function truthCheck(collection, pre){
  return collection.every(obj => obj[pre])
}
console.log(truthCheck(
  [{"user": "Tinky-Winky", "sex": "male"},
{"user": "Dipsy", "sex": "male"},
{"user": "Laa-Laa", "sex": "female"},
{"user": "Po", "sex": "female"}]

, "sex"));
//1should return true.

console.log(truthCheck(
  [{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"},
  {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}]

  , "sex"))
//2should return false.
console.log(truthCheck(
  [{"user": "Tinky-Winky", "sex": "male", "age": 0},
  {"user": "Dipsy", "sex": "male", "age": 3},
  {"user": "Laa-Laa", "sex": "female","age": 5},
  {"user": "Po", "sex": "female", "age": 4}]

  , "age"))
//3should return false.
console.log(truthCheck(
  [{"name": "Pete", "onBoat": true},
  {"name": "Repeat", "onBoat": true},
  {"name": "FastForward", "onBoat": null}]

  , "onBoat") )
//4should return false
console.log(truthCheck(
  [{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"},
  {"name": "FastForward", "onBoat": true}]

  , "onBoat"))
//5should return true
console.log(truthCheck([{"single": "yes"}]

, "single") )
//6should return true
console.log(truthCheck([{"single": ""},
{"single": "double"}]

, "single"))
//7should return false
console.log(truthCheck(
  [{"single": "double"},
  {"single": undefined}]

  , "single"))
//8should return false

console.log(truthCheck(
  [{"single": "double"},
  {"single": NaN}]

  , "single") )
//9should return false
