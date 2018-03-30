/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/*solution*/
var hasCycle = function(head) {
  if(head == null || head.next == null) {
    return false;
  }
  var a = head;
  var b = head.next;
  while(a != b) {
    if(b == null || b.next == null) {
      return false;
    }
    a = a.next;
    b = b.next.next;
  }
  return true;
}
