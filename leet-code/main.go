package main

import (
	"encoding/json"
	"fmt"
)

func main() {
	// 两数之和
	nums := []int{1, 2, 3, 5, 6}
	targer := 7
	result1 := toNumberSum(nums, targer)
	fmt.Println("两数之和", result1)

	// 两数相加
	l1 := &ListNode{9, nil}
	l1.Next = &ListNode{1, nil}
	l1.Next.Next = &ListNode{9, nil}
	l2 := &ListNode{1, nil}
	l2.Next = &ListNode{1, nil}
	l2.Next.Next = &ListNode{2, nil}
	result2 := addTwoNumbers(l1, l2)
	cresult2, _ := json.Marshal(result2)
	fmt.Println("两数相加：", string(cresult2))
}
