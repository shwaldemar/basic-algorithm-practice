// Intermediate Algorithm Scripting: DNA PairingPassed
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//
// Return the provided character as the first element in each array.
//
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// function pairElement(str) {
//   let result = []
//   function search(char){
//     switch(char){
//       case "C":
//       result.push(["C","G"]);
//       break;
//       case "G":
//       result.push(["G", "C"]);
//       break;
//       case "A":
//       result.push(["A", "T"]);
//       break;
//       case "T":
//       result.push(["T", "A"]);
//       break;
//     }
//   }
//   for (let i in str){
//     search(str[i]);
//   }
//   return result;
// }


function pairElement(str){
  let pair = {
    C: "G",
    G: "C",
    A: "T",
    T: "A",
  }
  return str.split("").map(i => {
    return [i, pair[i]]
  })
}

console.log("GCG",pairElement("GCG"));
// [["G", "C"], ["C","G"],["G", "C"]]
console.log("ATCGA",pairElement("ATCGA"))
//[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log("TTGAG",pairElement("TTGAG") )
//[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log("CTCTA",pairElement("CTCTA"))
//[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
