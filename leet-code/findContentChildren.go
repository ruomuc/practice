package main

import "sort"

func findContentChildren(g []int, s []int) int {
	ans, m, n := 0, len(g), len(s)
	sort.Ints(g)
	sort.Ints(s)

	for i, j := 0, 0; i < n && j < m; i++ {
		for j < m && g[i] > s[j] {
			j++
		}
		if j < m {
			ans++
			j++
		}
	}
	return ans
}
