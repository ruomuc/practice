package main

func canEat(candiesCount []int, queries [][]int) []bool {
	n := len(candiesCount)
	preSum := make([]int, n+1)
	for i := 1; i < n; i++ {
		preSum[i] = preSum[i-1] + candiesCount[i]
	}

	ans := make([]bool, len(queries))
	for i, q := range queries {
		favoriteTypei, favoriteDayi, dailyCapi := q[0], q[1], q[2]

		x1 := favoriteDayi + 1
		y1 := dailyCapi * (favoriteDayi + 1)

		x2 := preSum[favoriteTypei-1] + 1
		y2 := preSum[favoriteTypei]

		ans[i] = !(x1 > y2 || y1 < x2)
	}
	return ans
}
