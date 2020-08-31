package main

func shuffle(nums []int, n int) []int {
	m, result := 0, []int{}

	for i := range nums {
		if i%2 == 0 {
			result = append(result, nums[m])
			m++
		} else {
			result = append(result, nums[n])
			n++
		}
	}

	return result
}
