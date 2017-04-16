var binaryTreePaths = function(root) {
  if(!root) {
    return [];
  }
  var leftPaths = binaryTreePaths(root.left);
  var rightPaths = binaryTreePaths(root.right);
  var paths = leftPaths.concat(rightPaths);
  if(!paths.length) {
    return [root.val.toString()]
  }
  for(var i = 0; i < paths.length; i++) {
    paths[i]  = root.val + '->' + paths[i];
  }
  return paths;
}
var root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}
console.log(binaryTreePaths(root))

