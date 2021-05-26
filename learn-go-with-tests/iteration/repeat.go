package iteration

func Repeat(c string, repeatCount int) (repeated string) {
	for i := 0; i < repeatCount; i++ {
		repeated += c
	}
	return
}
