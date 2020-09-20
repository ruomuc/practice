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
 * 前序遍历递归
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  if (t1 == null) {
    return t2
  }
  if (t2 == null) {
    return t1
  }
  t1.val += t2.val
  t1.left = mergeTrees(t1.left, t2.left)
  t1.right = mergeTrees(t1.right, t2.right)
  return t1
}

// 层序遍历法
var mergeTrees = function (t1, t2) {
  if (!t1 && !t2) {
    return null
  }
  if (t1 == null) {
    return t2
  }
  if (t2 == null) {
    return t1
  }
  let queue = []
  queue.push([t1, t2])
  while (queue.length > 0) {
    const node = queue.shift()
    node[0].val += node[1].val
    if (node[0].left || node[1].left) {
      if (!node[0].left) {
        node[0].left = new TreeNode(0)
      }
      if (!node[1].left) {
        node[1].left = new TreeNode(0)
      }
      queue.push([node[0].left, node[1].left])
    }

    if (node[0].right || node[1].right) {
      if (!node[0].right) {
        node[0].right = new TreeNode(0)
      }
      if (!node[1].right) {
        node[1].right = new TreeNode(0)
      }
      queue.push([node[0].right, node[1].right])
    }
  }
  return t1
}

var t1 = {
  val: 1,
  left: { val: 3, left: { val: 5, left: null, right: null }, right: null },
  right: { val: 2, left: null, right: null }
}

var t2 = {
  val: 2,
  left: { val: 1, left: null, right: { val: 4, left: null, right: null } },
  right: { val: 3, left: null, right: { val: 7, left: null, right: null } }
}

console.log(JSON.stringify(mergeTrees(t1, t2)))
