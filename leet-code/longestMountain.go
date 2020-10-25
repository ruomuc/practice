package main

func longestMountain(A []int) int {
	max := 0
	left := 0
	n := len(A)

	for left+2 < n {
		right := left + 1
		if A[left] < A[left+1] {
			for right+1 < n && A[right] < A[right+1] {
				right++
			}

			if right < n-1 && A[right] > A[right+1] {
				for right+1 < n && A[right] > A[right+1] {
					right++
				}
				if right-left+1 > max {
					max = right - left + 1
				}
			} else {
				right++
			}
		}
		left = right
	}
	return max
}
