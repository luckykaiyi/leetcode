var invertTree = function(root) {
    if (root == null) {
        return root;
    }
    if (root != null) {
        var a = root.left;
        var b = root.right;
        root.left = invertTree(b);
        root.right = invertTree(a);
        return root;
    }
}
var root = {
    val: 4,
    left: {
        val: 2,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 7,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 9,
            left: null,
            right: null
        }
    }
}
console.log(root);
invertTree(root);
console.log(root);
