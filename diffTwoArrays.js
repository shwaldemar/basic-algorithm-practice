// Intermediate Algorithm Scripting: Diff Two ArraysPassed
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
//
// Note
// You can return the array with its elements in any order.

// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter(item => !arr1.includes(item) || !arr2.includes(item));
// }

// function diffArray(arr1, arr2){
//   return arr1
//   .concat(arr2)
//   .filter(bit => !arr1.includes(bit) || !arr2.includes(bit))
// }

const diffArray = (arr1,arr2) => {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  function diff(a,b){
    return a.filter(bit => b.indexOf(bit)===-1);
  }
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//4
