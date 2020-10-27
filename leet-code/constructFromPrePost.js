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
/*
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {
  let len = pre.length
  if (len === 0) {
    return null
  }
  let root = new TreeNode(pre[0])
  if (len === 1) {
    return root
  }

  let L = 0
  for (let i = 0; i < post.length; i++) {
    if (post[i] === pre[1]) {
      L = i + 1
    }
  }

  root.left = constructFromPrePost(pre.slice(1, L + 1), post.slice(0, L))
  root.right = constructFromPrePost(
    pre.slice(L + 1, len),
    post.slice(L, len - 1)
  )
  return root
}

console.log(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]))
