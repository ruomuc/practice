package main

func kidsWithCandies(candies []int, extraCandies int) []bool {
	max := candies[0]
	for _, val := range candies {
		if val > max {
			max = val
		}
	}
	result := make([]bool, len(candies))
	for i, val := range candies {
		if val+extraCandies >= max {
			result[i] = true
		} else {
			result[i] = false
		}
	}
	return result
}
