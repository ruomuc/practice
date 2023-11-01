// https://leetcode.cn/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150

package main

func rotate(nums []int, k int) {
	m := len(nums)
	newNums := make([]int, m)
	for i := range nums {
		newNums[(i+k)%m] = nums[i]
	}

	copy(nums, newNums)
}
