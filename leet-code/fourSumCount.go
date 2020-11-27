package main

func fourSumCount(A []int, B []int, C []int, D []int) int {
	m := len(A)
	res := 0
	countMap := make(map[int]int)
	for i := 0; i < m; i++ {
		for j := 0; j < m; j++ {
			val := A[i] + B[j]
			if _, ok := countMap[val]; ok {
				countMap[val]++
			} else {
				countMap[val] = 1
			}
		}
	}

	for i := 0; i < m; i++ {
		for j := 0; j < m; j++ {
			val := -C[i] - D[j]
			if c, ok := countMap[val]; ok {
				res += c
			}
		}
	}
	return res
}
