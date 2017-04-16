var isBalanced = function(root) {
  if(!root) {
    return true;
  }
  if(!checkBalanced(root)) {
    return false;
  }
  if(!isBalanced(root.left)) {
    return false;
  }
  if(!isBalanced(root.right)) {
    return false;
  }
  return true;
}
var checkBalanced = function(root) {
  var diff = Math.abs(maxDepth(root.left) - maxDepth(root.right));
  if(diff > 1) {
    return false;
  }
  return true;
}
var maxDepth = function(root) {
  if(!root) {
    return 0;
  }
  var maxLeft = maxDepth(root.left);
  var maxRight = maxDepth(root.right);
  return Math.max(maxLeft, maxRight) + 1;
}
var root1 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}
var root2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  },
  right: null
}
console.log(isBalanced(root1));
console.log(isBalanced(root2));
