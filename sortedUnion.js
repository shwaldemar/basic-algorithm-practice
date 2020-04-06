// Intermediate Algorithm Scripting: Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

//first try get unique from 2 not sure how to extend to other arrays
// function uniteUnique(arr) {
//  arr = [...arguments]
//  unique = []

//   function extractUnique(arr1, arr2){
//     let filtered = arr1.filter(i => {
//       return !arr2.includes(i)
//     })
//     return filtered
//   }
// }

//console.log(extractUnique([1, 3, 2], [5, 2, 1, 4]))

// function uniteUnique(arr){
//   let result = []
//   for (let i in arguments) {
//     //console.log(arguments[i])
//     for (let j in arguments[i]){
//       //console.log(arguments[i][j])
//       if (result.indexOf(arguments[i][j]) < 0){
//         result.push(arguments[i][j])
//       }
//     }
//   }
//   return result
// }

function uniteUnique(arr){
  let result = []
  for (let i in arguments){
    for (let j in arguments[i]){
      //console.log(arguments[i][j])
      if (result.indexOf(arguments[i][j] < 0)){
        result.push(arguments[i][j])
      }
    }
    return result
  }
}
// function uniteUnique(arr) {
//   var args = [...arguments];
//   var result = [];
//   for (var i = 0; i < args.length; i++) {
//     for (var j = 0; j < args[i].length; j++) {
//       if (!result.includes(args[i][j])) {
//         result.push(args[i][j]);
//       }
//     }
//   }
//   return result;
// }

// function uniteUnique(arr){
//   let result = []
//   let args = [...arguments]
//   for (let i in args){
//     for (let j in args[i]){
//       if (!result.includes(args[i][j])){
//         result.push(args[i][j])
//       }
//     }
//   }
//   return result
// }

// function uniteUnique(arr){
//   let args = Array.prototype.slice.call(arguments)
//   let newArr = args.reduce(function(arr1,arr2){
//     return arr1.concat(arr2.filter(i => {
//       return !arr1.includes(i)
//     }))
//   })
//   return newArr
// }

// function uniteUnique(arr){
//   let uniqueArray = [];
//   let concatArray = [];
//   let i = 0;
//   while (arguments[i]){
//     concatArray = concatArray.concat(arguments[i]);
//     i++;
//   }
//   uniqueArray = concatArray.filter(function(item, index){
//     return concatArray.indexOf(item) === index
//   })
//   return uniqueArray
// }


// function uniteUnique(...arrays) {
//   //make an array out of the given arrays and flatten it (using the spread operator)
//   const flatArray = [].concat(...arrays);

//   // create a Set which clears any duplicates since it's a regulat set and not a multiset
//   return [...new Set(flatArray)];
// }

// function uniteUnique(...arr){
//   let flat = [].concat(...arr)
//   let uniq = [new Set(flat)]
//   return uniq
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
//should return [1, 3, 2, 5, 4].
//console.log(uniteUnique([1, 2, 3], [5, 2, 1]))
//should return [1, 2, 3, 5].
//console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
//should return [1, 2, 3, 5, 4, 6, 7, 8].
