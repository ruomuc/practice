import "sort"

type unionFind struct {
	parent, size []int
}

func newUnionFind(n int) *unionFind {
	parent := make([]int, n)
	size := make([]int, n)
	for i := range parent {
		parent[i] = i
		size[i] = 1
	}
	return &unionFind{parent, size}
}

func (uf *unionFind) find(x int) int {
	if uf.parent[x] != x {
		uf.parent[x] = uf.find(uf.parent[x])
	}
	return uf.parent[x]
}

func (uf *unionFind) union(x, y int) bool {
	fx, fy := uf.find(x), uf.find(y)
	if fx == fy {
		return false
	}
	if uf.size[fx] < uf.size[fy] {
		fx, fy = fy, fx
	}
	uf.size[fx] += uf.size[fy]
	uf.parent[fy] = fx
	return true
}

func findCriticalAndPseudoCriticalEdges(n int, edges [][]int) [][]int {
	m := len(edges)
	edgeType := make([]int, m) // -1：不在最小生成树中；0：伪关键边；1：关键边

	for i, e := range edges {
		edges[i] = append(e, i)
	}
	sort.Slice(edges, func(i, j int) bool { return edges[i][2] < edges[j][2] })

	type neighbor struct{ to, edgeID int }
	graph := make([][]neighbor, n)
	dfn := make([]int, n) // 遍历到该顶点时的时间戳
	timestamp := 0
	var tarjan func(int, int) int
	tarjan = func(v, pid int) int {
		timestamp++
		dfn[v] = timestamp
		lowV := timestamp
		for _, e := range graph[v] {
			if w := e.to; dfn[w] == 0 {
				lowW := tarjan(w, e.edgeID)
				if lowW > dfn[v] {
					edgeType[e.edgeID] = 1
				}
				lowV = min(lowV, lowW)
			} else if e.edgeID != pid {
				lowV = min(lowV, dfn[w])
			}
		}
		return lowV
	}

	uf := newUnionFind(n)
	for i := 0; i < m; {
		vs := []int{}
		// 将权值相同的边分为一组，建图，然后用 Tarjan 算法找桥边
		for weight := edges[i][2]; i < m && edges[i][2] == weight; i++ {
			e := edges[i]
			v, w, edgeID := uf.find(e[0]), uf.find(e[1]), e[3]
			if v != w {
				graph[v] = append(graph[v], neighbor{w, edgeID})
				graph[w] = append(graph[w], neighbor{v, edgeID})
				vs = append(vs, v, w) // 记录图中顶点
			} else {
				edgeType[edgeID] = -1
			}
		}
		for _, v := range vs {
			if dfn[v] == 0 {
				tarjan(v, -1)
			}
		}
		// 合并顶点、重置数据
		for j := 0; j < len(vs); j += 2 {
			v, w := vs[j], vs[j+1]
			uf.union(v, w)
			graph[v] = nil
			graph[w] = nil
			dfn[v] = 0
			dfn[w] = 0
		}
	}

	var keyEdges, pseudokeyEdges []int
	for i, tp := range edgeType {
		if tp == 0 {
			pseudokeyEdges = append(pseudokeyEdges, i)
		} else if tp == 1 {
			keyEdges = append(keyEdges, i)
		}
	}
	return [][]int{keyEdges, pseudokeyEdges}
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}