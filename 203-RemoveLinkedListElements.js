/**
 *  * Definition for singly-linked list.
 *   * function ListNode(val) {
 *    *     this.val = val;
 *     *     this.next = null;
 *      * }
 *       */
/**
 *  * @param {ListNode} head
 *   * @param {number} val
 *    * @return {ListNode}
 *     */
var removeElements = function(head, val) {
  if(!head) {
    return null;
  } 
  if(head.val == val) {
    head = removeElements(head.next, val);
  } else {
    head.next = removeElements(head.next, val);   
  }      
  return head;
};
