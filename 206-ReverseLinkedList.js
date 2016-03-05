var reverseList = function(head) {
    var a = null;
    var b;
    while(head) {
        b = a;
        a = head;
        head = head.next;
        a.next = b;
    }
    return a;
};
