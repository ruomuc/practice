package main

func removeElement(nums []int, val int) int {
	if len(nums) <= 0 {
		return 0
	}
	currIndex := 0
	for i := range nums {
		if nums[i] != val {
			temp := nums[i]
			nums[i] = nums[currIndex]
			nums[currIndex] = temp
			currIndex++
		}
	}
	return currIndex
}
