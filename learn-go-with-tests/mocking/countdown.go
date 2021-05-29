package main

import (
	"fmt"
	"io"
	"os"
	"time"
)

const (
	finalWord      = "Go!"
	countDownStart = 3
)

func CountDown(out io.Writer, sleeper Sleeper) {
	for i := countDownStart; i > 0; i-- {
		sleeper.Sleep()
		fmt.Fprintln(out, i)
	}
	sleeper.Sleep()
	fmt.Fprint(out, finalWord)
}

type Sleeper interface {
	Sleep()
}

type spySleeper struct {
	Calls int
}

func (s *spySleeper) Sleep() {
	s.Calls++
}

type ConfigurableSleeper struct {
	duration time.Duration
}

func (o *ConfigurableSleeper) Sleep() {
	time.Sleep(o.duration)
}

const (
	write = "write"
	sleep = "sleep"
)

type CountDownOperationSpy struct {
	Calls []string
}

func (c *CountDownOperationSpy) Sleep() {
	c.Calls = append(c.Calls, sleep)
}

func (c *CountDownOperationSpy) Write(b []byte) (n int, err error) {
	c.Calls = append(c.Calls, write)
	return
}

func main() {
	sleeper := &ConfigurableSleeper{1 * time.Second}
	CountDown(os.Stdout, sleeper)
}
