var wordPattern = function(pattern, str) {
  var arr = str.split(' ');
  var map1 = {};
  var map2 = {};
  if(arr.length != pattern.length) return false;
  for(var i = 0; i < pattern.length; i++) {
    if(!map1[pattern[i]]) {
      map1[pattern[i]] = arr[i]; 
    } else if (map1[pattern[i]] != arr[i]) {
      return false;
    }
    if(!map2[arr[i]]) {
      map2[arr[i]] = pattern[i];
    } else if (map2[arr[i]] != pattern[i]) {
      return false;
    }
  }
  return true;
};
