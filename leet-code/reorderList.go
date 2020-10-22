package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reorderList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil || head.Next.Next == nil {
		return head
	}
	top, tail := findMidNode(head)
	tail = reverseLink(tail)
	return mergeList(top, tail)
}

func findMidNode(head *ListNode) (*ListNode, *ListNode) {
	fast := head
	slow := head

	for fast != nil && fast.Next != nil && fast.Next.Next != nil {
		fast = fast.Next.Next
		slow = slow.Next
	}

	tail := slow.Next
	slow.Next = nil
	return head, tail
}

func reverseLink(head *ListNode) *ListNode {
	curr := head
	var pre *ListNode
	var next *ListNode
	for curr != nil {
		next = curr.Next
		curr.Next = pre
		pre = curr
		curr = next
	}
	return pre
}

func mergeList(l1 *ListNode, l2 *ListNode) *ListNode {
	var head = new(ListNode)
	head.Val = -1
	head.Next = nil
	temp := head
	for l1 != nil || l2 != nil {
		if l1 == nil {
			temp.Next = l2
			break
		}
		if l2 == nil {
			temp.Next = l1
			break
		}

		temp.Next = l1
		l1 = l1.Next
		temp = temp.Next

		temp.Next = l2
		l2 = l2.Next
		temp = temp.Next
	}

	return head.Next
}
