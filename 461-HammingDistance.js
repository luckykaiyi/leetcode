var hammingDistance = function(x, y) {
  var x_b = toBinary(x);
  var y_b = toBinary(y);
  var len_diff = Math.abs(x_b.length - y_b.length);
  if(len_diff) {
    if(x_b.length > y_b.length) {
      y_b = format(y_b, len_diff) 
    } else {
      x_b = format(x_b, len_diff) 
    }
  }
  var len = x_b.length;
  var count = 0;
  for(var i = 0; i < len; i++) {
    if(x_b[i] != y_b[i]) {
      count++;
    }
  }
  return count;
};
var format = function(n, len_diff) {
  for(var i = 0; i < len_diff; i++) {
    n = '0' + n;
  }
  return n;
};
var toBinary = function(n) {
  if(!n) {
    return '0';
  }
  var binary = '';
  while(n) {
    binary = (n % 2).toString() + binary;
    n = Math.floor(n / 2);
  }
  return binary;
};
/*
var toBinary = function(n) {
  var binary = 0;
  var i = 0;
  while(n) {
    binary = (n % 2) * Math.pow(10, i) + binary;
    n = Math.floor(n / 2);
    i++;
  }
  return binary;
}
*/
console.log(hammingDistance(1577962638,1727613287));
