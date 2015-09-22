var isSameTree = function(p, q) {
    if (p == null && q == null) {
        return true;
    }
    if (p != null && q != null) {
        if (p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
            return true;
        }
    }
    return false;
}

var p = {
    val: 1,
    left: {
        val: 1,
        left: {
            val: 1,
            left: null,
            right: {
                val: 1,
                left: null,
                right: null
            }
        },
        right: {
            val: 1,
            left: null,
            right: null
        }
    },
    right: {
        val: 1,
        left: null,
        right: null
    }
}
var q  = {
    val: 1,
    left: {
        val: 1,
        left: {
            val: 1,
            left: null,
            right: {
                val: 1,
                left: null,
                right: null
            }
        },
        right: {
            val: 1,
            left: null,
            right: null
        }
    },
    right: {
        val: 1,
        left: null,
        right: null
    }
}
var result = isSameTree(p,q);
console.log(result);
