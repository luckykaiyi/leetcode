var findMode = function(root) {
  if(!root) {
    return [];
  }
  var arr = [];
  var obj = {};
  var result = [];
  loop(root, arr);
  for(var i = 0; i < arr.length; i++) {
    if(!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  var count = 1;
  for(var i in obj) {
    var v = obj[i]; 
    if(v >= count) {
      if(v > count) {
        result.length = 0;
        count = v;
      }
      result.push(Number(i));
    }
  }
  return result;
}
function loop(root, arr) {
  if(root.left) {
    loop(root.left, arr)
  }
  arr.push(root.val);
  if(root.right) {
    loop(root.right, arr)
  }
}
var root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 2,
      left: null,
      right: null
    }
  }
}
console.log(findMode(root))
