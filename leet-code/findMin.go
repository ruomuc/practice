package main

import "math"

func findMin(nums []int) int {
	min := math.MaxInt64
	for i := range nums {
		if nums[i] < min {
			min = nums[i]
		}
	}
	return min
}

func findMin2(nums []int) int {
	left, right := 0, len(nums)-1

	for left < right {
		mid := (left + right) / 2

		if nums[mid] < nums[right] {
			right = mid
		} else {
			left = mid + 1
		}
	}
	return nums[left]
}
