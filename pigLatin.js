// Intermediate Algorithm Scripting: Pig Latin
// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// If a word does not contain a vowel, just add "ay" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// function translatePigLatin(str) {
//   let vowels = /[aeiou]/
//   str.split(/[aeiou]/)
//   if (str[0].match(vowels)){
//     return str + "way";
//   }
//   else if (!str.match(vowels)){
//     return str + "ay"
//   }
//   else {
//     let start = str.indexOf(str.match(vowels)[0])
//     return str.slice(start, str.length) + str.slice(str[0], start) + "ay"
//   }
// }

//starts with vowel add way to the end
//no vowels add ay to the end
//starts with consonant/s move consonant/s to end and add "ay"

// function translatePigLatin(str) {
//   let consonantRegex = /^[^aeiou]+/;
//   let myConsonants = str.match(consonantRegex);
//   return myConsonants !== null
//     ? str
//         .replace(consonantRegex, "")
//         .concat(myConsonants)
//         .concat("ay")
//     : str.concat("way");
// }

// function translatePigLatin(str){
//   let pigLatin = ""
//   let vowels = /[aeiou]/;
//   if (str[0].match(vowels)){
//     pigLatin = str + "WAY"
//   }
//   else if (str.match(vowels)===null){
//     pigLatin = str + "AY"
//   }
//   else {
//     let vowelIndex = str.indexOf(str.match(vowels))
//     pigLatin = str.substr(vowelIndex) + str.substr(0,vowelIndex) + "AY"
//   }
//   return pigLatin
// }

// function translatePigLatin(str) {
//   if (str.match(/^[aeiou]/)) return str + "way";

//   const consonantCluster = str.match(/^[^aeiou]+/)[0];
//   return str.substring(consonantCluster.length) + consonantCluster + "ay";
// }

// function translatePigLatin(str){
//   if (str[0].match(/^[aeiou]/)) return str + "way"

//   const consonantCluster = str.match(/^[^aeiou]/)[0]
//   return str.substring(consonantCluster.length) + consonantCluster + "ay"
// }

function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
//"aliforniacay"
console.log(translatePigLatin("glove"));
//"oveglay"
console.log(translatePigLatin("algorithm"));
//"algorithmway".
console.log(translatePigLatin("eight"));
//"eightway"
console.log(translatePigLatin("schwartz"));
//"artzschway"
console.log(translatePigLatin("rhythm"));
//"rhythmay"
