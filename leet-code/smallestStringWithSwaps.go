package main

import "sort"

// 并查集
func smallestStringWithSwaps(s string, pairs [][]int) string {
	n := len(s)
	graph := make([]int, n)
	deep := make([]int, n)

	for i := range graph {
		graph[i] = i
		deep[i] = 1
	}

	var find func(x int) int
	find = func(x int) int {
		if graph[x] != x {
			graph[x] = find(graph[x])
		}
		return graph[x]
	}

	merge := func(x, y int) {
		fx, fy := find(x), find(y)
		if fx == fy {
			return
		}
		if deep[fx] < deep[fy] {
			fx, fy = fy, fx
		}
		deep[fx] += deep[fy]
		graph[fy] = graph[fx]
	}

	for _, p := range pairs {
		merge(p[0], p[1])
	}

	groups := map[int][]byte{}
	for i := range s {
		f := find(i)
		groups[f] = append(groups[f], s[i])
	}

	for _, bytes := range groups {
		sort.Slice(bytes, func(i, j int) bool { return bytes[i] < bytes[j] })
	}

	ans := make([]byte, n)
	for i := range ans {
		f := find(i)
		ans[i] = groups[f][0]
		groups[f] = groups[f][1:]
	}
	return string(ans)
}
