/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (root == null) {
    return []
  }
  const res = []
  const queue = [root]
  let level = 0
  while (queue.length > 0) {
    const size = queue.length
    const tempRes = []
    for (let i = 0; i < size; i++) {
      const temp = queue[i]
      tempRes.push(temp.val)
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }
    if (level & 1) {
      tempRes.reverse()
    }
    queue.splice(0, size)
    level++
    res.push(tempRes)
  }
  return res
}
