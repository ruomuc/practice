package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

// 递归，深度优先遍历
func sumNumbers(root *TreeNode) int {
	sum := 0
	var dfs func(root *TreeNode, val int)
	dfs = func(root *TreeNode, val int) {
		if root == nil {
			return
		}
		if root.Left == nil && root.Right == nil {
			sum += val*10 + root.Val
		}
		dfs(root.Left, val*10+root.Val)
		dfs(root.Right, val*10+root.Val)
	}
	dfs(root, 0)
	return sum
}

// 队列，广度优先遍历
func sumNumbers2(root *TreeNode) int {
	sum := 0
	if root == nil {
		return sum
	}
	queueNode := make([]*TreeNode, 0)
	queueVal := make([]int, 0)
	// 初始化
	queueNode = append(queueNode, root)
	queueVal = append(queueVal, root.Val)

	for len(queueNode) > 0 {
		// 出队
		tempNode := queueNode[0]
		queueNode = queueNode[1:]
		tempVal := queueVal[0]
		queueVal = queueVal[1:]

		if tempNode.Left == nil && tempNode.Right == nil {
			sum += tempVal
		}

		if tempNode.Left != nil {
			queueNode = append(queueNode, tempNode.Left)
			queueVal = append(queueVal, tempVal*10+tempNode.Left.Val)
		}
		if tempNode.Right != nil {
			queueNode = append(queueNode, tempNode.Right)
			queueVal = append(queueVal, tempVal*10+tempNode.Right.Val)
		}
	}

	return sum
}
