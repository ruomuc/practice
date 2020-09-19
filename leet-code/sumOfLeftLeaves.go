package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sumOfLeftLeaves(root *TreeNode) int {
	return reverseTree(root)
}

func reverseTree(root *TreeNode) int {
	ans := 0
	if root == nil {
		return ans
	}
	if root.Left != nil {
		if ok := isLeaf(root.Left); ok {
			ans += root.Left.Val
		} else {
			ans += reverseTree(root.Left)
		}
	}

	if ok := isLeaf(root.Right); root.Right != nil && !ok {
		ans += reverseTree(root.Right)
	}
	return ans
}

func isLeaf(root *TreeNode) bool {
	if root == nil {
		return false
	}
	if root.Left == nil && root.Right == nil {
		return true
	}
	return false
}
