/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  if (root == null) {
    return null
  }
  var sum = 0
  function sub (root) {
    if (root == null) {
      return null
    }
    sub(root.right)
    sum += root.val
    root.val = sum
    sub(root.left)
    return root
  }
  return sub(root)
}

var tree = {
  val: 2,
  left: { val: 1, left: null, right: null },
  right: { val: 3, left: null, right: null }
}

console.log(convertBST(tree))
