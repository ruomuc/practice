package main

import (
	"fmt"
	"log"
	"net/http"
)

type InMemoryPlayerStore struct{}

func (i *InMemoryPlayerStore) GetPlayerScore(name string) int {
	return 123
}

func main() {
	server := &PlayerServer{store: &InMemoryPlayerStore{}}
	if err := http.ListenAndServe(":5000", server); err != nil {
		log.Fatalf("could't listen on port 5000, err: %v", err)
	}
}

type PlayStore interface {
	GetPlayerScore(name string) int
}

type PlayerServer struct {
	store PlayStore
}

func (p *PlayerServer) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	player := r.URL.Path[len("/players/"):]
	fmt.Fprint(w, p.store.GetPlayerScore(player))
}

type StubPlayerStore struct {
	scores map[string]int
}

func (sp StubPlayerStore) GetPlayerScore(name string) int {
	score := sp.scores[name]
	return score
}
