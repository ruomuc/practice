package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteDuplicates(head *ListNode) *ListNode {
	sentryNode := &ListNode{Val: -1, Next: head}
	curNode := sentryNode
	for curNode.Next != nil && curNode.Next.Next != nil {
		if curNode.Next.Val == curNode.Next.Next.Val {
			val := curNode.Next.Val
			for curNode.Next != nil && curNode.Next.Val == val {
				curNode.Next = curNode.Next.Next
			}
		} else {
			curNode = curNode.Next
		}
	}
	return head
}
