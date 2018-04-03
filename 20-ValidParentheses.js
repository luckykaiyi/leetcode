// ref.
var isValid = function(s) {
  var charList = {
    '(' : ')',
    '{' : '}',
    '[' : ']' 
  }
  var arr = [];
  if(!s.length || s.length % 2) {
    return false;
  } else {
    for(var i = 0; i < s.length; i++) {
      if(charList[s[i]]) {
        arr.push(charList[s[i]]);
      } else if(!arr.length || arr.pop() != s[i]) {
        return false;
      }
    }
    return arr.length == 0;
  }
};
console.log('()', isValid('()'));
console.log('()[]{}', isValid('()[]{}'));
console.log('([)]', isValid('([)]'));
console.log('([])', isValid('([])'));