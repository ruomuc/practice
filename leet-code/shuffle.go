package main

func shuffle(nums []int, n int) []int {
	m, result := 0, make([]int, len(nums))

	for i := range nums {
		if i%2 == 0 {
			result[i] = nums[m]
			m++
		} else {
			result[i] = nums[n]
			n++
		}
	}

	return result
}
