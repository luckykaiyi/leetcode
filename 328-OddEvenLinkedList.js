function ListNode(val) {
    this.val = val;
    this.next = null;
}
var oddEvenList = function(head) {
    var a1 = new ListNode(null);
    var a2 = new ListNode(null);
    var list1 = a1;
    var list2 = a2;
    var i = 1;
    while (head) {
        if (i % 2 !== 0) {
            a1.next = head;
            a1 = a1.next;
        } else {
            a2.next = head;
            a2 = a2.next;
        }
        head = head.next;
        i++;
    }
    a1.next = list2.next;
    a2.next = null;
    return list1.next;
}
var test = {
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:{
                val:4,
                next:{
                    val:5,
                    next:null
                }
            }
        }
    }
}
function print(q) {
    while(q) {
        console.log(q.val);
        q = q.next;
    } 
}
var t = oddEvenList(test);
print(t);
