/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归，深度优先遍历
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0
  let dfs = function (curr, str = '') {
    if (curr == null) {
      return 0
    }
    if (curr.left == null && curr.right == null) {
      return (sum += Number(str + curr.val))
    }
    dfs(curr.left, str + curr.val)
    dfs(curr.right, str + curr.val)
  }
  dfs(root)
  return sum
}

console.log(sumNumbers({ val: 1, left: { val: 2 }, right: { val: 3 } }))

/**
 * 队列，广度优先遍历
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers2 = function (root) {
  let queueNode = []
  let queueVal = []
  let sum = 0

  queueNode.push(root)
  queueVal.push(root.val)

  while (queueNode.length != 0) {
    let tempNode = queueNode.shift()
    let tempVal = queueVal.shift()
    console.log(tempNode, tempVal)

    if (tempNode.left == null && tempNode.right == null) {
      sum += tempVal
      return
    }

    if (tempNode.left) {
      queueNode.push(tempNode.left)
      queueVal.push(Number(tempVal + tempNode.left.val))
    }
    if (tempNode.right) {
      queueNode.push(tempNode.right)
      queueVal.push(Number(tempVal + tempNode.right.val))
    }
  }
  return sum
}
console.log(sumNumbers2({ val: 1, left: { val: 2 }, right: { val: 3 } }))
