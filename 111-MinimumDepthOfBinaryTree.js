/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 *       
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(!root) return 0;
  var minLeft = minDepth(root.left);
  var minRight = minDepth(root.right);
  if(minLeft && minRight) {
    var minLeaf = Math.min(minLeft, minRight);
  } else {
    var minLeaf = minLeft || minRight || 0;
  }
  return minLeaf + 1;
};
var t1 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null
  }
}
var t2 = {
  val: 2,
  left: {
    val: 3,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null,
    }
  }
}
console.log(minDepth(t1));
console.log(minDepth(t2));

