package main

import "sort"

func containsDuplicate(nums []int) bool {
	dict := make(map[int]int)
	for _, v := range nums {
		if _, ok := dict[v]; !ok {
			dict[v] = 0
		} else {
			dict[v]++
		}
	}

	for _, v := range dict {
		if v > 1 {
			return true
		}
	}
	return false
}

func containsDuplicate2(nums []int) bool {
	sort.Ints(nums)
	for i, l := 1, len(nums); i < l; i++ {
		if nums[i] == nums[i-1] {
			return true
		}
	}
	return false
}
