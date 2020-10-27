package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func isPalindromeLink(head *ListNode) bool {
	if head == nil {
		return true
	}

	slow, fast := head, head

	for fast.Next != nil && fast.Next.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}

	front, tail := head, slow.Next
	var pre *ListNode
	curr := tail
	for curr != nil {
		next := curr.Next
		curr.Next = pre
		pre = curr
		curr = next
	}
	tail = pre

	res := true
	for front != nil && tail != nil {
		if front.Val != tail.Val {
			res = false
		}
		front = front.Next
		tail = tail.Next
	}
	return res
}
