/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  return getAverage(root, 0, []);  
};
var getAverage = function(node, level, arr) {
  if(!node) return;
  arr[level] = arr[level] || {sum: 0, count: 0};
  arr[level].sum += node.val;
  arr[level].count += 1;
  getAverage(node.left, level + 1, arr);
  getAverage(node.right, level + 1, arr);
  return arr.map(function(item) {
    return item.sum / item.count;
  })
};
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
console.log(averageOfLevels(root));