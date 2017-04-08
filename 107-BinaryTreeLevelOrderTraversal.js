var levelOrderBottom = function(root) {
  if(!root) {
    return [];
  }
  var result = [];
  var tmpArr = [];
  var arr = [];
  arr.push({level: 0, node: root});
  while(arr.length) {
    var obj = arr.shift();
    tmpArr.push(obj);
    var level = obj.level + 1;
    if(obj.node.left != null) {
      arr.push({level: level, node: obj.node.left})
    }
    if(obj.node.right != null) {
      arr.push({level: level, node: obj.node.right});
    }
  }
  for(var i = 0; i < tmpArr.length; i++) {
    var index = tmpArr[i].level;
    var val = tmpArr[i].node.val;
    if(result[index]) {
      result[index].push(val);
    } else {
      result[index] = [val];
    }
  }
  return result.reverse();
}
var root = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}
console.log(levelOrderBottom(root));
