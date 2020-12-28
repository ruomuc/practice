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
