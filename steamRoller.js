// Intermediate Algorithm Scripting: Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

// function steamrollArray(arr) {
//   let flattenedArray = []

//   let flatten = function(arg) {
//     if (!Array.isArray(arg)){
//       flattenedArray.push(arg)
//     }
//     else {
//       for (let a in arg){
//         flatten(arg[a])
//       }
//     }
//   }
//   arr.forEach(flatten)
//   return flattenedArray
// }

// function steamrollArray(arr){
//   let flat = []
//   const flatten = function(arg){
//     if (!Array.isArray(arg)){
//       flat.push(arg)
//     }
//     else {
//       for (let i in arg){
//         flatten(arg[i])
//       }
//     }
//   }
//   arr.forEach(flatten)
//   return flat
// }

// function steamrollArray(arr) {
//   let flat = [].concat(...arr);
//   return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
// }

// function steamrollArray(arr) {
//   return arr
//     .toString()
//     .replace(",,", ",") // "1,2,,3" => "1,2,3"
//     .split(",") // ['1','2','3']
//     .map(function(v) {
//       if (v == "[object Object]") {
//         // bring back empty objects
//         return {};
//       } else if (isNaN(v)) {
//         // if not a number (string)
//         return v;
//       } else {
//         return parseInt(v); // if a number in a string, convert it
//       }
//     });
// }

// function steamrollArray(val,flatArr=[]) {
//   val.forEach(item => {
//     if (Array.isArray(item)) steamrollArray(item, flatArr);
//     else flatArr.push(item);
//   });
//   return flatArr;
// }

// function steamrollArray(arr, flatArr = []) {
//   const elem = arr.pop();
//   return elem
//     ? !Array.isArray(elem)
//       ? steamrollArray(arr, [elem, ...flatArr])
//       : steamrollArray(arr.concat(elem), flatArr)
//     : flatArr;
// }

function steamrollArray(arr, flatArr=[]){
  const elem = arr.pop()
  return elem
    ? !Array.isArray(elem)
      ?steamrollArray(arr, [elem, ...flatArr])
      : steamrollArray(arr.concat(elem), flatArr)
    : flatArr;
}



console.log(steamrollArray([[["a"]], [["b"]]]))
//should return ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]]))
//should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]]))
//should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]]))
//should return [1, {}, 3, 4].

// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
