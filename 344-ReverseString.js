var reverseString = function(s) {
  var output = '';
  for (var i = s.length - 1; i >= 0; i--) {
    output += s[i];
  }
  return output;
}
var input = 'hello';
console.log(reverseString(input));
