package main

func numRabbits(answers []int) (ans int) {
	dict := make(map[int]int)
	for i := range answers {
		dict[answers[i]]++
	}

	for x, y := range dict {
		ans += (x + y) / (y + 1) * (y + 1)
	}
	return ans
}
