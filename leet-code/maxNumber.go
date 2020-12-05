package main

import "fmt"

func maxNumber(nums1 []int, nums2 []int, k int) []int {
	var ans []int
	l1, l2 := len(nums1), len(nums2)
	for i := 0; i <= k; i++ {
		rest1 := l1 - i
		rest2 := l2 - (k - i)
		ans = arrmax(ans, merge(findMaxNum(nums1, rest1), findMaxNum(nums2, rest2)))
	}
	return ans
}

// nums 数组
// k 要删除的数量
func findMaxNum(nums []int, k int) []int {
	if len(nums) == 0 {
		return nums
	}
	stack := []int{nums[0]}
	for i := 1; i < len(nums); i++ {
		for k > 0 && len(stack) > 0 && stack[len(stack)-1] < nums[i] {
			stack = stack[0 : len(stack)-1]
			k--
		}
		stack = append(stack, nums[i])
	}
	if k > 0 {
		stack = stack[0 : len(stack)-k]
	}
	fmt.Println(stack)
	return stack
}

func merge(n1, n2 []int) []int {
	l1, l2 := len(n1), len(n2)
	if l1 == 0 {
		return n2
	}
	if l2 == 0 {
		return n1
	}
	mergeLen := l1 + l2
	merged := make([]int, mergeLen)
	var idx1, idx2 int
	for i := 0; i < mergeLen; i++ {
		if compare(n1, n2, idx1, idx2) {
			merged[i] = n1[idx1]
			idx1++
		} else {
			merged[i] = n2[idx2]
			idx2++
		}
	}
	return merged
}

func compare(n1, n2 []int, idx1, idx2 int) bool {
	l1, l2 := len(n1), len(n2)
	for idx1 < l1 && idx2 < l2 {
		diff := n1[idx1] - n2[idx2]
		if diff != 0 {
			return diff > 0
		}
		idx1++
		idx2++
	}
	return l1-idx1-(l2-idx2) > 0
}

func arrmax(n1, n2 []int) []int {
	l1, l2 := len(n1), len(n2)
	if l1 > l2 {
		return n1
	} else if l2 > l1 {
		return n2
	} else {
		for i := 0; i < l1; i++ {
			if n1[i] > n2[i] {
				return n1
			} else if n1[i] < n2[i] {
				return n2
			}
		}
	}
	return n1
}
