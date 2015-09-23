var lowestCommonAncestor = function(root, p, q) {
    var x = Math.min(p.val, q.val);
    var y = Math.max(p.val, q.val);
    if (x <= root.val && root.val <= y ) {
        return root;
    }
    if (root.val < x) {
        return lowestCommonAncestor(root.right, p, q);
    }
    if (y < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
}
var root = {
    val: 6,
    left: {
        val: 2,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: {
                val: 3,
                left: null,
                right: null
            },
            right: {
                val: 5,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 8,
        left: {
            val: 7,
            left: null,
            right: null,
        },
        right: {
            val: 9,
            left: null,
            right: null
        }
    }
}
var p = {
    val: 9
}
var q = {
    val: 5
}
var result = lowestCommonAncestor(root, p, q);
console.log(result);
