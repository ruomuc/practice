package main

func isIsomorphic(s string, t string) bool {
	m, n := len(s), len(t)
	sMap := make(map[byte]byte)
	tMap := make(map[byte]byte)

	for i := 0; i < m; i++ {
		sv, tv := s[i], t[i]
		if sMap[sv] > 0 && sMap[sv] != tv || tMap[tv] > 0 && tMap[tv] != sv {
			return false
		}
		sMap[sv] = tv
		tMap[tv] = sv
	}
	return true
}
