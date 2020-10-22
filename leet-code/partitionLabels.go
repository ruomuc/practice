package main

func partitionLabels(S string) []int {
	res := make([]int, 0)
	arr := make([]int, 26)
	for i, v := range S {
		arr[v-'a'] = i
	}

	var start, end int
	for i, v := range S {
		end = max(end, arr[v-'a'])
		if i == end {
			res = append(res, end-start+1)
			start = end + 1
		}
	}
	return res
}
