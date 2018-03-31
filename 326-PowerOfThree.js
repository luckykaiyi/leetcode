// var isPowerOfThree = function(n) {
//   if(n == 1) return true;
//   if(n == 0) return false;
//   if(n % 3) return false;
//   return isPowerOfThree(Math.floor(n / 3));
// };
var isPowerOfThree = function(n) {
  if(map[n] !== undefined) {
    return map[n];
  } else {
    var value = false;
    if(n % 3 == 0) {
      value = isPowerOfThree(Math.floor(n / 3));
    }
    map[n] = value;
    return value;
  }
};
var map = {
  0: false,
  1: true
};
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(1));
console.log(isPowerOfThree(27));
