package main

const defaultPrefix string = "Hello,"
const chinesePrefix string = "你好,"
const freshPrefix string = "Bonjour,"
const chinese string = "chinese"
const fresh string = "fresh"

func main() {
	name := "zm"
	print(Hello(name, ""))
}

func Hello(name, language string) string {
	if name == "" {
		name = "world"
	}
	return greetingPrefix(language) + name
}

func greetingPrefix(language string) (prefix string) {
	switch language {
	case chinese:
		prefix = chinesePrefix
	case fresh:
		prefix = freshPrefix
	default:
		prefix = defaultPrefix
	}
	return
}
