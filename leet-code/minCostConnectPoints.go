package main

/**
type unionFind struct {
	parent []int
	rank   []int // 按秩合并
}

func (uf *unionFind) find(x int) int {
	if uf.parent[x] == x {
		return x
	}
	// 路径压缩
	uf.parent[x] = uf.find(uf.parent[x])
	return uf.parent[x]
}

func (uf *unionFind) merge(x, y int) bool {
	fx, fy := uf.find(x), uf.find(y)
	// 如果他们有相同的根节点，无需合并
	if fx == fy {
		return false
	}
	if uf.rank[fx] <= uf.rank[fy] {
		uf.parent[fx] = fy
	} else {
		uf.parent[fy] = fx
	}
	// 如果秩相同
	if uf.rank[fx] == uf.rank[fy] && fx != fy {
		// 这里为什么要把fy的深度加1呢
		// 因为uf.rank[fx] <= uf.rank[fy]时，uf.parent[fx] = fy
		// 所以他们深度本来相同。但是fx挂载了fy下面，所以反fy的深度增加了
		// 如果这里改为uf.rank[fx] < uf.rank[fy],那么会走到else里面的uf.parent[fy] = fx
		// 这时，fx的深度应该加1
		uf.rank[fy]++
	}
	return true
}

func newUnionFind(n int) *unionFind {
	parent := make([]int, n)
	rank := make([]int, n)
	for i := 0; i < n; i++ {
		parent[i] = i
		rank[i] = 1
	}
	return &unionFind{parent, rank}
}

func dist(p, q []int) int {
	return abs(p[0]-q[0]) + abs(p[1]-q[1])
}

// 克鲁斯卡尔
func minCostConnectPoints(points [][]int) (ans int) {
	n := len(points)
	type edge struct{ v, w, dis int }
	edges := []edge{}
	// 记录边和边的距离信息
	for i, p := range points {
		for j := i + 1; j < n; j++ {
			edges = append(edges, edge{i, j, dist(p, points[j])})
		}
	}
	// 根据曼哈顿距离从小到大排序
	sort.Slice(edges, func(i, j int) bool { return edges[i].dis < edges[j].dis })

	uf := newUnionFind(n)
	// 只需要重复n-1次
	left := n - 1
	for _, e := range edges {
		if uf.merge(e.v, e.w) {
			ans += e.dis
			left--
			if left == 0 {
				break
			}
		}
	}
	return
}
*/
