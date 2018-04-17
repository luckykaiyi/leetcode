var isPerfectSquare = function(num) {
  for(var i = 1; i <= num; i++) {
    if(i * i == num) {
      return true;
    } else if ( i * i > num) {
      return false;
    }
  }
  return false;
};
