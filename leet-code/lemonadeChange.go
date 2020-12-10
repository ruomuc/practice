package main

func lemonadeChange(bills []int) bool {
	var five, ten int
	for _, v := range bills {
		if v == 5 {
			five++
		} else if v == 10 && five >= 1 {
			ten++
			five--
		} else if v == 20 {
			if five >= 1 && ten >= 1 {
				five--
				ten--
			} else if five >= 3 {
				five -= 3
			} else {
				return false
			}
		} else {
			return false
		}
	}
	return true
}
