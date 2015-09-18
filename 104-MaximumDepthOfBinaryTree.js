/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }     
*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == null) {
        return 0;
    } else {
        var x = maxDepth (root.left);
        var y = maxDepth (root.right);
        return Math.max(x, y) + 1;
    }
}

