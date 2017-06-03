var reverseVowels = function(s) {
  var strArr = [];
  var orderArr = [];
  var valueArr = [];
  for(var i = 0; i < s.length; i++) {
    if(isVowel(s[i])) {
      orderArr.push(i)
      valueArr.unshift(s[i]);
    } 
    strArr.push(s[i]);
  }
  for(var i = 0; i < orderArr.length; i++) {
    strArr[orderArr[i]] = valueArr[i];
  }
  return strArr.join('');
};
var isVowel = function(l) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  if(vowels.indexOf(l) != -1) {
    return true;
  } else {
    return false;
  }
};
console.log(reverseVowels('aA'))
