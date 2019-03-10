/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(function(i) {
    return Math.pow(i, 2);
  }).sort(function(a, b) {
    return a - b;
  })   
};
