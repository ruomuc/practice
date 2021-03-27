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

func rotateRight(head *ListNode, k int) *ListNode {
	if k == 0 || head == nil || head.Next == nil {
		return head
	}
	linkLen := 1
	i := head
	for ; i.Next != nil; i = i.Next {
		linkLen++
	}
	i.Next = head
	k = linkLen - (k % linkLen)
	for k > 0 {
		i = i.Next
		k--
	}
	ansNode := i.Next
	// 断开
	i.Next = nil
	return ansNode
}
