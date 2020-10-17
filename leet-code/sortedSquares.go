package main

func sortedSquares(A []int) []int {
	A = sortByAbs(A, 0, len(A)-1)

	for i := range A {
		A[i] = intSquare(A[i])
	}
	return A
}

func intSquare(a int) int {
	return a * a
}

func intAbs(a int) int {
	if a < 0 {
		return -a
	}
	return a
}

func sortByAbs(arr []int, left int, right int) []int {
	if left > right {
		return arr
	}

	i := left
	j := right
	flag := arr[left]
	for i < j {
		for i < j && intAbs(arr[j]) >= intAbs(flag) {
			j--
		}
		for i < j && intAbs(arr[i]) <= intAbs(flag) {
			i++
		}

		temp := arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}
	arr[left] = arr[i]
	arr[i] = flag
	sortByAbs(arr, left, j-1)
	sortByAbs(arr, j+1, right)
	return arr
}
