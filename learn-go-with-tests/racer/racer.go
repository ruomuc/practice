package racer

import (
	"fmt"
	"net/http"
	"time"
)

var tenSecondTimeout = time.Duration(10 * time.Second)

func ping(url string) chan bool {
	ch := make(chan bool)
	go func() {
		http.Get(url)
		ch <- true
	}()
	return ch
}

func Racer(a, b string, timeout time.Duration) (string, error) {
	select {
	case <-ping(a):
		return a, nil
	case <-ping(b):
		return b, nil
	case <-time.After(timeout):
		return "", fmt.Errorf("timed out waiting for %s and %s", a, b)
	}
}

//func getResponseDuration(url string) time.Duration {
//	start := time.Now()
//	http.Get(url)
//	return time.Since(start)
//}
