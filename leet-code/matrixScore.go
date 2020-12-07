package main

import "math"

func matrixScore(A [][]int) int {
	row, column := len(A), len(A[0])
	// 如果第一列不是1，转为1
	for i := 0; i < row; i++ {
		if A[i][0] == 0 {
			for j := 0; j < column; j++ {
				if A[i][j] == 0 {
					A[i][j] = 1
				} else {
					A[i][j] = 0
				}
			}
		}
	}
	// 统计0出现的次数
	zeroCount := make([]int, column)
	for i := 0; i < row; i++ {
		for j := 0; j < column; j++ {
			if A[i][j] == 0 {
				zeroCount[j]++
			}
		}
	}
	// 除了第一列，其它列的1越多越好
	halfColumn := row / 2
	for i := 1; i < column; i++ {
		if zeroCount[i] > halfColumn {
			for j := 0; j < row; j++ {
				if A[j][i] == 0 {
					A[j][i] = 1
				} else {
					A[j][i] = 0
				}
			}
		}
	}
	// 计算
	ans := 0
	for i := 0; i < row; i++ {
		for j := 0; j < column; j++ {
			if A[i][j] == 1 {
				ans += int(math.Pow(2, float64(column-j-1)))
			}
		}
	}
	return ans
}
