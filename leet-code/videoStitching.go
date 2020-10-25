func videoStitching(clips [][]int, T int) int {
	ans := 0
	maxRange := make([]int, T)
	for _, val := range clips {
		l, r := val[0], val[1]
		if l < T && r > maxRange[l] {
			maxRange[l] = r
		}
	}

	pre := 0
	last := 0
	for i := range maxRange {
		if last < maxRange[i] {
			last = maxRange[i]
		}
		if i == last {

			return -1
		}
		if i == pre {
			ans++
			pre = last
		}
	}
	return ans
}