var judgeSquareSum = function(c) {
  var obj = {};
  var i = 0;
  while(i <= c) {
    if(i * i <= c) {
      obj[i] = 1;
    } else {
      break;
    }
    i++;
  }
  for(var k in obj) {
    if(obj[Math.pow(c - k * k, 0.5)]) {
      console.log(k, Math.pow(c - k * k, 0.5))
      return true;
    }
  }
  return false;
};

// ref. better 
var judgeSquareSum = function(c) {
  var left = 0; 
  var right = parseInt(Math.sqrt(c));
  while(left <= right) {
    var cur = left * left + right * right;
    if(cur < c) {
      left++;
    } else if(cur > c) {
      right--;
    } else {
      console.log(left, right)
      return true;
    }
  }
  return false;
};
