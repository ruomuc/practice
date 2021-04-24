package main

func combinationSum4(nums []int, target int) int {
	var dfs func(t int) int
	memo := make([]int, target+1)
	for i := range memo {
		memo[i] = -1
	}
	dfs = func(t int) int {
		if t == 0 {
			return 1
		}
		res := 0
		if memo[t] != -1 {
			return memo[t]
		}
		for i := range nums {
			if nums[i] <= t {
				res += dfs(t - nums[i])
			}
		}
		memo[t] = res
		return res
	}
	return dfs(target)
}

func combinationSum42(nums []int, target int) int {
	dp := make([]int, target+1)
	dp[0] = 1
	res := 0

	for i := 1; i <= target+1; i++ {
		for _, num := range nums {
			if i >= num {
				dp[i] += i - num
			}
		}
	}
	return dp[target]
}
