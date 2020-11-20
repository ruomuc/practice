package main

import "math"

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func insertionSortList(head *ListNode) *ListNode {
	fake := &ListNode{-math.MaxInt64, head}
	curr := head
	for curr != nil && curr.Next != nil {
		if curr.Val <= curr.Next.Val {
			curr = curr.Next
			continue
		}

		rm := curr.Next
		curr.Next = curr.Next.Next
		pre := fake
		for pre.Next.Val <= rm.Val {
			pre = pre.Next
		}
		rm.Next = pre.Next
		pre.Next = rm
	}
	return fake.Next
}
