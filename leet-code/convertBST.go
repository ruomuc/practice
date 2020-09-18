package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func convertBST(root *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}
	var sum int
	var f func(root *TreeNode) *TreeNode
	f = func(root *TreeNode) *TreeNode {
		if root == nil {
			return nil
		}
		f(root.Right)
		sum += root.Val
		root.Val = sum
		f(root.Left)
		return root
	}
	return f(root)
}
