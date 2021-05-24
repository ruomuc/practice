package main

func strangePrinter(s string) int {
	n := len(s)
	if n == 1 {
		return n
	}
	// 缓存
	memo := make([][]int, n)
	for i := range memo {
		memo[i] = make([]int, n)
	}

	var dfs func(i, j int) int
	dfs = func(i, j int) int {
		if i > j {
			return 0
		}
		if memo[i][j] > 0 {
			return memo[i][j]
		}

		memo[i][j] = dfs(i+1, j) + 1
		for k := i + 1; k < j; k++ {
			if s[i] == s[k] {
				memo[i][j] = min(memo[i][j], dfs(i, k-1)+dfs(k+1, j))
			}
		}
		return memo[i][j]
	}
	return dfs(0, n-1)
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
