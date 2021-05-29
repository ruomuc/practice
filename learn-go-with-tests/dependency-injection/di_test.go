package dependency_injection

import (
	"bytes"
	"testing"
)

func TestGreet(t *testing.T) {
	buffer := bytes.Buffer{}
	Greet(&buffer, "Chris")

	got := buffer.String()
	want := "hello,Chris"
	if got != want {
		t.Errorf("got '%s' but want '%s'", got, want)
	}
}
