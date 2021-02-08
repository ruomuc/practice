package main

func myPow(x float64, n int) float64 {
	var memo = make(map[int]float64)
	var pow func(x float64, n int) float64
	pow = func(x float64, n int) float64 {
		if n == 0 {
			return 1
		}
		var res float64
		flag := false
		if n < 0 {
			flag = true
			n = -n
		}
		if _, ok := memo[n]; ok {
			return memo[n]
		}
		if n%2 == 0 {
			res = pow(x, n/2) * pow(x, n/2)
		} else {
			res = pow(x, (n-1)/2) * pow(x, (n-1)/2) * x
		}
		if flag {
			res = float64(1 / res)
		}
		memo[n] = res
		return res
	}
	return pow(x, n)
}
