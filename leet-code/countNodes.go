package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func countNodes(root *TreeNode) int {
	if root == nil {
		return 0
	}
	queue := make([]*TreeNode, 0)
	queue = append(queue, root)
	ans := 0

	for len(queue) > 0 {
		size := len(queue)
		for i := 0; i < size; i++ {
			temp := queue[i]
			if temp.Left != nil {
				queue = append(queue, temp.Left)
			}
			if temp.Right != nil {
				queue = append(queue, temp.Right)
			}
			ans++
		}
		queue = queue[size:]
	}
	return ans
}

func countNodes2(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return countNodes2(root.Left) + countNodes(root.Right) + 1
}

func countNodes3(root *TreeNode) int {
	if root == nil {
		return 0
	}

	var lh, rh int
	lNode, rNode := root, root

	for lNode != nil {
		lh++
		lNode = lNode.Left
	}

	for rNode != nil {
		rh++
		rNode = rNode.Right
	}

	// 2^n-1
	if lh == rh {
		return 1<<lh - 1
	}

	return countNodes3(root.Left) + countNodes3(root.Right) + 1
}
