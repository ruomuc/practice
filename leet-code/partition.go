package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func partition(head *ListNode, x int) *ListNode {
	var front, s, l *ListNode
	front = &ListNode{0, head}

	for head != nil {
		if head.Val >= x {
			if l == nil {
				l = head
				head = head.Next
			} else {
				l = head
				head = head.Next
			}
		} else {
			if s == nil {
				s = head
				if l != nil {
					s.Next = front.Next
				}
				head = l.Next
			} else {
				head.Next = s.Next
				s.Next = head
				head = l.Next
			}
		}
	}
	return front.Next
}
