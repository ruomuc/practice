package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

// 后序遍历解法
func maxDepth(root *TreeNode) int {
	return backOrderTree(root)
}

func backOrderTree(root *TreeNode) int {
	if root == nil {
		return 0
	}
	var max func(x, y int) int
	max = func(x, y int) int {
		if x > y {
			return x
		}
		return y
	}
	return max(backOrderTree(root.Left), backOrderTree(root.Right)) + 1
}

// 层序遍历解法
func maxDepth1(root *TreeNode) int {
	return sequenceOrderTree(root)
}

func sequenceOrderTree(root *TreeNode) int {
	if root == nil {
		return 0
	}
	queue := []*TreeNode{root}
	count := 0
	for len(queue) > 0 {
		levelSize := len(queue)
		for i := 0; i < levelSize; i++ {
			node := queue[i]
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
		count++
		queue = queue[levelSize:]
	}
	return count
}
