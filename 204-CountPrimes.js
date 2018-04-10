// Time Exceed
// var countPrimes = function(n) {
//   if(memory[n]) {
//     return memory[n];
//   } else {
//     var result = 0;
//     if(n > 1) {
//       result = countPrimes(n - 1) + (isPrime(n - 1) ? 1 : 0);
//     }
//     memory[n] = result;
//     return result;
//   }
// };
// var isPrime = function(n) {
//   if(n <= 1) return false; 
//   for(var i = 2; i < n; i ++) {
//     if(n % i == 0) {
//       return false;
//     }
//   }
//   return true;
// };
// var memory = {};

//ref.
var countPrimes = function(n) {
  var count = 0;
  var notPrimes = new Array(n).fill(false);
  for(var i = 2; i < n; i++) {
    if(!notPrimes[i]) {
      count++;
      for(var j = 2; i * j < n; j++) {
        notPrimes[i * j] = true;
      }
    }
  }
  return count;
}