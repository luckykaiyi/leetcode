var lengthOfLastWord = function(s) {
  var str = s.replace(/^\s+|\s+$/g, '');
  var arr = str.split(' ');
  if(str.length) {
    return arr[arr.length - 1].length;
  } else {
    return 0;
  }
};
console.log(lengthOfLastWord('   Happy     Every   Day  '));
