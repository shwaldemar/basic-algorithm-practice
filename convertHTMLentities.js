// Intermediate Algorithm Scripting: Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// function convertHTML(str) {
//   letters = /([a-zA-Z])|\s/
//   return str.split("").map(i => {
//     if (i.match(letters)){
//       return i
//     }
//     else if (i === "&"){
//       return "&amp;"
//     }
//     else if (i === "<") {
//       return "&lt;"
//     }
//     else if (i === ">") {
//       return "&gt;"
//     }
//     else if (i === '"') {
//       return "&quot;"
//     }
//     else if (i === "'") {
//       return "&apos;"
//     }
//   }).join("")
// }

// function convertHTML(str){
//   let strArray = str.split("")
//   for (let i = 0; i < strArray.length; i++){
//     switch(strArray[i]){
//       case "&":
//       strArray[i] = "&amp;"
//       break
//       case "<":
//       strArray[i] = "&lt;"
//       break
//       case ">":
//       strArray[i] = "&gt;"
//       break
//       case "'":
//       strArray[i] = "&apos;"
//       break
//       case '"':
//       strArray[i] = "&quot;"
//       break
//     }
//   }
//   return strArray.join("")
// }

const convertHTML = (str) => {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot;"
  }
  return str
  .split("")
  .map(entity => htmlEntities[entity] || entity)
  .join("")
}


console.log(convertHTML("Dolce & Gabbana"));
// //should return Dolce &amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos"))
// //should return Hamburgers &lt; Pizza &lt; Tacos.
console.log(convertHTML("Sixty > twelve"))
// //should return Sixty &gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')) //should return Stuff in &quot;quotation marks&quot;.
console.log(convertHTML("Schindler's List"))
// //should return Schindler&apos;s List.
console.log(convertHTML("<>"))
//should return &lt;&gt;.
convertHTML("abc")
//should return abc.
