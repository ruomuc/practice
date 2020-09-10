package main

// TreeNode is a list node
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func levelOrderBottom(root *TreeNode) [][]int {
	var result [][]int
	if root == nil {
		return result
	}
	queue := []*TreeNode{root}
	for len(queue) > 0 {
		var tempArr []int
		levelSize := len(queue)
		for i := 0; i < levelSize; i++ {
			tempNode := queue[i]
			tempArr = append(tempArr, tempNode.Val)
			if tempNode.Left != nil {
				queue = append(queue, tempNode.Left)
			}
			if tempNode.Right != nil {
				queue = append(queue, tempNode.Right)
			}
		}
		result = append([][]int{tempArr}, result...)
		queue = queue[levelSize:]
	}
	return result
}
