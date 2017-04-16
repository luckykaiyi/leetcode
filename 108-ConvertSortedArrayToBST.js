function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var sortedArrayToBST = function(nums) {
  var len = nums.length;
  if(!len) {
    return null;
  }
  var index = len % 2 == 0 ? (len / 2 - 1) : ((len + 1) / 2 - 1);
  var root = new TreeNode(nums[index]);
  if(index - 1 >= 0) {
    root.left = sortedArrayToBST(nums.slice(0, index));
  } 
  if(index + 1 <= len - 1) {
    root.right = sortedArrayToBST(nums.slice(index + 1));
  }
  return root;
}
var nums = [1, 2, 3, 4, 5];
console.log(sortedArrayToBST(nums));

