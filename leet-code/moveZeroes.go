package main

func moveZeroes(nums []int) {
	var right, left int
	n := len(nums)
	for right < n {
		if nums[right] != 0 {
			// 交换位置
			nums[right], nums[left] = nums[left], nums[right]
			left++
		}
		right++
	}
}
