package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func sortList(head *ListNode) *ListNode {
	if head == nil {
		return head
	}
	var merge = func(l1, l2 *ListNode) *ListNode {
		prev := &ListNode{-1, nil}
		head := prev

		for l1 != nil || l2 != nil {
			if l1 == nil {
				prev.Next = l2
				break
			} else if l2 == nil {
				prev.Next = l1
				break
			}

			if l1.Val < l2.Val {
				prev.Next = l1
				l1 = l1.Next
			} else {
				prev.Next = l2
				l2 = l2.Next
			}
			prev = prev.Next
		}
		return head.Next
	}
	var halfCount = func(link *ListNode) (rl, rr *ListNode) {
		fast, slow := link, link
		for fast != nil && fast.Next != nil && fast.Next.Next != nil {
			fast = fast.Next.Next
			slow = slow.Next
		}
		lr := slow.Next
		slow.Next = nil
		return link, lr
	}
	var dfs func(head *ListNode) *ListNode
	dfs = func(head *ListNode) *ListNode {
		if head.Next == nil {
			return head
		}
		ll, lr := halfCount(head)
		return merge(dfs(ll), dfs(lr))
	}
	return dfs(head)
}

func sortList2(head *ListNode) *ListNode {
	if head == nil {
		return head
	}
	var merge = func(l1, l2 *ListNode) *ListNode {
		prev := &ListNode{-1, nil}
		head := prev

		for l1 != nil || l2 != nil {
			if l1 == nil {
				prev.Next = l2
				break
			} else if l2 == nil {
				prev.Next = l1
				break
			}

			if l1.Val < l2.Val {
				prev.Next = l1
				l1 = l1.Next
			} else {
				prev.Next = l2
				l2 = l2.Next
			}
			prev = prev.Next
		}
		return head.Next
	}
	var dfs func(head *ListNode) *ListNode
	dfs = func(head *ListNode) *ListNode {
		if head.Next == nil {
			return head
		}
		fast, slow := head, head
		for fast != nil && fast.Next != nil && fast.Next.Next != nil {
			fast = fast.Next.Next
			slow = slow.Next
		}
		lr := slow.Next
		slow.Next = nil

		return merge(dfs(head), dfs(lr))
	}
	return dfs(head)
}

func sortList3(head *ListNode) *ListNode {
	if head == nil {
		return head
	}
	var merge = func(l1, l2 *ListNode) *ListNode {
		prev := &ListNode{-1, nil}
		head := prev

		for l1 != nil || l2 != nil {
			if l1.Val < l2.Val {
				prev.Next = l1
				l1 = l1.Next
			} else {
				prev.Next = l2
				l2 = l2.Next
			}
			prev = prev.Next
		}
		if l1 == nil {
			prev.Next = l2
		} else if l2 == nil {
			prev.Next = l1
		}
		return head.Next
	}
	var dfs func(head *ListNode) *ListNode
	dfs = func(head *ListNode) *ListNode {
		if head.Next == nil {
			return head
		}
		fast, slow := head, head
		for fast != nil && fast.Next != nil && fast.Next.Next != nil {
			fast = fast.Next.Next
			slow = slow.Next
		}
		lr := slow.Next
		slow.Next = nil

		return merge(dfs(head), dfs(lr))
	}
	return dfs(head)
}
