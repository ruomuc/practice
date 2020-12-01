package main

import (
	"math"
	"sort"
)

// 二分查找，然后找范围
func searchRange(nums []int, target int) []int {
	var res = []int{math.MaxInt64, -math.MaxInt64}
	var bSearch func(nums []int, left, right int)
	bSearch = func(nums []int, left, right int) {
		if left > right {
			return
		}
		mid := left + (right-left+1)/2
		if nums[mid] == target {
			i, j := mid, mid
			for nums[i] == target {
				if i < res[0] {
					res[0] = i
					i--
				}
				if i < left {
					break
				}
			}
			for nums[j] == target {
				if j > res[1] {
					res[1] = j
					j++
				}
				if j > right {
					break
				}
			}
		} else {
			if nums[mid] > target {
				bSearch(nums, left, mid-1)
			} else {
				bSearch(nums, mid+1, right)
			}
		}
	}
	bSearch(nums, 0, len(nums)-1)
	if res[0] == math.MaxInt64 {
		res[0], res[1] = -1, -1
	}
	return res
}

// 官方题解给的方法。。
func searchRange2(nums []int, target int) []int {
	leftmost := sort.SearchInts(nums, target)
	if leftmost == len(nums) || nums[leftmost] != target {
		return []int{-1, -1}
	}
	rightmost := sort.SearchInts(nums, target+1) - 1
	return []int{leftmost, rightmost}
}
