package main

import "math"

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func getMinimumDifference(root *TreeNode) int {
	ans := math.MaxInt32
	pre := -math.MaxInt32

	var dfs func(root *TreeNode)
	dfs = func(root *TreeNode) {
		if root == nil {
			return
		}
		dfs(root.Left)
		ans = min(root.Val-pre, ans)
		pre = root.Val
		dfs(root.Right)
	}
	dfs(root)
	return ans
}

func min(a int, b int) int {

	if a < b {
		return a
	} else {
		return b
	}
}
