package main

func uniquePaths(m int, n int) int {
	var ans int
	dp := make([][]int, m)
	memo := make([][]int, m)
	for i := 0; i < m; i++ {
		dp[i] = make([]int, n)
		memo[i] = make([]int, n)
	}

	var dfs func(x, y int) int
	dfs = func(x, y int) int {
		if x == 0 && y == 0 {
			return 1
		}
		if memo[x][y] > 0 {
			return memo[x][y]
		}
		// 第一行，不会从上面进入，第一列，不会从左边进入
		if x == 0 {
			ans = dfs(x, y-1)
		} else if y == 0 {
			ans = dfs(x-1, y)
		} else {
			ans = dfs(x, y-1) + dfs(x-1, y)
		}
		memo[x][y] = ans
		return ans
	}
	return dfs(m-1, n-1)
}
