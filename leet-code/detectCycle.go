package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func detectCycle(head *ListNode) *ListNode {
	fast := head
	slow := head

	// 先判断是否有环，否则返回null
	for fast != nil {
		if fast != nil && fast.Next != nil && fast.Next.Next != nil {
			fast = fast.Next.Next
			slow = slow.Next
		} else {
			return nil
		}

		if fast == slow {
			break
		}
	}

	p := head

	// 找到环后，再找环点
	for p != slow {
		p = p.Next
		slow = slow.Next
	}
	return p
}
