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
var getMinimumDifference = function (root) {
  let pre = -Number.MAX_SAFE_INTEGER
  let ans = Number.MAX_SAFE_INTEGER

  let dfs = function (root) {
    if (root == null) {
      return null
    }
    dfs(root.left)
    ans = Math.min(root.val - pre, ans)
    pre = root.val
    dfs(root.right)
  }
  dfs(root)
  return ans
}
