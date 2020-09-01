package main

func reverseLeftWords(s string, n int) string {
	var str string = ""
	length := len(s)
	for i := n; i < length; i = (i + 1) % length {
		if len(str) == length {
			return str
		}
		str += string(s[i])
	}
	return str
}
