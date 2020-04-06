// Intermediate Algorithm Scripting: Spinal Tap CasePassed
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// function spinalCase(str) {
//   let lower = str.toLowerCase()
//   let noUnderScores = lower.replace(/_/g, "-")
//   let split = noUnderScores.split(/\W/ || "_")
//   let filtered = split.filter(i => {
//     if (i === "allthe"){
//       split.splice(i,1)
//       split.unshift("the")
//       split.unshift("all")
//     }
//   })
//     return split.join("-")
// }

// function spinalCase(str) {
//   var regex = /\s+|_+/g;
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//   return str.replace(regex, "-").toLowerCase();
// }

// function spinalCase(str){
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2")
//   return str
//   .toLowerCase()
//   .split(/(?:_| )/g)
//   .join("-")
// }

// function spinalCase(str) {
//   // "It's such a fine line between stupid, and clever."
//   // --David St. Hubbins

//   return str
//     .split(/\s|_|(?=[A-Z])/)
//     .join("-")
//     .toLowerCase();
// }

const spinalCase = (str) => {
  return str
  .split(/\s|_|(?=[A-Z])/)
  .join("-")
  .toLowerCase()
}

console.log(spinalCase("thisIsSpinalTap"))
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(
spinalCase("AllThe-small Things"))
console.log(spinalCase("Teletubbies say Eh-oh"))
