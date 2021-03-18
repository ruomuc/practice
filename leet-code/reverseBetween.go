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

func reverseLink(head *ListNode) *ListNode {
	var pre *ListNode
	cur := head
	for cur != nil {
		next := cur.Next
		cur.Next = pre
		pre = cur
		cur = next
	}
	return pre
}

func reverseBetween(head *ListNode, left int, right int) *ListNode {
	// 哨兵节点
	var sentryNode = &ListNode{-1, head}
	// 原链表左切断点
	var pre = sentryNode
	for i := 0; i < left-1; i++ {
		pre = pre.Next
	}
	// 自区间链表左切断点
	leftNode := pre.Next
	// 自区间链表右切断点
	rightNode := pre
	for i := 0; i < right-left+1; i++ {
		rightNode = rightNode.Next
	}
	// 原链表右切断点
	tail := rightNode.Next
	// 切断
	pre.Next = nil
	rightNode.Next = nil
	// 翻转
	reverseLink(leftNode)
	// 拼接头尾
	pre.Next = rightNode
	leftNode.Next = tail
	return sentryNode.Next
}
