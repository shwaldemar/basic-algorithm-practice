// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// function sumFibs(num) {
//   var prevNumber = 0;
//   var currNumber = 1;
//   var result = 0;
//   while (currNumber <= num) {
//     if (currNumber % 2 !== 0) {
//       result += currNumber;
//     }

//     currNumber += prevNumber;
//     prevNumber = currNumber - prevNumber;
//   }

//   return result;
// }

// function sumFibs(n){
//   let prev = 0
//   let cur = 1
//   let result = 0
//   while (cur <= n){
//     if (cur % 2 !==0){
//       result += cur
//     }
//     cur += prev
//     prev = cur - prev
//   }
//   return result
// }

// function sumFibs(num) {
//   // Perform checks for the validity of the input
//   if (num < 0) return -1;
//   if (num === 0 || num === 1) return 1;
//   // Create an array of fib numbers till num
//   const arrFib = [1, 1];
//   let nextFib = 0;
//   // We put the new Fibonacci numbers to the front so we
//   // don't need to calculate the length of the array on each
//   // iteration
//   while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
//     arrFib.unshift(nextFib);
//   }
//   // We filter the array to get the odd numbers and reduce them to get their sum.
//   return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
// }


// function sumFibs(n){
//   if (n < 0) return -1
//   if (n === 0 || n === 1) return 1
//   const arrFib = [1,1]
//   let nextFib = 0
//   while ((nextFib = arrFib[0] +arrFib[1])<= n){
//     arrFib.unshift(nextFib)
//   }
//   return arrFib.filter(x => x %2 !==0).reduce((a,b) => a+b)
// }

// function sumFibs(n){
//   if (n < 0) return -1
//   if (n === 0 || n === 1) return 1
//   const arrFib = [1,1]
//   let nextFib = 0
//   while ((nextFib = arrFib[0] + arrFib[1]) <= n) {
//     arrFib.unshift(nextFib)
//   }
//   return arrFib.filter(x => x % 2 !== 0).reduce((a,b)=>a+b)
// }

function sumFibs(n){
  if (n < 0) return -1
  if (n === 0 || n === 1) return 1
  const arrFib =[1,1]
  let nextFib = 0
  while((nextFib = arrFib[0] + arrFib[1])<=n){
    arrFib.unshift(nextFib)
  }
  return arrFib.filter(x => x % 2 !== 0).reduce((a,b)=> a+b)
}

console.log(sumFibs(1)) //should return a number.
console.log(sumFibs(1000)) //should return 1785.
console.log(sumFibs(4000000)) //should return 4613732.
console.log(sumFibs(4)) //should return 5.
console.log(sumFibs(75024)) //should return 60696.
console.log(sumFibs(75025)) //should return 135721.
