var strStr = function(haystack, needle) {
  if(!needle) return 0;
  if(needle.length > haystack.length) return -1;
  var index = -1;
  for(var i = 0; i < haystack.length - needle.length + 1; i++) {
    for(var j = 0; j < needle.length; j++) {
      if(needle[j] != haystack[i + j]) {
        break;
      } 
    }
    if(j == needle.length) {
      return i;
    }
  }
  return index;
};
var haystack = "hello";
var needle = "llo";
console.log(strStr(haystack, needle));