package main

import "sort"

func allCellsDistOrder(R int, C int, r0 int, c0 int) [][]int {
	matrix := make([][]int, 0)

	for i := 0; i < R; i++ {
		for j := 0; j < C; j++ {
			var temp = []int{i, j}
			matrix = append(matrix, temp)
		}
	}

	var distance = func(d []int) int {
		return abs(d[0]-r0) + abs(d[1]-c0)
	}

	sort.Slice(matrix, func(i, j int) bool {
		return distance(matrix[i]) < distance(matrix[j])
	})
	return matrix
}

func allCellsDistOrder2(R int, C int, r0 int, c0 int) [][]int {
	maxDis := max(r0, R-1-r0) + max(c0, C-1-c0)
	buckets := make([][][]int, maxDis)

	for i := 0; i < R; i++ {
		for j := 0; j < C; j++ {
			dis := abs(i-r0) + abs(j-c0)
			buckets[dis] = append(buckets[dis], []int{i, j})
		}
	}

	res := make([][]int, 0)
	for _, bk := range buckets {
		res = append(res, bk...)
	}
	return res
}
