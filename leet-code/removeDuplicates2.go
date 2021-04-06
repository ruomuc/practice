package main

func removeDuplicates(nums []int) int {
	if len(nums) <= 2 {
		return nums
	}

	pre, cur := 2, 2
	for cur < len(nums) {
		if nums[pre-2] != nums[cur] {
			nums[pre] = nums[cur]
			pre++
		}
		cur++
	}
	return pre
}
