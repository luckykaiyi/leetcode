var repeatedStringMatch = function(A, B) {
  var count = 1;
  var str = A;
  while(str.length <= B.length && str != B) {
    str += A;
    count ++;
  }
  if(str.indexOf(B) == -1) {
    if((str + A).indexOf(B) == -1) {
      return -1;
    } else {
      return ++count;
    }
  } else {
    return count;
  }
};
