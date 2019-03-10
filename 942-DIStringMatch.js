/**
 * @param {string} S
 * @return {number[]}
 */
// ref.
var diStringMatch = function(S) {
  var arr = [];
  var l = 0;
  var r = S.length;
  for(var i = 0; i < S.length; i++) {
    if(S[i] == 'I') {
      arr[i] = l++;
    }
    if(S[i] == 'D') {
      arr[i] = r--;
    }
  }
  arr[S.length] = l;
  return arr;
};
