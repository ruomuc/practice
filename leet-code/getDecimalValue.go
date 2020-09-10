package main

import "math"

func getDecimalValue(head *ListNode) int {
	var list []int
	for head != nil {
		list = append(list, head.Val)
		head = head.Next
	}
	var result int
	for i := 0; i < len(list); i++ {
		if list[i] == 1 {
			result += int(math.Pow(2, float64(len(list)-i-1)))
		}
	}
	return result
}
