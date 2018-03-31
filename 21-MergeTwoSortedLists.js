function ListNode(val) {
  this.val = val;
  this.next = null;
}
// 1
/*
var mergeTwoLists = function(l1, l2) {
  var arr = [];
  var result = null;
  while(l1) {
    arr.push(l1.val);
    l1 = l1.next;
  }
  while(l2) {
    arr.push(l2.val);
    l2 = l2.next;
  }
  arr.sort(function(a, b) {return b - a});
  if(arr.length) {
    result = new ListNode(arr[0]);
    for(var i = 1; i < arr.length; i++) {
      result.next = JSON.parse(JSON.stringify(result));
      result.val = arr[i];
    }
  }
  return result;
}
*/

// 2 利用递归
var mergeTwoLists = function(l1, l2) {
  if(!l1) return l2;
  if(!l2) return l1;
  if(l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
  }
}
var l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}
var l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}
console.log(mergeTwoLists(l1, l2));

