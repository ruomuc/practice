package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func diameterOfBinaryTree(root *TreeNode) int {
	res := 0
	if root == nil {
		return res
	}
	var depth func(root *TreeNode) int
	depth = func(root *TreeNode) int {
		if root == nil {
			return 0
		}
		L := depth(root.Left)
		R := depth(root.Right)
		res = max(L+R+1, res)
		return max(L, R) + 1
	}
	depth(root)
	return res - 1
}

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}
