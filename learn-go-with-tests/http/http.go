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

func (i *InMemoryPlayerStore) RecordWin(name string) {}

func main() {
	server := &PlayerServer{store: &InMemoryPlayerStore{}}
	if err := http.ListenAndServe(":5000", server); err != nil {
		log.Fatalf("could't listen on port 5000, err: %v", err)
	}
}

type PlayStore interface {
	GetPlayerScore(name string) int
	RecordWin(name string)
}

type PlayerServer struct {
	store PlayStore
}

func (p *PlayerServer) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	player := r.URL.Path[len("/players/"):]
	switch r.Method {
	case http.MethodGet:
		p.showScore(w, player)
	case http.MethodPost:
		p.processWin(w, player)
	}
}

func (p *PlayerServer) showScore(w http.ResponseWriter, player string) {
	score := p.store.GetPlayerScore(player)
	if score == 0 {
		w.WriteHeader(http.StatusNotFound)
	}
	fmt.Fprint(w, score)
}

func (p *PlayerServer) processWin(w http.ResponseWriter, player string) {
	p.store.RecordWin(player)
	w.WriteHeader(http.StatusOK)
}

type StubPlayerStore struct {
	scores   map[string]int
	winCalls []string
}

func (sp *StubPlayerStore) GetPlayerScore(name string) int {
	score := sp.scores[name]
	return score
}

func (sp *StubPlayerStore) RecordWin(name string) {
	sp.winCalls = append(sp.winCalls, name)
}
