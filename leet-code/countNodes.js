/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  const queue = [root]
  let res = 0
  while (queue.length > 0) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const temp = queue.shift()
      res++
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }
  }
  return res
}
