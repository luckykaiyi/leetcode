var mergeTrees = function(t1, t2) {
  if(!t1 && !t2) {
    return null;
  } else if (t1 && !t2) {
    return t1;
  } else if (t2 && !t1) {
    return t2;
  } else {
    var node = new TreeNode(t1.val + t2.val);
    node.left = mergeTrees(t1.left, t2.left);
    node.right = mergeTrees(t1.right, t2.right);
    return node;
  }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

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
console.log(mergeTrees(t1, t2));
