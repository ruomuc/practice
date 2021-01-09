package main

// golang的递归+记忆化搜索也超时了。。。
func maxProfitii(prices []int) int {
	n := len(prices)
	profitMap := make([][][]int, n)
	for i := range profitMap {
		profitMap[i] = make([][]int, 2)
		for j := range profitMap[i] {
			profitMap[i][j] = make([]int, 2)
		}
	}

	var dfs func(profitMap [][][]int, prices []int, index, status, k int) int
	dfs = func(profitMap [][][]int, prices []int, index, status, k int) int {
		if index == len(prices) || k == 2 {
			return 0
		}

		cache := profitMap[index][status][k]
		if cache > 0 {
			return cache
		}

		a, b, c := 0, 0, 0
		a = dfs(profitMap, prices, index+1, status, k)
		if status == 1 {
			b = dfs(profitMap, prices, index+1, 0, k+1) + prices[index]
		} else {
			c = dfs(profitMap, prices, index+1, 1, k) - prices[index]
		}

		max := maxs(a, b, c)
		profitMap[index][status][k] = max
		return max
	}

	return dfs(profitMap, prices, 0, 0, 0)
}

// 动态规划
func maxProfitii2(prices []int) int {
	m := len(prices)
	// 一共有m天
	dp := make([][][]int, m)
	for i := 0; i < m; i++ {
		// 有两个状态，持有股票和未持有股票
		dp[i] = make([][]int, 2)
		for j := 0; j < 2; j++ {
			// 可以交易两次
			dp[i][j] = make([]int, 3)
		}
	}

	// 初始化数据
	for i := 0; i < 3; i++ {
		dp[0][1][i] = -prices[0]
	}

	for i := 1; i < m; i++ {
		for j := 0; j < 3; j++ {
			if j < 2 {
				dp[i][0][j] = max(dp[i-1][0][j], dp[i-1][1][j+1]+prices[i])
			} else {
				dp[i][0][j] = dp[i-1][0][j]
			}
			dp[i][1][j] = max(dp[i-1][1][j], dp[i-1][0][j]-prices[i])
		}
	}

	ans := 0
	for i := 0; i < 3; i++ {
		ans = max(ans, dp[m-1][0][i])
	}
	return ans
}
