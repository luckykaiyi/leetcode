var toLowerCase = function(str) {
  var diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
  return str
    .split('')
    .map(function(s) {
       return s >= 'A' && s <= 'Z' ? String.fromCharCode(s.charCodeAt(0) + diff) : s;
    })
    .join('');
}
console.log(toLowerCase('HaSfweSfesdAZsfsfeQER'));
