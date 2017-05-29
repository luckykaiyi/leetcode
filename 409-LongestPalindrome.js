var longestPalindrome = function(s) {
  var len = 0;
  var obj = {};
  for(var i = 0; i < s.length; i++) {
    if(!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
    }
  }
  for(var i in obj) {
    len += 2 * Math.floor(obj[i] / 2);
  }
  if(len < s.length) {
    len++;
  }
  return len;
};
var s = "abccccdd";
var result = longestPalindrome(s);
console.log(result);

