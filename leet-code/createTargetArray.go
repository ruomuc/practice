package main

func createTargetArray(nums []int, index []int) []int {
	result := make([]int, len(nums))
	for i, val := range index {
		copy(result[val+1:], result[val:])
		result[val] = nums[i]
	}
	return result
}
