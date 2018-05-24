var repeatedSubstringPattern = function(s) {
  if(s.length <= 1) return false;
  var arr = [1];
  if(s.length == 4) {
    arr.push(2);
  } else {
    for(var i = 2; i <= Math.ceil(s.length / 4); i++) {
      if(s.length % i === 0) {
        arr.push(i);
        if(i != s.length / i) {
          arr.push(s.length / i);
        }
      }
    }
  }
  for(var i = 0; i < arr.length; i++) {
    var str = '';
    var substr = s.slice(0, arr[i]);
    for(var j = 0; j < s.length / arr[i]; j++) {
      str += substr;
    }
    if(str == s) return true;
  }
  return false;
};

// ref. simplified

var repeatedSubstringPattern = function(s) {    
  for(var i = parseInt(s.length / 2); i >= 1; i--) {
    if(s.length % i == 0) {
      var subStr = '';
      var str = s.slice(0, i);
      var len = s.length / i;
      for(var j = 0; j < len; j++) {
        subStr += str; 
      }
      if(subStr == s) return true;
    }
  }
  return false;
};
