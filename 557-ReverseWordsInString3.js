var reverseWords = function(s) {
  var arr = s.split(' ');
  for(var i = 0; i < arr.length; i++) {
    arr[i] = reverseString(arr[i]);
  }
  var output = arr.join(' ');
  return output;
};
var reverseString = function(input) {
  var s = '';
  for(var i = input.length - 1; i >= 0; i--) {
    s += input[i];
  }
  return s;
};
var input = "Let's take LeetCode contest";
console.log(reverseWords(input));
