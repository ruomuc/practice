package main

func islandPerimeter(grid [][]int) int {
	sum := 0
	for i := range grid {
		for j := range grid[i] {
			if grid[i][j] == 1 {
				if i-1 < 0 {
					sum++
				} else if grid[i-1][j] == 0 {
					sum++
				}

				if j-1 < 0 {
					sum++
				} else if grid[i][j-1] == 0 {
					sum++
				}

				if i+1 >= len(grid) {
					sum++
				} else if grid[i+1][j] == 0 {
					sum++
				}

				if j+1 >= len(grid[i]) {
					sum++
				} else if grid[i][j+1] == 0 {
					sum++
				}
			}
		}
	}
	return sum
}
