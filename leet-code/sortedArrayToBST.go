package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sortedArrayToBST(nums []int) *TreeNode {
	return generateTree(nums, 0, len(nums)-1)
}

func generateTree(nums []int, left int, right int) *TreeNode {
	if left > right {
		return nil
	}
	var node *TreeNode = new(TreeNode)
	mid := (left + right) / 2
	node.Val = nums[mid]
	node.Left = generateTree(nums, left, mid-1)
	node.Right = generateTree(nums, mid+1, right)
	return node
}
