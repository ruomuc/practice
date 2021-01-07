package main

// bfs广度优先搜索
func findCircleNum(isConnected [][]int) int {
	ans := 0
	// 记录访问过的城市
	visited := make([]bool, len(isConnected))
	for i, v := range visited {
		if !v {
			ans++
			queue := []int{i}
			for len(queue) > 0 {
				temp := queue[0]
				queue = queue[1:]
				visited[temp] = true

				for to, con := range isConnected[temp] {
					if con == 1 && !visited[to] {
						queue = append(queue, to)
					}
				}
			}
		}
	}
	return ans
}
