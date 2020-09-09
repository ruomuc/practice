package main

func minTimeToVisitAllPoints(points [][]int) int {
	var total int
	for i := 1; i < len(points); i++ {
		val := points[i]
		prev := points[i-1]
		x, y := 0, 0
		x = val[0] - prev[0]
		y = val[1] - prev[1]
		if x < 0 {
			x = -x
		}
		if y < 0 {
			y = -y
		}
		if x > y {
			total += x
		} else {
			total += y
		}
	}
	return total
}
