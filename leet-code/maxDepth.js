/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 后序遍历
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  return oderTree(root)
}

function oderTree (node) {
  if (node == null) {
    return 0
  }
  return Math.max(oderTree(node.left), oderTree(node.right)) + 1
}

/**
 * 层序遍历
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root == null) {
    return 0
  }
  return sequenceOrderTree(root)
}

function sequenceOrderTree (node) {
  let count = 0
  let queue = []
  queue.push(node)
  while (queue.length > 0) {
    let levelSize = queue.length
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift()
      if (node.left != null) {
        queue.push(node.left)
      }
      if (node.right != null) {
        queue.push(node.right)
      }
    }
    count++
  }
  return count
}

console.log(maxDepth({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}))