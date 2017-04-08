/*var getMinimumDifference = function(root) {
  var arr = [];
  loop(root, arr);
  console.log(arr)
  arr.sort(function(a, b){
    return a - b;
  });
  console.log(arr)
  var min = Math.abs(arr[1] - arr[0]);
  for(var i = 2; i < arr.length; i++) {
    var diff = Math.abs(arr[i] - arr[i - 1]);
    if(diff < min) {
      min = diff;
    }
  }
  return min;
}

function loop(root, arr) {
  if(root.left != null) {
    loop(root.left, arr);
  }
  arr.push(root.val);
  if(root.right != null) {
    loop(root.right, arr);
  }
}
*/
var root = {
  val: 678,
  left: {
    val: 67,
    left: null,
    right: {
      val: 633,
      left: null,
      right: null
    }
  },
  right: {
    val: 853,
    left: null,
    right: {
      val: 989,
      left: null,
      right: null
    }
  }
}
/*
var getMinimumDifference = function(root) {
  var min;
  if(root.left != null) {
    min = getMinimumDifference(root.left);
  }
  if (getDiff(root) != null && (getDiff(root) < min || !min)) {
    min = getDiff(root);
  }
  if(root.right != null) {
    if (getMinimumDifference(root.right) < min) {
      min = getMinimumDifference(root.right);
    }
  }
  return min;
}
*/
var getMinimumDifference = function(root) {
  var min = Number.POSITIVE_INFINITY;
  min = getDiff(root);
  if(root.left != null) {
    var tmp = getMinimumDifference(root.left);
    min = Math.min(min, tmp);
  }
  if(root.right != null) {
    var tmp = getMinimumDifference(root.right);
    min = Math.min(min, tmp);
  }
  return min;
}
function getDiff(root) {
  var diff = Number.POSITIVE_INFINITY;
  if(root.left != null) {
    diff = Math.abs(root.val - getRight(root.left));
  }
  if(root.right != null) {
    var tmp = Math.abs(root.val - getLeft(root.right));
    diff = Math.min(diff, tmp);
  }
  return diff;
}
function getRight(root) {
  if(root.right != null) {
    return getRight(root.right);
  }
  return root.val;
}
function getLeft(root) {
  if(root.left != null) {
    return getLeft(root.left);
  }
  return root.val;
}

var test = getMinimumDifference(root);
console.log(test)
