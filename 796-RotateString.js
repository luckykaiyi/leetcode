var rotateString = function(A, B) {
  if(A.length != B.length) return false;
  for(var i = B.length - 1; i >= 0; i--) {
    if(B.slice(i) + B.slice(0,i) == A) return true;
  }
  return B.length == 0;
};
