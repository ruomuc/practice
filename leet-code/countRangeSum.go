package main

func countRangeSum(nums []int, lower int, upper int) int {
	count := 0
	for i := range nums {
		sum := nums[i]
		if sum >= lower && sum <= upper {
			count++
		}
		for j := i + 1; j < len(nums); j++ {
			sum += nums[j]
			if sum >= lower && sum <= upper {
				count++
			}
		}
	}
	return count
}
