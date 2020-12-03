package main

// 线性筛选素数
func countPrimes(n int) int {
	var prime []int
	// 默认是false，代表素数
	isPrime := make([]bool, n)

	for i := 2; i < n; i++ {
		if !isPrime[i] {
			prime = append(prime, i)
		}
		for j := 0; j < len(prime) && i*prime[j] < n; j++ {
			isPrime[i*prime[j]] = true
			if i%prime[j] == 0 {
				break
			}
		}
	}
	return len(prime)
}

// 埃氏筛选
func countPrimes2(n int) int {
	var ans int
	isPrime := make([]bool, n)

	for i := 2; i < n; i++ {
		if !isPrime[i] {
			ans++
			for j := i * i; j < n; j += i {
				isPrime[j] = true
			}
		}

	}
	return ans
}
