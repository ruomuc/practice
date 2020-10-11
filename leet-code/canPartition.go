package main

func canPartition(nums []int) bool {
	len := len(nums)
	if len < 2 {
		return false
	}

	var sum int
	for i := range nums {
		sum += nums[i]
	}

	if sum%2 != 0 {
		return false
	}

	target := sum / 2
	dp := make([]bool, target+1)
	dp[0] = true
	for i := range nums {
		num := nums[i]
		for j := target; j >= num; j-- {
			dp[j] = dp[j] || dp[j-num]
		}
	}
	return dp[target]
}
