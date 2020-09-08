package main

func numberOfSteps(num int) int {
	step := 0
	for num > 0 {
		if num%2 == 0 {
			num /= 2
			step++
		}
		if num%2 != 0 {
			num--
			step++
		}
	}
	return step
}
