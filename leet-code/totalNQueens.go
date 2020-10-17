package main

func totalNQueens(n int) int {
	clomuns := make(map[int]bool, 0)
	dia1 := make(map[int]bool, 0)
	dia2 := make(map[int]bool, 0)
	return backTrack(n, 0, clomuns, dia1, dia2)
}

func backTrack(n int, row int, clomuns map[int]bool, dia1 map[int]bool, dia2 map[int]bool) int {
	if n == row {
		return 1
	}
	count := 0
	for i := 0; i < n; i++ {
		if _, ok := clomuns[i]; ok {
			continue
		}
		d1 := row - i
		if _, ok := dia1[d1]; ok {
			continue
		}
		d2 := row + i
		if _, ok := dia2[d2]; ok {
			continue
		}
		clomuns[i] = true
		dia1[d1] = true
		dia2[d2] = true
		count += backTrack(n, row+1, clomuns, dia1, dia2)
		delete(clomuns, i)
		delete(dia1, d1)
		delete(dia2, d2)
	}
	return count

}
