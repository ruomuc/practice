package main

import "fmt"

func calcEquation(equations [][]string, values []float64, queries [][]string) []float64 {
	ids := map[string]int{}
	for _, eq := range equations {
		a, b := eq[0], eq[1]
		if _, has := ids[a]; !has {
			ids[a] = len(ids)
		}
		if _, has := ids[b]; !has {
			ids[b] = len(ids)
		}
	}

	type edge struct {
		to     int
		weight float64
	}
	// 构建图
	graph := make([][]edge, len(ids))
	for i, eq := range equations {
		m, n := ids[eq[0]], ids[eq[1]]
		graph[m] = append(graph[m], edge{n, values[i]})
		graph[n] = append(graph[n], edge{m, 1 / values[i]})
	}
	fmt.Println(graph)
	// 广度优先遍历，搜索图
	bfs := func(start, end int) float64 {
		queue := []int{start}
		ratios := make([]float64, len(graph))
		ratios[start] = 1
		for len(queue) > 0 {
			val := queue[0]
			queue = queue[1:]
			if val == end {
				return ratios[val]
			}
			for _, ele := range graph[val] {
				if w := ele.to; ratios[w] == 0 {
					ratios[w] = ratios[val] * ele.weight
					queue = append(queue, w)
				}
			}
		}
		// 没找到
		return -1
	}

	ans := make([]float64, len(queries))
	for i, qu := range queries {
		x, hasx := ids[qu[0]]
		y, hasy := ids[qu[1]]
		if !hasx || !hasy {
			ans[i] = -1
		} else {
			ans[i] = bfs(x, y)
		}
	}
	return ans
}
