/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {
  let root = new TreeNode(pre[0])
  let dfs = function () {
    let mid = 1
  }
  dfs(pre.slice(1))
}
