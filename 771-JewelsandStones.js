/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  var obj = {};
  var count = 0;
  J.split('').forEach(function(k) { 
    obj[k] = 1;
  })
  S.split('').forEach(function(k) {
    if(k in obj) {
      count++;
    }
  })
  return count;      
};
