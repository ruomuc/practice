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
var sumOfLeftLeaves = function (root) {
  let reverse = function (root) {
    let ans = 0

    if (root == null) {
      return ans
    }
    if (root.left) {
      ans += isLeafNode(root.left) ? root.left.val : reverse(root.left)
    }
    if (root.right && !isLeafNode(root.right)) {
      ans += reverse(root.right)
    }
    return ans
  }

  let isLeafNode = function (node) {
    return node.left == null && node.right == null
  }

  return reverse(root)
}
