package main

func isLongPressedName(name string, typed string) bool {
	var p1, p2 int
	for p2 < len(typed) {
		if p1 < len(name) && name[p1] == typed[p2] {
			p1++
			p2++
		} else if p2 > 0 && typed[p2] == typed[p2-1] {
			p2++
		} else {
			return false
		}
	}
	return p1 == len(name)
}
