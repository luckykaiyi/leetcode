/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *    this.val = val;
 *    this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

// 0
function rangeSumBST(root, l, r) {
  if(!root) return 0;
  if(root.val >= l && root.val <=r) {
    var left = root.left && rangeSumBST(root.left, l, getRight(root.left)) || 0;
    var right = root.right && rangeSumBST(root.right, getLeft(root.right), r) || 0;
    return root.val + left + right;
  } else if(root.val < l) {
    return rangeSumBST(root.right, l, r)
  } else if(root.val > r) {
    return rangeSumBST(root.left, l, r)
  }
}
function getLeft(root) {
  var o = root;
  while(o.left) {
    o = o.left;
  }
  return o.val;
}
function getRight(root) {
  var o = root;
  while(o.right) {
    o = o.right;
  }
  return o.val;
}

// 1
function rangeSumBST(root, l, r) {
  if(!root) return 0;
  if(root.val >= l && root.val <=r) {
    return root.val + rangeSumBST(root.left, l, r) + rangeSumBST(root.right, l, r);
  } else if(root.val < l) {
    return rangeSumBST(root.right, l, r)
  } else if(root.val > r) {
    return rangeSumBST(root.left, l, r)
  }
}

// 2
function rangeSumBST(root, l, r) {
  var sum = 0;
  function getSum(root, l, r) {
    if(root != null) {
      if(root.val >= l && root.val <= r) {
        sum += root.val;
      }
      if(root.val > l) {
        getSum(root.left, l, r);
      }
      if(root.val < r) {
        getSum(root.right, l, r);
      }
    }
  } 
  getSum(root, l, r);
  return sum;
}

// 3
function rangeSumBST(root, l, r) {
  var sum = 0;
  sum = getSum(root, l, r, sum);
  return sum;
}
function getSum(root, l, r, sum) {
  if(root != null) {
    if(root.val >= l && root.val <= r) {
      sum += root.val;
    }
    if(root.val > l) {
      sum = getSum(root.left, l, r, sum);
    }
    if(root.val < r) {
      sum = getSum(root.right, l, r, sum);
    }
  }
  return sum;
}

