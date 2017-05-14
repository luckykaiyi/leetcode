var findContentChildren = function(g, s) {
  var result = 0; 
  g.sort(function(a, b) {
    return a - b;
  })
  s.sort(function(a, b) {
    return a - b;
  });
  var t = 0;
  for(var i = 0; i < g.length; i++) {
    for(var j = t; j < s.length; j++) {
      if(s[j] >= g[i]) {
        result++;
        //s.splice(j,1);
        t = j + 1;
        break;
      }
    }
  }
  return result;
};
//var findContentChildren = function(g, s) {
  //var result = 0; 
  //g.sort(function(a, b) {
    //return a - b;
  //});
  //s.sort(function(a, b) {
    //return a - b;
  //});
  //var cookiesList = {};
  //for(var i = 0; i < s.length; i++) {
    //if(s[i] >= g[0]) {
      //if(!cookiesList[s[i]]) {
        //cookiesList[s[i]] = 1;
      //} else {
        //cookiesList[s[i]]++; 
      //}
    //}
  //}
  //for(var i = 0; i < g.length; i++) {
    //for(var j in cookiesList) {
      //if(j >= g[i]) {
        //result++;
        //cookiesList[j]--;
        //if(cookiesList[j] == 0) {
          //delete cookiesList[j];
        //}
        //break;
      //}
    //}
  //}
  //return result;
//};
//var g = [1, 2];
//var s = [3, 2, 1];
var g = [14,5,8,12,4,78,333,12,3,2,5,8,234,87,999,1000,2,3];
var s = [100,23,45,12,789,7,5,23,45,6,1]; 
var result = findContentChildren(g, s);
console.log(result);
