var sumOfLeftLeaves = function(root) {
  var sum = 0;
  if(!root) {
    return sum;
  }
  if(root.left) {
    sum += sumOfLeftLeaves(root.left);
    if(!root.left.left && !root.left.right) {
      sum += root.left.val;
    }
  }
  if(root.right) {
    sum += sumOfLeftLeaves(root.right);
  }
  return sum;
}
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
console.log(sumOfLeftLeaves(root));

