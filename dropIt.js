// Intermediate Algorithm Scripting: Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

// function dropElements(arr, func){
//   for (let i = 0; i < arr.length; i++){
//     if (func(arr[0])){
//       break
//     }
//     else {
//       arr.shift()
//     }
//   }
//   return arr
// }

// function dropElements(arr, func) {
//   return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
// }

// function dropElements(arr, func) {
//   while (arr.length > 0 && !func(arr[0])) {
//     arr.shift();
//   }
//   return arr;
// }

// function dropElements(arr, func){
//   while (arr.length > 0 && !func(arr[0])){
//     arr.shift()
//   }
//   return arr
// }

// function dropElements(arr, func, i = 0) {
//   return i < arr.length && !func(arr[i])
//     ? (dropElements(arr.slice(i + 1), func, i))
//     : arr;
// }

function dropElements(arr, func, i = 0){
  return i < arr.length && !func(arr[i]) ? (dropElements(arr.slice(i+1), func, i)) : arr
}




console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) )
//should return [3, 4].
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))
//should return [1, 0, 1].
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}))
//should return [1, 2, 3].
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))
//should return [].
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})
)
//should return [7, 4].
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))
//should return [3, 9, 2].
