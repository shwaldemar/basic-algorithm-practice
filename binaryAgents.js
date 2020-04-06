// Intermediate Algorithm Scripting: Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

// function binaryAgent(str) {
//   var biString = str.split(" ");
//   var uniString = [];

//   /*using the radix (or base) parameter in parseInt, we can convert the binary
//       number to a decimal number while simultaneously converting to a char*/

//   for (var i = 0; i < biString.length; i++) {
//     uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
//   }

//   // we then simply join the string
//   return uniString.join("");
// }

// function binaryAgent(str){
//   let bi = str.split(" ")
//   let uni = []
//   for (let i in bi){
//     uni.push(String.fromCharCode(parseInt(bi[i], 2)))
//   }
//   return uni.join("")
// }

// function binaryAgent(str){
//   return str
//     .split(" ")
//     .map(function(i){
//       return String.fromCharCode(parseInt(i, 2))
//     }).join("")
// }

// function binaryAgent(str) {
//   return String.fromCharCode(
//     ...str.split(" ").map(function(char) {
//       return parseInt(char, 2);
//     })
//   );
// }

function binaryAgent(str){
  return String.fromCharCode(
    ...str.split(" ").map(function(i){return parseInt(i,2)})
  )
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") )
//should return "Aren't bonfires fun!?"
//binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")
//should return "I love FreeCodeCamp!"
