function ListNode(val) {
    this.val = val;
    this.next = null;
}
var deleteDuplicates = function(head) {
    var node = head;
    while(head && head.next) {
        if(head.val == head.next.val) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }
    return node;
}
var test = {
    val:1,
    next:{
        val:1,
        next:{
            val:1,
            next:{
                val:3,
                next:{
                    val:3,
                    next:null
                }
            }
        }
    }
}
var r = deleteDuplicates(test);
console.log(r);
