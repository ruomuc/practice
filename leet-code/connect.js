/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root == null) {
    return null
  }
  let queue = []
  queue.push(root)
  while (queue.length > 0) {
    const levelSize = queue.length
    for (let i = 0; i < levelSize; i++) {
      const tempNode = queue[i]
      if (tempNode.left) {
        queue.push(tempNode.left)
      }
      if (tempNode.right) {
        queue.push(tempNode.right)
      }
      if (i === levelSize - 1) {
        tempNode.next = null
      } else {
        tempNode.next = queue[i + 1]
      }
    }
    queue = queue.slice(levelSize)
  }
  return root
}
