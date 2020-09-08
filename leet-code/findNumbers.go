package main

func findNumbers(nums []int) int {
	var count int
	for _, val := range nums {
		c := 0
		for val > 0 {
			val /= 10
			c++
		}
		if c%2 == 0 {
			count++
		}
	}
	return count
}
