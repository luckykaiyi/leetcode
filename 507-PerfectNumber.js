var checkPerfectNumber = function(num) {
  if(!num) return false;
  var sum = 0;
  var val = num;
  for(var i = 1; i < val; i++) {
    if(num % i == 0) {
      val = num / i;
      sum += i + (i == 1 ? 0 : val);
    }
  }
  return sum == num;
};
