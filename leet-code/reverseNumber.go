package main

import "math"

func reverse(x int) int {
	max, min := math.Pow(2, 31)-1, -math.Pow(2, 31)
	res := 0
	for x != 0 {
		res = res*10 + x%10
		x = x / 10
	}
	fres := float64(res)
	if fres > max || fres < min {
		return 0
	}
	return res
}

