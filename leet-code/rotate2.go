package main

import (
	"reflect"
)

func rotate2(nums []int, k int) {
	reverseSlice := func(s interface{}) {
		size := reflect.ValueOf(s).Len()
		swap := reflect.Swapper(s)
		for i, j := 0, size-1; i < j; i, j = i+1, j-1 {
			swap(i, j)
		}
	}
	k = k % len(nums)
	reverseSlice(nums)
	reverseSlice(nums[:k])
	reverseSlice(nums[k:])
}
