package main

func isPalindrome(x int) bool {
	if x == 0 {
		return true
	}
	if x < 0 || x%10 == 0 {
		return false
	}

	rev := 0
	for rev < x {
		rev = rev*10 + (x % 10)
		x = x / 10
	}

	if rev == x || rev/10 == x {
		return true
	}
	return false
}
