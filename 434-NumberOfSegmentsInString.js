// solution 1
var countSegments = function(s) {
  var count = 0;
  var arr = s.split(' ');
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].replace(/^\s+|\s+$/g, '') != '') {
      count++;
    }
  }
  return count;
};

// solution 2
var countSegments = function(s) {
  var count = 0;
  var flag = true;
  for(var i = 0; i < s.length; i++) {
    if(flag && (s[i] != ' ' )) {
      count++;
      flag = false;
    }
    if(!flag && (s[i] == ' ')) {
      flag = true;
    }
  }
  return count;
};
