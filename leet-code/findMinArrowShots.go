package main

import "sort"

func findMinArrowShots(points [][]int) int {
	sort.Slice(points, func(a, b int) bool {
		return points[a][1] < points[b][1]
	})
	res := 0
	for len(points) > 0 {
		arrow := points[0][1]
		i := 0
		for i <= len(points)-1 && points[i][0] <= arrow && points[i][1] >= arrow {
			i++
		}
		res++
		points = points[i:]
	}
	return res
}
