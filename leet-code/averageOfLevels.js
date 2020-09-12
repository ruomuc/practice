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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let queue = []
  let result = []
  queue.push(root)
  while (queue.length > 0) {
    let levelSize = queue.length
    let tempVal = 0
    for (let i = 0; i < levelSize; i++) {
      // 出栈
      let tempNode = queue.shift()
      tempVal += tempNode.val
      if (tempNode.left != null) {
        queue.push(tempNode.left)
      }
      if (tempNode.right != null) {
        queue.push(tempNode.right)
      }
    }
    result.push(tempVal/levelSize)
  }
  return result
}
