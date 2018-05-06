// 1
var isPalindrome = function(head) {
  var arr = [];
  while(head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr);
  for(var i = 0; i < Math.floor(arr.length / 2); i++) {
    if(arr[i] != arr[arr.length - 1 - i]) return false;
  }
  return true;
};
// 2
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var isPalindrome = function(head) {
  var node = null;
  var current = head;
  while(current) {
    var tmp = node;
    node = new ListNode(current.val);
    node.next = tmp;
    current = current.next;
  }
  while(node) {
    if(head.val != node.val) return false;
    node = node.next;
    head = head.next;
  }
  return true;
};
var head = {
  val: 2,
  next: {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: null
      }
    }
  }
}
console.log(isPalindrome(head));
