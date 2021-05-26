package main

import "testing"

func TestHello(t *testing.T) {
	assertCorrectMessage := func(t *testing.T, got, want string) {
		// 告诉测试模块，这里是辅助函数
		// 通过这样做，当测试失败时所报告的行号将在函数调用中而不是在辅助函数内部
		t.Helper()
		if got != want {
			t.Errorf("got '%q' but want '%q", got, want)
		}
	}

	t.Run("say hello to people", func(t *testing.T) {
		name := "world"
		got := Hello("world", "")
		want := defaultPrefix + name
		assertCorrectMessage(t, got, want)
	})

	t.Run("say hello default to 'world'", func(t *testing.T) {
		got := Hello("", "")
		want := defaultPrefix + "world"
		assertCorrectMessage(t, got, want)
	})

	t.Run("say hello in chinese", func(t *testing.T) {
		language := chinese
		name := "中国"
		got := Hello(name, language)
		want := chinesePrefix + name
		assertCorrectMessage(t, got, want)
	})

	t.Run("say hello in fresh", func(t *testing.T) {
		language := fresh
		name := "monde"
		got := Hello(name, language)
		want := freshPrefix + name
		assertCorrectMessage(t, got, want)
	})
}
