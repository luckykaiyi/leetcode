var reverseStr = function(s, k) {
  var output = '';
  var times = Math.floor(s.length / (2 * k));
  for (var i = 0; i < times; i++){
    var n = 2 * k * i;
    for (var j = k - 1 + n; j >= n; j--) {
      output += s[j];
    }
    for (var j = k + n; j < 2 * k + n; j++) {
      output += s[j];
    }
  }
  var left = s.length - 2 * k * times;
  if (left < k) {
    for (var i = s.length - 1; i >= s.length - left; i--) {
      output += s[i];
    }
  } else {
    for (var i = s.length - left + k - 1; i >= s.length - left; i--) {
      output += s[i];
    }
    for (var i = s.length - left + k; i < s.length; i++) {
      output += s[i];
    }
  }
  return output;
}
var s = 'abcdefg';
var k = 2;
console.log(reverseStr(s, k));
