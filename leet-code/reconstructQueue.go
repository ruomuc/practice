package main

import "sort"

func reconstructQueue(people [][]int) [][]int {
	m := len(people)
	res := make([][]int, m)

	sort.Slice(people, func(i, j int) bool {
		a, b := people[i], people[j]
		if a[0] == b[0] {
			return a[1] > b[1]
		}
		return a[0] < b[0]
	})

	for i := 0; i < m; i++ {
		size := people[i][1]
		for j := range res {
			if res[j] != nil {
				if size == 0 {
					res[j] = people[i]
					break
				}
				size--
			}
		}
	}
	return res
}

func reconstructQueue2(people [][]int) [][]int {
	m := len(people)
	res := make([][]int, m)

	sort.Slice(people, func(i, j int) bool {
		a, b := people[i], people[j]
		if a[0] == b[0] {
			return a[1] < b[1]
		}
		return a[0] > b[0]
	})

	for i := range people {
		copy(people[people[i][1]+1:i+1], people[people[i][1]:i])
		people[people[i][1]] = people[i]
	}

	return res
}
