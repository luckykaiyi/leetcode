var canConstruct = function(ransomNote, magazine) {
  var obj = {};
  for(var i = 0; i < magazine.length; i++) {
    if(!obj[magazine[i]]) {
      obj[magazine[i]] = 1;
    } else {
      obj[magazine[i]]++;
    }
  }
  for(var i = 0; i < ransomNote.length; i++) {
    var k = ransomNote[i];
    if(!obj[k] || obj[k] < 0) {
      return false;
    } else {
      obj[k]--;
    }
  }
  return true;
}
var a = 'aa';
var b = 'ab';
console.log(canConstruct(a, b));
