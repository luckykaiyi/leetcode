/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  var n = A.length / 2;
  var obj = {};
  for(var i = 0; i < A.length; i++) {
    obj[A[i]] = obj[A[i]] ? obj[A[i]] + 1 : 1;
    if(obj[A[i]] == n) {
      return A[i];
    }
  }
};
