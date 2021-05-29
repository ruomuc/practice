package racer

import (
	"net/http"
	"net/http/httptest"
	"testing"
	"time"
)

func TestRacer(t *testing.T) {
	t.Run("return fast url", func(t *testing.T) {
		slowServer := makeMockRacerServer(20 * time.Millisecond)
		fastServer := makeMockRacerServer(10 * time.Millisecond)

		defer slowServer.Close()
		defer fastServer.Close()

		slowURL := slowServer.URL
		fastURL := fastServer.URL

		want := fastURL
		got, _ := Racer(slowURL, fastURL, tenSecondTimeout)
		if got != want {
			t.Errorf("got '%s' but want '%s' ", got, want)
		}
	})

	t.Run("return an error if a server didn't response within 10s", func(t *testing.T) {
		serverA := makeMockRacerServer(11 * time.Second)
		defer serverA.Close()

		_, err := Racer(serverA.URL, serverA.URL, tenSecondTimeout)
		if err == nil {
			t.Errorf("excepet an error but didn't get")
		}
	})

}

func makeMockRacerServer(delay time.Duration) *httptest.Server {
	return httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, request *http.Request) {
		time.Sleep(delay)
		w.WriteHeader(http.StatusOK)
	}))
}
