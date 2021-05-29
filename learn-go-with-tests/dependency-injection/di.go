package dependency_injection

import (
	"fmt"
	"io"
)

func Greet(write io.Writer, name string) {
	_, _ = fmt.Fprintf(write, "hello,%s", name)
}
