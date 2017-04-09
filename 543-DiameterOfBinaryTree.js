var diameterOfBinaryTree = function(root) {
  if(!root) {
    return 0;
  }
  var diameter = getDiameter(root);
  if(root.left) {
    var left = diameterOfBinaryTree(root.left);
    diameter = Math.max(diameter, left);
  }
  if(root.right) {
    var right = diameterOfBinaryTree(root.right);
    diameter = Math.max(diameter, right);
  }
  return diameter;
}
var getDiameter = function(root) {
  var x = getMaxDepth(root.left);
  var y = getMaxDepth(root.right);
  return x + y;
}
var getMaxDepth = function(root) {
  if(!root) {
    return 0;
  } else {
    var x = getMaxDepth(root.left);
    var y = getMaxDepth(root.right);
    return Math.max(x, y) + 1;
  }
}
var root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
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
console.log(diameterOfBinaryTree(root))
