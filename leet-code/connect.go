package main

// Node ...
type Node struct {
	Val   int
	Left  *Node
	Right *Node
	Next  *Node
}

func connect(root *Node) *Node {
	if root == nil {
		return nil
	}
	queue := make([]*Node, 0)
	queue = append(queue, root)
	for len(queue) > 0 {
		levelSize := len(queue)
		for i := 0; i < levelSize; i++ {
			tempNode := queue[i]
			if tempNode.Left != nil {
				queue = append(queue, tempNode.Left)
			}
			if tempNode.Right != nil {
				queue = append(queue, tempNode.Right)
			}
			if i != levelSize-1 {
				tempNode.Next = queue[i+1]
			} else {
				tempNode.Next = nil
			}
		}
		queue = queue[levelSize:]
	}
	return root
}
