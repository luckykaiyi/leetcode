var isIsomorphic = function(s, t) {
  var obj1 = {};
  var obj2 = {};
  var s1 = s2 = '';
  for(var i = 0; i < s.length; i++) {
    obj1[s[i]] = t[i];
    obj2[t[i]] = s[i];
  }
  for(var i = 0; i < s.length; i++) {
    s1 += obj1[s[i]];
    s2 += obj2[t[i]];
  }
  console.log(obj1,obj2,s1,s2);
  return s1 == t && s2 == s;
}
console.log(test('eag', 'abd'));
