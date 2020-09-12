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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return generateTree(nums, 0, nums.length - 1)
}

function generateTree (arr, left, right) {
  if (left > right) {
    return null
  }
  let mid = parseInt((right + left) / 2)
  console.log(left, right, mid)
  let node = new TreeNode(arr[mid])
  console.log(mid)
  node.left = generateTree(arr, left, mid - 1)
  node.right = generateTree(arr, mid + 1, right)
  return node
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))
