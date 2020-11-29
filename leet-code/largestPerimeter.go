package main

import "sort"

func largestPerimeter(A []int) int {
	sort.Slice(A, func(a, b int) bool {
		return A[a] > A[b]
	})

	for i := 0; i < len(A)-2; i++ {
		if A[i] < A[i+1]+A[i+2] {
			return A[i] + A[i+1] + A[i+2]
		}
	}
	return 0
}
