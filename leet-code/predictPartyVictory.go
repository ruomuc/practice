package main

func predictPartyVictory(senate string) string {
	var r, d []int
	length := len(senate)
	for i, v := range senate {
		if v == 'R' {
			r = append(r, i)
		} else {
			d = append(d, i)
		}
	}

	for len(r) != 0 && len(d) != 0 {
		if r[0] < d[0] {
			r = append(r, r[0]+length)
		} else {
			d = append(d, d[0]+length)
		}
		r = r[1:]
		d = d[1:]
	}
	if len(r) == 0 {
		return "Radiant"
	}
	return "Dire"
}
