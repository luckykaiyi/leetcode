var findComplement = function(num) {
  var tmp = '';
  var s = toBinary(num);
  var start = false;
  for(var i = 0; i < s.length; i++) {
    tmp += s[i] == '0' ? '1' : '0';
  }
  var complement = toDecimal(tmp);
  return complement;
};
var toBinary = function(n) {
  if(!n) {
    return '0';
  }
  var binary = '';
  var i = 0;
  while(n) {
    binary = n % 2 + binary;
    n = Math.floor(n / 2);
    i++
  }
  return binary;
};
/*
var toDecimal = function(n) {
  var decimal = 0;
  var i = 0;
  while(n) {
    decimal = (n % 10) * Math.pow(2, i) + decimal;
    n = Math.floor(n / 10);
    i++
  }
  return decimal;
};
*/
var toDecimal = function(s) {
  var decimal = 0;
  for(var i = 0; i < s.length; i++) {
    decimal += s[i] * Math.pow(2, s.length - 1 - i);
  }
  return decimal;
}
console.log(findComplement(5))
