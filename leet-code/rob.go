package main

import "fmt"

func rob(nums []int) int {
	n := len(nums)
	if n == 1 {
		return nums[0]
	}
	nums1 := nums[:n-1]
	nums2 := nums[1:]
	fmt.Println(nums1, nums2)
	return max(subRob(nums1), subRob(nums2))
}

func subRob(nums []int) int {
	n := len(nums)
	if n == 1 {
		return nums[0]
	}
	dp := make([]int, n)

	// 初始化
	dp[0] = nums[0]
	dp[1] = max(dp[0], nums[1])

	for i := 2; i < n; i++ {
		dp[i] = max(dp[i-2]+nums[i], dp[i-1])
	}
	return dp[n-1]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

// 压缩空间，使用两个变量保存前两个状态
func subRob2(nums []int) int {
	n := len(nums)
	if n == 1 {
		return nums[0]
	}
	// 初始化
	ppre := nums[0]
	pre := max(ppre, nums[1])

	for i := 2; i < n; i++ {
		ppre, pre = pre, max(ppre+nums[i], pre)
	}
	return cur
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
