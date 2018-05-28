var findSecondMinimumValue = function(root) {
  if(!root || !root.left || !root.right) return -1;
  var min = root.val;
  var minSecLeft = (root.left.val == root.val && root.left.left && root.left.right) ? findSecondMinimumValue(root.left) : root.left.val;
  var minSecRight = (root.right.val == root.val && root.right.left && root.right.right) ? findSecondMinimumValue(root.right) : root.right.val;
  console.log(root,minSecLeft, minSecRight);
  var minSec = -1;
  if(minSecLeft != -1 && minSecLeft != min) minSec = minSecLeft;
  if(minSecRight != -1 && minSecRight != min ) {
    if(minSecLeft != -1 && minSecLeft != min) {
      minSec = Math.min(minSecLeft, minSecRight);
    } else {
      minSec = minSecRight;
    }
  }
  return minSec;
};

// ref. simplified
var findSecondMinimumValue = function(root) {
  if(!root || !root.left || !root.right) return -1;
  var left = root.left.val;
  var right = root.right.val;
  if(left == root.val) {
    left = findSecondMinimumValue(root.left);
  }
  if(right == root.val) {
    right = findSecondMinimumValue(root.right);
  }
  if(left != -1 && right != -1) {
    return Math.min(left, right);
  } else if (left == -1) {
    return right;
  } else {
    return left;
  }
};

