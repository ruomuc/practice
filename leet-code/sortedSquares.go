package main

func sortedSquares(A []int) []int {

}

func sortByAbs(arr []int, left int, right int) []int {
	if left < right {
		return arr
	}

	i := left
	j := right
	flag := arr[left]

	for i < j {
		for i < j && arr[j] >= flag {
			j--
		}
		for i < j && arr[j] <= flag {
			i++
		}

		temp := arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}
	arr[left] = arr[j]
	arr[j] = flag
	sortByAbs(arr, left, j-1)
	sortByAbs(arr, j+1, right)
	return arr
}
