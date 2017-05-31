var checkRecord = function(s) {
  var obj = {};
  for(var i = 0; i < s.length; i++) {
    if(!obj[s[i]]) {
      obj[s[i]] = {
        cnt: 1,
        index: i
      }
    } else {
      if(s[i] == 'L' && i > obj[s[i]].index + 1) {
        obj[s[i]].cnt = 1;
      } else {
        obj[s[i]].cnt++;
      }
      obj[s[i]].index = i;
    }
    if(obj['A'] && obj['A'].cnt > 1) {
      return false;
    }
    if(obj['L'] && obj['L'].cnt > 2) {
      return false;
    }
  }
  return true;
};
var input1 = 'PPALLP';
var input2 = 'PPALLL';
console.log(checkRecord(input2));
