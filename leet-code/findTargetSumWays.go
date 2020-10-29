package main

// 按题意，nums之和不会超过1000
func findTargetSumWays(nums []int, S int) int {
	dp := make([][]int, len(nums))
	for i := range dp {
		dp[i] = make([]int, 20001)
	}
	//初始化第一行数据
	dp[0][nums[0]+1000]++
	dp[0][-nums[0]+1000]++

	for i := 1; i < len(nums); i++ {
		for j := 0; j < 20001; j++ {
			negative, positive := 0, 0
			if j-nums[i] >= 0 {
				negative = dp[i-1][j-nums[i]]
			}
			if j+nums[i] <= 2000 {
				positive = dp[i-1][j+nums[i]]
			}
			dp[i][j] = negative + positive
		}
	}
	if S > 1000 {
		return 0
	}
	return dp[len(nums)-1][S+1000]
}
