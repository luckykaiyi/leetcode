var findTilt = function(root) {
  if(!root) {
    return 0;
  }
  setSumValue(root);
  return getSumTilt(root);
}
var getSumTilt = function(node) {
  var sum = 0;
  if(node.left) {
    sum += getSumTilt(node.left);
  }
  if(node.right) {
    sum += getSumTilt(node.right);
  }
  sum += getNodeTilt(node);
  return sum;
}
var getNodeTilt = function(node) {
  var leftSumValue = 0;
  var rightSumValue = 0;
  if(node.left) {
    leftSumValue = node.left.sum;
  } 
  if(node.right) {
    rightSumValue = node.right.sum;
  }
  var tilt = Math.abs(leftSumValue - rightSumValue);
  return tilt;
}
var setSumValue = function(node) {
  var sum = 0;
  if(node.left) {
    setSumValue(node.left);
    sum += node.left.sum;
  }
  if(node.right) {
    setSumValue(node.right);
    sum += node.right.sum;
  }
  sum += node.val;
  node.sum = sum;
}
var root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}
var test = findTilt(root)
console.log(test)

