package main

func diagonalSum(mat [][]int) int {
	var result int
	for i, val := range mat {
		if i == len(mat)-i-1 {
			result += val[i]
		} else {
			result += val[i] + val[len(mat)-i-1]
		}
	}
	return result
}
