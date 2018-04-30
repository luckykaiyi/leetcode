var convertBST = function(root) {
  if(!root) return root;
  if(root.right) {
    root.right = convertBST(root.right);
    var rightMin = getLeft(root.right).val;
  }
  root.val += root.right ? rightMin : 0;
  if(root.left) {
    getRight(root.left).val += root.val;
    root.left = convertBST(root.left);
  }
  return root;
};
var getLeft = function(node) {
  var left = node;
  while(left.left) {
    var left = left.left;
  }
  return left;
};
var getRight = function(node) {
  var right = node;
  while(right.right) {
    var right = right.right;
  }
  return right;
};
