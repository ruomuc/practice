package main

func generateMatrix(n int) [][]int {
	var ans = make([][]int, n)
	for i := 0; i < n; i++ {
		ans[i] = make([]int, n)
	}

	var (
		value                    = 1
		left, right, top, bottom = 0, n - 1, 0, n - 1
	)

	for left <= right && top <= bottom {
		for column := left; column <= right; column++ {
			ans[top][column] = value
			value++
		}

		for row := top + 1; row <= bottom; row++ {
			ans[row][right] = value
			value++
		}

		for column := right - 1; column >= left; column-- {
			ans[bottom][column] = value
			value++
		}

		for row := bottom - 1; row > top; row-- {
			ans[row][left] = value
			value++
		}
		left++
		right--
		top++
		bottom--
	}

	return ans
}
