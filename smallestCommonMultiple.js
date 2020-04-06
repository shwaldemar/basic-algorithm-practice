// Intermediate Algorithm Scripting: Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// function smallestCommons(arr){
//   arr = arr.sort((a,b)=>b-a);
//   console.log("arr:", arr);
//   let range = [];
//   for (let i = arr[0]; i >= arr[1]; i--){
//     range.push(i)
//   }
//   console.log("range:", range)

//   let loop = 1;
//   let quot = 0;
//   let n;

//   do {
//     quot = range[0] * loop * range[1]
//     for (n = 2; n < range.length; n++){
//       if (quot % range[n] !== 0){
//         break
//       }
//     }
//     loop++
//   } while (n !== range.length){
//     return console.log("quot:", quot)
//   }
// }


// function smallestCommons(arr) {
//   var range = [];
//   for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
//     range.push(i);
//   }

//   // can use reduce() in place of this block
//   var lcm = range[0];
//   for (i = 1; i < range.length; i++) {
//     var GCD = gcd(lcm, range[i]);
//     lcm = (lcm * range[i]) / GCD;
//   }
//   return lcm;

//   function gcd(x, y) {
//     // Implements the Euclidean Algorithm
//     if (y === 0) return x;
//     else return gcd(y, x % y);
//   }
// }

// function smallestCommons(arr){
//   let range = [];
//   for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i --){
//     range.push(i);
//   }
//   console.log("range:", range);
//   let lcm = range[0];//highest in range
//   for (let i = 1; i < range.length; i++){
//     let GCD = gcd(lcm, range[i]);
//     lcm = (lcm * range[i]) / GCD;
//     //
//   }
//   return lcm;

//   function gcd(x,y) {
//     if (y === 0) return x;
//     else return gcd(y, x % y)
//   }
// }

// function smallestCommons(arr) {
//   const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
//   const lcm = (a, b) => (a * b) / gcd(a, b);
//   let [min, max] = arr.sort((a, b) => a - b);
//   let currentLCM = min;
//   while (min < max) {
//     currentLCM = lcm(currentLCM, ++min);
//   }
//   return currentLCM;
// }


// const smallestCommons = arr => {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   // Initially the solution is assigned to the highest value of the array
//   let sol = max;

//   for (let i = max - 1; i >= min; i--) {
//     // Each time the solution checks (i.e. sol%i===0) it won't be necessary
//     // to increment 'max' to our solution and restart the loop
//     if (sol % i) {
//       sol += max;
//       i = max;
//     }
//   }
//   return sol;
// };

// test here

// function smallestCommons(arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   let sol = max;
//   for (let i = max -1; i >= min; i--){
//     if (sol % i) {
//       sol += max
//       i = max
//     }
//   }
//   return sol
// }

function smallestCommons(arr){
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  let sol = max
  for (let i = max -1; i >= min; i--){
    if (sol % i){
      sol+=max
      i = max
    }
  }
  return sol
}


console.log(smallestCommons([1, 5]))
//should return a number 60.
console.log(smallestCommons([2, 10]))
//should return 2520.
console.log(smallestCommons([1, 13]))
//should return 360360.
console.log(smallestCommons([23, 18]) )
//should return 6056820.
