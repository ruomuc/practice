/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
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

var mergeTrees = function (t1, t2) {
  let queue = []
  queue.push([t1, t2])
  while (queue.length > 0) {
    const node = queue.shift()
    node[0].val += node[1].val
    if (node[0].left && node[1].left) {
      queue.push([node[0].left, node[1].left])
    } else if (node[0].left && !node[1].left) {
      queue.push()
    }
    if (node[0].right && node[1].right) {
      queue.push([node[0].right, node[1].right])
    }
  }
}
