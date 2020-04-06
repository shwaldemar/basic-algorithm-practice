// Intermediate Algorithm Scripting: Search and ReplacePassed
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//
// First argument is the sentence to perform the search and replace on.
//
// Second argument is the word that you will be replacing (before).
//
// Third argument is what you will be replacing the second argument with (after).
//
// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

// function myReplace(str, before, after) {
//   let upper = /[A-Z]/
//   let lower = /[a-z]/
//   if (before[0].match(upper)){
//     after = after[0].toUpperCase() + after.slice(1,after.length)
//   }
//   else if (before[0].match(lower)){
//     after = after[0].toLowerCase() + after.slice(1,after.length)
//   }
//   let array = str.split(" ")
//   let target = array.indexOf(before)
//   array.splice(target, 1, after).join("")
//   return array.join(" ")
// }

// function myReplace(str, before, after){
//   let index = str.indexOf(before);
//   if (str[index] === str[index].toUpperCase()){
//     after = after.charAt(0).toUpperCase() + after.slice(1)
//   }
//   str = str.replace(before, after)
//   return str
// }

const myReplace = (str, before, after) => {
  if (/^[A-Z]/.test(before)){
    after[0].toUpperCase() + after.substr(1)
  } else {
    after[0].toLowerCase() + after.substr(1)
  }
  return str.replace(before, after)
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// A quick brown fox leaped over the lazy dog
console.log(myReplace("Let us go to the store", "store", "mall"))
// "Let us go to the mall".
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
//"He is Sitting on the couch".
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"))
//"This has a spelling error".
console.log(myReplace("His name is Tom", "Tom", "john"))
//"His name is John".
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"))
//"Let us get back to more Algorithms".
