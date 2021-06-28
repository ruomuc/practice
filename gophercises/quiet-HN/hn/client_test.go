package hn

import (
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"
)

func setup() (string, func()) {
	mux := http.NewServeMux()
	mux.HandleFunc("/topstories.json", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "[0,1,2,3,4]")
	})
	mux.HandleFunc("/item/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "{\"by\":\"test_user\",\"descendants\":10,\"id\":1,\"kids\":[16732999,16729637,16729517,16729595],\"score\":34,\"time\":1522599083,\"title\":\"Test Story Title\",\"type\":\"story\",\"url\":\"https://www.test-story.com\"}")
	})
	server := httptest.NewServer(mux)
	return server.URL, func() { server.Close() }
}

func TestClient_TopItems(t *testing.T) {
	baseUrl, serverClose := setup()
	defer serverClose()

	c := Client{apiBase: baseUrl}
	ids, err := c.TopItems()
	if err != nil {
		t.Errorf("c.TopItems recived an error: %s", err.Error())
	}
	if len(ids) != 5 {
		t.Errorf("len(ids): want %d but got %d", 5, len(ids))
	}
}

func TestClient_GetItem(t *testing.T) {
	baseUrl, serverClose := setup()
	defer serverClose()

	c := Client{apiBase: baseUrl}
	item, err := c.GetItem(1)
	if err != nil {
		t.Errorf("client.GetItem() received an error: %s", err.Error())
	}
	if item.By != "test_user" {
		t.Errorf("item.By want %s but got %s", "test_user", item.By)
	}
}
