package main

func deleteNode(node *ListNode) {
	node.Val = node.Next.Val
	node.Next = node.Next.Next
}

func deleteNode2(node *ListNode) {
	*node = *node.Next
}
