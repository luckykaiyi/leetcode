/*
var isSymmetric = function(root) {
  if(!root || root && !root.left && !root.right) {
    return true;
  }
  if(root.left) {
    reverse(root.left);
    return compare(root.left, root.right);
  }
  return false; 
}
var reverse = function(root) {
  if(!root.left && !root.right) {
    return;
  }
  var tmp = root.left;
  root.left = root.right;
  root.right = tmp;
  if(root.left) {
    reverse(root.left)
  }
  if(root.right) {
    reverse(root.right);
  }
}
var compare = function(root1, root2) {
  if(!root1 && !root2) {
    return true;
  }
  if((root1 && !root2) || (!root1 && root2)) {
    return false;
  }
  if(root1.left || root2.left) {
    if(!compare(root1.left, root2.left)) {
      return false;
    }
  } 
  if(root1.val !=  root2.val) {
    return false;
  }
  if(root1.right || root2.right) {
    if(!compare(root1.right, root2.right)) {
      return false;
    };
  }
  return true;
}
*/
var isSymmetric = function(root) {
  if(!root) {
    return true;
  }
  return compare(root.left, root.right);
}
var compare = function(root1, root2) {
  if(!root1 && !root2) {
    return true;
  }
  if(root1 && root2) {
    if(root1.val == root2.val && compare(root1.left, root2.right) && compare(root1.right, root2.left)) {
      return true;
    }
  }
  return false;
};
//var compare = function(root1, root2) {
  //if(!root1 && !root2) {
    //return true;
  //}
  //if((root1 && !root2) || (!root1 && root2)) {
    //return false;
  //}
  //if(!compare(root1.left, root2.right)) {
    //return false;
  //}
  //if(root1.val != root2.val) {
    //return false;
  //}
  //if(!compare(root1.right, root2.left)) {
    //return false;
  //}
  //return true;
//}
var root1 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  }
}
var root2 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: null
    }
  }
}
var root3 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: null
}
console.log(isSymmetric(root1));
console.log(isSymmetric(root2));
console.log(isSymmetric(root3));
