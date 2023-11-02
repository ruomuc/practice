// https://leetcode.cn/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150

package main

func canJump(nums []int) bool {
	dp := 0
	for i := 0; i < len(nums)-1; i++ {
		dp = maxInt(dp, i+nums[i])
		if dp >= len(nums)-1 {
			return true
		}
	}

	return false
}

func maxInt(a int, b int) int {
	if a > b {
		return a
	}
	return b
}
