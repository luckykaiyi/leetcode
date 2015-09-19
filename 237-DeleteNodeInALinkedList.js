var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}

//测试用例
var node = {
    val:1,
    next:{
        val:2,
        next: {
            val:3,
            next:{
                val:4,
                next: null
            }
        }
    }
}
//预期结果
var result = {
    val:1,
    next:{
        val:2,
        next: {
            val:4,
            next: null
        }
    }
}
//运行
deleteNode(node.next.next);
console.log(node);
