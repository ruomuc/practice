package main

import "math"

func findRotateSteps(ring string, key string) int {
	m, n := len(ring), len(key)
	dp := make([][]int, n)
	for i := range dp {
		dp[i] = make([]int, m)
		for j := range dp[i] {
			dp[i][j] = math.MaxInt64
		}
	}

	pos := make([][]int, 26)
	for i := 0; i < m; i++ {
		pos[ring[i]-'a'] = append(pos[ring[i]-'a'], i)
	}

	// 初始化第一个字符
	for _, v := range pos[key[0]-'a'] {
		dp[0][v] = min(v, m-v) + 1
	}

	for i := 1; i < n; i++ {
		for _, j := range pos[key[i]-'a'] {
			for _, k := range pos[key[i-1]-'a'] {
				dp[i][j] = min(dp[i][j], dp[i-1][k]+min(abs(j-k), m-abs(j-k))+1)
			}
		}
	}

	min := math.MaxInt64
	for _, v := range dp[n-1] {
		if v < min {
			min = v
		}
	}
	return min
}

func abs(a int) int {
	if a < 0 {
		return -a
	}
	return a
}

func findRotateSteps2(ring string, key string) int {
	ringMap := make(map[rune][]int)
	for i, v := range ring {
		_, ok := ringMap[v]
		if ok {
			ringMap[v] = append(ringMap[v], i)
		} else {
			ringMap[v] = []int{i}
		}
	}

	memo := make([][]int, 0)
	for i := 0; i < len(ring); i++ {
		si := make([]int, 0)
		for j := 0; j < len(key); j++ {
			si = append(si, -1)
		}
		memo = append(memo, si)
	}

	var dfs func(ringIdx int, keyIdx int) int
	dfs = func(ringIdx, keyIdx int) int {
		if keyIdx >= len(key) {
			return 0
		}

		if memo[ringIdx][keyIdx] >= 0 {
			return memo[ringIdx][keyIdx]
		}

		curr := rune(key[keyIdx])
		res := math.MaxInt64
		idxSet, _ := ringMap[curr]
		for _, targetIdx := range idxSet {
			d1 := abs(ringIdx - targetIdx)
			d2 := len(ring) - d1
			res = min(res, min(d1, d2)+dfs(targetIdx, keyIdx+1))
		}
		memo[ringIdx][keyIdx] = res
		return res
	}
	return len(key) + dfs(0, 0)
}
