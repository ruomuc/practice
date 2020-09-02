package main

func game(guess []int, answer []int) int {
	count := 0
	for i := range guess {
		if guess[i] == answer[i] {
			count++
		}
	}
	return count
}
