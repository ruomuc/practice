package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func partition(head *ListNode, x int) *ListNode {
	if head == nil {
		return nil
	}
	s, l := &ListNode{}, &ListNode{}
	sHead := s
	lHead := l

	for head != nil {
		if head.Val >= x {
			l.Next = head
			l = l.Next
		} else {
			s.Next = head
			s = s.Next
		}
		head = head.Next
	}
	l.Next = nil
	s.Next = lHead.Next

	return sHead.Next
}
