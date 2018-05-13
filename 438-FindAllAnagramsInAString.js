var findAnagrams = function(s, p) {
  var arr = [];
  if(s.length < p.length) return [];
  var obj = {};
  var map = {};
  for(var i = 0; i < p.length; i++) {
    obj[p[i]] = obj[p[i]] ? obj[p[i]] + 1 : 1;
  }
  for(var i = 0; i < s.length - p.length + 1; i++) {
    var a = s.slice(i, i + p.length);
    if(i == 0) {
      for(var j = 0; j < a.length; j++) {
        map[a[j]] = map[a[j]] ? map[a[j]] + 1 : 1;
      }
    } else {
      map[s[i - 1]]--;
      map[s[i + p.length - 1]] = map[s[i + p.length - 1]] ?  map[s[i + p.length - 1]] + 1 : 1;
    }
    if(compare(obj, map)) arr.push(i);
  }
  return arr;
};
function compare(a, b) {
  for(var i = 0; i < Object.keys(a).length; i++) {
    if(a[Object.keys(a)[i]] != b[Object.keys(a)[i]]) return false;
  }
  return true;
};
