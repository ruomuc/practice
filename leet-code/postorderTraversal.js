/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let res = []
  if (root == null) {
    return res
  }
  let fn = function (root) {
    if (root.left) {
      fn(root.left)
    }
    if (root.right) {
      fn(root.right)
    }
    res.push(root.val)
  }
  fn(root)
  return res
}
