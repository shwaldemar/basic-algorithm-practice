// Intermediate Algorithm Scripting: Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// function sumPrimes(num) {
//   var res = 0;

//   // Function to get the primes up to max in an array
//   function getPrimes(max) {
//     var sieve = [];
//     var i;
//     var j;
//     var primes = [];
//     for (i = 2; i <= max; ++i) {
//       if (!sieve[i]) {
//         // i has not been marked -- it is prime
//         primes.push(i);
//         for (j = i << 1; j <= max; j += i) {
//           sieve[j] = true;
//         }
//       }
//     }

//     return primes;
//   }

//   // Add the primes
//   var primes = getPrimes(num);
//   for (var p = 0; p < primes.length; p++) {
//     res += primes[p];
//   }

//   return res;
// }


function sumPrimes(n){
  function getPrimes(max){
    let sieve = []
    let i,j;
    let primes = []
    for (i = 2; i <= max; i++){
      if (!sieve[i]){
        primes.push(i)
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true
        }
      }
    }
    return primes.reduce((a,b)=>a+b)
  }
  let primes = getPrimes(n)
  return primes
}
console.log(sumPrimes(10)) //should return 17
console.log(sumPrimes(977)) //should return 73156
