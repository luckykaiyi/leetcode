var letterCasePermutation = function(S) {
  if(!S.length) return [""];
  var arr = letterCasePermutation(S.slice(1));
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    if(/\d/.test(S[0])) {
      result.push(S[0] + arr[i]);
    } else {
      result.push(S[0].toLowerCase() + arr[i], S[0].toUpperCase() + arr[i]);
    }
  }
  return result;
};
