var mySqrt = function(x) {
  for(var i = 0; i <= x; i++) {
    if(i * i == x) return i;
    if(i * i > x) return i - 1;
  }
};

//ref.
var mySqrt = function(x) {
  if(x == 0) return 0;
  var left = 1; 
  var right = x;
  while(left <= right) {
    var mid = left + parseInt((right - left) / 2);
    if(mid == x / mid) {
      return mid;
    } else if (mid > x / mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};

