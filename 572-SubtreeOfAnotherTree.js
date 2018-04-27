var isSubtree = function(s, t) {
  getMaximumDepth(s);
  getMaximumDepth(t);
  return isSub(s, t);
};
var isSub = function(s, t) {
  if(!s) return false;
  if(s.depth == t.depth) {
    return isEqual(s, t);
  } else if(s.depth < t.depth) {
    return false;
  } else {
    return isSub(s.left, t) || isSub(s.right, t);
  }
};
var isEqual = function(s, t) {
  if(!s && !t) {
    return true;
  } else if(s && t) {
    if(s.val == t.val) {
      return isEqual(s.left, t.left) && isEqual(s.right, t.right);
    } else {
      return false;
    }
  } else {
    return false;
  }
};
var getMaximumDepth = function(node) {
  if(!node) return 0;
  var depth = Math.max(getMaximumDepth(node.left), getMaximumDepth(node.right)) + 1;
  node.depth = depth;
  return depth;
};