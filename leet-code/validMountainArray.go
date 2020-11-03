package main

func validMountainArray(A []int) bool {
	len := len(A)
	var i int

	if len == 0 || len < 3 {
		return false
	}

	for i+1 < len && A[i] < A[i+1] {
		i++
	}

	// 山顶在第一个或者最后一个，不是一个山脉
	if i == 0 || i == len-1 {
		return false
	}

	for i+1 < len && A[i] > A[i+1] {
		i++
	}

	return i == len-1
}
