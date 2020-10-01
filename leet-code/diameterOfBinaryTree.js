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
var diameterOfBinaryTree = function (root) {
  let ans = 0
  if (root == null) {
    return ans
  }

  let depth = function (root) {
    if (root == null) {
      return 0
    }
    let L = depth(node.left)
    let R = depth(node.right)
    ans = Math.max(ans, L + R + 1) // 左边深度+右边深度+父节点s
    return Math.max(L, R) + 1
  }

  depth(root)
  return ans - 1
}
