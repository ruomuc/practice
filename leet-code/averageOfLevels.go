package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func averageOfLevels(root *TreeNode) []float64 {
	var result []float64
	queue := []*TreeNode{root}
	for len(queue) > 0 {
		levelSize := len(queue)
		temp := 0
		for i := 0; i < levelSize; i++ {
			node := queue[i]
			temp += node.Val

			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
		queue = queue[levelSize:]
		result = append(result, float64(temp)/float64(levelSize))
	}
	return result
}
