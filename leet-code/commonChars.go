package main

import "math"

func commonChars(A []string) []string {
	ans := make([]string, 0)
	minFreq := make([]int, 26)

	for i := range minFreq {
		minFreq[i] = math.MaxInt64
	}

	for _, word := range A {
		freq := make([]int, 26)
		for _, c := range word {
			freq[c-'a']++
		}

		for i := range freq {
			if freq[i] < minFreq[i] {
				minFreq[i] = freq[i]
			}
		}
	}

	for i, v := range minFreq {
		for j := 0; j < v; j++ {
			ans = append(ans, string(rune(i)+'a'))
		}
	}
	return ans
}
