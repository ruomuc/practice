package main

func restoreString(s string, indices []int) string {
	result := make([]byte, len(s))
	for i := range s {
		result[indices[i]] = s[i]
	}
	return string(result)
}
