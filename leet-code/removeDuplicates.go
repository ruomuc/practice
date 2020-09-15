package main

func removeDuplicates(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	currIndex := 1
	currVal := nums[0]

	for i := 1; i < len(nums); i++ {
		if currVal != nums[i] {
			currVal = nums[i]
			nums[currIndex] = currVal
			currIndex++
		}
	}
	return currIndex
}
