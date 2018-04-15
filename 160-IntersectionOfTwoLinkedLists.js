//var getIntersectionNode = function(headA, headB) {
  //var node = headA;
  //var arr = [];
  //while(node) {
    //arr.push(node);
    //node = node.next;
  //}
  //node = headB;
  //while(node) {
    //if(arr.indexOf(node) != -1) {
      //return node;
    //}
    //node = node.next  
  //}
  //return null;
//};
//

// ref.1
var getIntersectionNode1 = function(headA, headB) {
  var n1 = headA;
  var n2 = headB;
  var len1 = len2 = 0;
  while(n1) {
    n1 = n1.next;
    len1++;
  }
  while(n2) {
    n2 = n2.next;
    len2++;
  }
  n1 = headA;
  n2 = headB;
  for(var i = 0; i < Math.abs(len1 - len2); i++) {
    len1 > len2 ? (n1 = n1.next) : (n2 = n2.next);
  }
  while(n1 != n2) {
    n1 = n1.next;
    n2 = n2.next;
  }
  return n1;
};

// ref.2
var getIntersectionNode2 = function(headA, headB) {
  if(!headA || !headB) return null;
  var n1 = headA;
  var n2 = headB;
  while(n1 != n2) {
    n1 = n1 == null ? headB : n1.next;
    n2 = n2 == null ? headA : n2.next;
  }
  return n1;
};
var node = {
  val: 3,
  next: null
}
var headA = {
  val: 1,
  next: {
    val: 2,
    next: node
  }
};
var headB = {
  val: 10,
  next: {
    val: 9,
    next: {
      val: 8,
      next: node
    }
  }
};

console.log(getIntersectionNode2(headA, headB));
