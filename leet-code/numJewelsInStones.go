package main

func numJewelsInStones(J string, S string) int {
	sMap := make(map[byte]int)
	count := 0
	for i := range J {
		sMap[J[i]] = i
	}

	for i := range S {
		if _, ok := sMap[S[i]]; ok {
			count++
		}
	}
	return count
}

func numJewelsInStones2(J string, S string) int {
	count := 0
	for i := range J {
		for j := range S {
			if J[i] == S[j] {
				count++
			}
		}
	}
	return count
}
