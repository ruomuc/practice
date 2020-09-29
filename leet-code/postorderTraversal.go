package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func postorderTraversal(root *TreeNode) []int {
	res := make([]int, 0)
	var fn func(root *TreeNode)
	if root == nil {
		return res
	}
	fn = func(root *TreeNode) {
		if root.Left != nil {
			fn(root.Left)
		}
		if root.Right != nil {
			fn(root.Right)
		}
		res = append(res, root.Val)
	}
	fn(root)
	return res
}
