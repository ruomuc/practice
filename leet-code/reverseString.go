package main

func reverseString(s []byte) {
	var temp byte
	len := len(s)
	for i := 0; i < len/2; i++ {
		temp = s[i]
		s[i] = s[len-i-1]
		s[len-i-1] = temp
	}
}
