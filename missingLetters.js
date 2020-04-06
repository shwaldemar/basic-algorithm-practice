// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Hint 1
// You will need to convert from character to ASCII code using the two methods provided in the description.

// Hint 2
// You will have to check for the difference in ASCII code as they are in order. Using a chart would be very helpful.

// Hint 3
// You will need to figure out where the missing letter is, along with handling the case that there is not missing letter as it needs an specific return value.

// function fearNotLetter(str) {
//   for (var i = 0; i < str.length; i++) {
//     /* code of current character */
//     var code = str.charCodeAt(i);

//     /* if code of current character is not equal to first character + no of iteration
//         hence character has been escaped */
//     if (code !== str.charCodeAt(0) + i) {
//       /* if current character has escaped one character find previous char and return */
//       return String.fromCharCode(code - 1);
//     }
//   }
//   return undefined;
// }

// function fearNotLetter(str){
//   let compare = str.charCodeAt(0)
//   let missing = ""
//   str.split("").map(function(letter, index){
//     if (str.charCodeAt(index) === compare){
//       //console.log(str.charCodeAt(index),String.fromCharCode(compare))
//       compare++
//     } else {
//       missing = String.fromCharCode(compare)
//       //console.log(compare, missing)
//     }
//   })
//   return missing
// }

// function fearNotLetter(str) {
//   for (let i = 1; i < str.length; ++i) {
//     if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
//       return String.fromCharCode(str.charCodeAt(i - 1) + 1);
//     }
//   }
// }

function fearNotLetter(str){
  for (let i in str){
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      //console.log(str.charCodeAt(i),str.charCodeAt(i-1))
      return String.fromCharCode(str.charCodeAt(i-1)+1)
    }
  }
}
fearNotLetter("abcg");
