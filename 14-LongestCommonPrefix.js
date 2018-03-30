var longestCommonPrefix = function(strs) {
  var str = strs[0] || '';
  var result = '';
  for(var i = 0; i < str.length; i++) {
    for(var j = 1; j < strs.length; j++) {
      if(strs[j][i] == str[i]) continue;
      break;
    }
    if(j == strs.length) {
      result += str[i];
    } else {
      return result;
    }
  }
  return result;
}
var strs1 = [''];
var strs2 = ['hello123', 'helo1111'];
var strs3 = ['hahaha'];
console.log(longestCommonPrefix(strs1));
console.log(longestCommonPrefix(strs2));
console.log(longestCommonPrefix(strs3));