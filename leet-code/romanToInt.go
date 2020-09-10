package main

func romanToInt(s string) int {
	romanMap := make(map[byte]int)
	romanMap['I'] = 1
	romanMap['V'] = 5
	romanMap['X'] = 10
	romanMap['L'] = 50
	romanMap['C'] = 100
	romanMap['D'] = 500
	romanMap['M'] = 1000

	prev := romanMap[s[0]]
	result := 0
	for i := 1; i < len(s); i++ {
		currv := romanMap[s[i]]
		if prev < currv {
			result -= prev
		} else {
			result += prev
		}
		prev = currv
	}
	result += prev
	return result
}
