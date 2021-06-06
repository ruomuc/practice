package main

import (
	"encoding/json"
	"fmt"
	"io"
)

type FileSystemStore struct {
	database io.ReadWriteSeeker
	league   League
}

func NewFileSystemPlayerStore(database io.ReadWriteSeeker) (*FileSystemStore, error) {
	database.Seek(0, 0)
	league, err := NewLeague(database)
	if err != nil {
		return nil, fmt.Errorf("problem loading player store from file %v", err)
	}
	return &FileSystemStore{database, league}, nil
}

func (f *FileSystemStore) GetLeague() League {
	f.database.Seek(0, 0)
	league, _ := NewLeague(f.database)
	return league
}

func (f *FileSystemStore) GetPlayerScore(name string) int {
	player := f.GetLeague().Find(name)
	if player != nil {
		return player.Wins
	}
	return 0
}

func (f FileSystemStore) RecordWin(name string) {
	league := f.GetLeague()

	player := league.Find(name)
	if player != nil {
		player.Wins++
	} else {
		league = append(league, Player{name, 1})
	}

	f.database.Seek(0, 0)
	json.NewEncoder(f.database).Encode(league)
}

type League []Player

func (l League) Find(name string) *Player {
	for i, p := range l {
		if p.Name == name {
			return &l[i]
		}
	}
	return nil
}
