// Intermediate Algorithm Scripting: Sum All Numbers in a RangePassed
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
//
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
// function sumAll(arr) {
// total = 0
// let start = Math.min(arr[0], arr[1])
// let end = Math.max(arr[0], arr[1])

//   for (let i = start; i <= end; i++){
//     total+=i
//   }
//   return total
// }

// const sumAll = arr => {
//   const start = arr[0];
//   const end = arr[1];
//   const count = Math.abs(start - end) + 1;
//   const sum = ((start + end) * count) / 2
//   return sum
// }

// function sumAll(arr) {
//   var sum = 0;
//   for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
//     sum += i;
//   }
//   return sum;
// }

// function sumAll([ first, last ] ) {
//  const step = first - last < 0 ? 1 : -1;
//  return first !== last
//    ? first + sumAll([ first + step, last ])
//    : first;
// }
// function sumAll([ first , last ] ) {
//   const step = first - last < 0 ? 1 : -1
//   return first !== last
//     ? first + sumAll([first + step, last]) : first
// }

function sumAll( [ first , last] ) {
  const step = first - last < 0 ? 1 : -1;
  return first !== last
    ? first + sumAll([first + step, last]) :
    first
}

console.log(sumAll([1, 4]));
//1+2+3+4 = 10
console.log(sumAll([3,6]))
//3+4+5+6 = 18
console.log(sumAll([4,1]))
//1+2+3+4 = 10
console.log(sumAll([10,5]))
//5+6+7+8+9+10 = 45
