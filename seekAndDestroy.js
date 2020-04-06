// Intermediate Algorithm Scripting: Seek and DestroyPassed
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
//
// Note
// You have to use the arguments object.

// function destroyer(arr) {
//   let list = arguments[0]
//   let test = [...arguments].slice(1,arguments.length)
//   let filtered = list.filter(i => {
//     return test.indexOf(i) === -1
//   })
//   return filtered;
// }


// function destroyer(arr) {
//   var args = Array.prototype.slice.call(arguments);

//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < args.length; j++) {
//       if (arr[i] === args[j]) {
//         delete arr[i];
//       }
//     }
//   }
//   return arr.filter(Boolean);
// }

// function destroyer(arr){
//   let args = Array.prototype.slice.call(arguments);
//   for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < args.length; j++){
//       if (arr[i] === args[j]){
//         delete arr[i]
//       }
//     }
//   }
//   return arr.filter(Boolean)
// }

// function destroyer(arr) {
//   var args = Array.from(arguments).slice(1);
//   return arr.filter(function(val) {
//     return !args.includes(val);
//   });
// }

// function destroyer(arr){
//   let args = Array.from(arguments).slice(1)
//   return arr.filter(i => {
//     return !args.includes(i)
//   })
// }


// const destroyer = (arr, ...valsToRemove) => arr.filter(elem => !valsToRemove.includes(elem));

function destroyer(arr, ...removing){
  return arr.filter(bit => {
    return !removing.includes(bit)
  })
}


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
