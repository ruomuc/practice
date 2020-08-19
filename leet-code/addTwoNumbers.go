/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

package main

// ListNode here is a node of linkList
type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	list := &ListNode{0, nil}
	result := list
	add := 0
	total := 0
	for l1 != nil || l2 != nil {
		if l1 != nil {
			total += l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			total += l2.Val
			l2 = l2.Next
		}
		// 把上一次的进位加上
		total += add
		result.Next = &ListNode{total % 10, nil}
		// 满10进1
		if total >= 10 {
			add = 1
		} else {
			add = 0
		}
		result = result.Next
		total = 0
	}
	// 处理最后一个进位
	if add > 0 {
		result.Next = &ListNode{add, nil}
	}
	return list.Next
}
