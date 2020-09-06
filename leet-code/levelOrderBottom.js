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
var levelOrderBottom = function (root) {
  const arr = [] // 栈
  const result = [] // 放结果
  arr.push(root)
  while (arr.length > 0) {
    const tempArr = []
    const levelSize = arr.length
    for (let i = 0; i < levelSize; i++) {
      const temp = arr.shift()
      tempArr.push(temp.val)
      if (temp.left != null) {
        arr.push(temp.left)
      }
      if (temp.right != null) {
        arr.push(temp.right)
      }
    }
    result.unshift(tempArr)
  }
  return result
}

const root = {
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
}

console.log(levelOrderBottom(root))
