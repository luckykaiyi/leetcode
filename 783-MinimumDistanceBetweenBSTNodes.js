var minDiffInBST = function (root) {
  if(!root || (root && !root.left && !root.right)) return Number.POSITIVE_INFINITY;
  var min = Number.POSITIVE_INFINITY;
  if(root.left) {
    min = Math.min(min, minDiffInBST(root.left), root.val - getRightVal(root.left));
  }
  if(root.right) {
    min = Math.min(min, minDiffInBST(root.right), getLeftVal(root.right) - root.val);
  }
  return min;
};
function getRightVal(node) {
  var p = node;
  while(p.right) {
    p = p.right;
  }
  return p.val;
}
function getLeftVal(node) {
  var p = node;
  while(p.left) {
    p = p.left;
  }
  return p.val;
}
var root = {
  val: 32,
  left: {
    val: 30
  },
  right: {
    val: 54,
    left: {
      val: 48
    },
    right: {
      val: 78
    }
  }
}
console.log(minDiffInBST(root));
