package main

import "sort"

// Points is
type Points [][]int

// Len is
func (p Points) Len() int { return len(p) }

// Swap is
func (p Points) Swap(i, j int) { p[i], p[j] = p[j], p[i] }

// Less is
func (p Points) Less(i, j int) bool {
	return squareAbs(p[i][0])+squareAbs(p[i][1]) < squareAbs(p[j][0])+squareAbs(p[j][1])
}

func kClosest(points [][]int, K int) [][]int {
	sort.Sort(Points(points))
	return points[:K]
}

func squareAbs(i int) int {
	if i < 0 {
		i = -i
	}
	return i * i
}

// golang的sort自定义之后效率好像不得行。。手动排序试试

func kClosest2(points [][]int, K int) [][]int {
	kClosestQuickSort(points, 0, len(points)-1)
	return points[:K]
}

func kClosestQuickSort(points [][]int, left, right int) [][]int {
	if left >= right {
		return points
	}

	i, j := left, right
	flag := points[left]

	for i < j {
		for i < j && squareAbsPoints(points[j]) >= squareAbsPoints(flag) {
			j--
		}
		for i < j && squareAbsPoints(points[i]) <= squareAbsPoints(flag) {
			i++
		}
		temp := points[i]
		points[i] = points[j]
		points[j] = temp
	}
	points[left] = points[j]
	points[j] = flag
	kClosestQuickSort(points, left, j-1)
	kClosestQuickSort(points, j+1, right)
	return points
}

func squareAbsPoints(point []int) int {
	i := point[0]
	j := point[1]

	if i < 0 {
		i = -i
	}
	if j < 0 {
		j = -j
	}

	return i*i + j*j
}
