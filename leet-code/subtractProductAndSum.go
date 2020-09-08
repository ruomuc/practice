package main

func subtractProductAndSum(n int) int {
	var add int
	var mult = 1
	for n > 0 {
		add += n % 10
		mult *= n % 10
		n = n / 10
	}
	return mult - add
}
