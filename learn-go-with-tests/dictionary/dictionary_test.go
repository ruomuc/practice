package dictionary

import (
	"testing"
)

func TestDelete(t *testing.T) {
	word := "test"
	description := "this is just a test"
	dictionary := Dictionary{word: description}
	dictionary.Delete(word)
	_, err := dictionary.Search(word)
	if err != errorNotFoundWord {
		t.Errorf("Expected '%s' to be deleted", word)
	}
}

func TestUpdate(t *testing.T) {
	t.Run("exist word", func(t *testing.T) {
		word := "test"
		description := "this is just a test"
		dictionary := Dictionary{word: description}
		newDescription := "new description"

		err := dictionary.Update(word, newDescription)
		assertError(t, err, nil)
		assertDescription(t, dictionary, word, newDescription)
	})

	t.Run("new word", func(t *testing.T) {
		word := "test"
		description := "this is just a test"
		dictionary := Dictionary{word: description}
		newWord := "new description"

		err := dictionary.Update(newWord, description)
		assertError(t, err, errorNotExistWord)
		assertDescription(t, dictionary, word, description)
	})
}

func TestAdd(t *testing.T) {
	t.Run("new word", func(t *testing.T) {
		dictionary := Dictionary{}
		word, description := "test", "this is just a test"
		_ = dictionary.Add(word, description)
		assertDescription(t, dictionary, word, description)
	})

	t.Run("exist word", func(t *testing.T) {
		word := "test"
		description := "this is just a test"
		dictionary := Dictionary{word: description}
		err := dictionary.Add(word, description)

		assertError(t, err, errorExistWord)
	})
}

func TestSearch(t *testing.T) {
	dictionary := Dictionary{"test": "this is just a test"}
	t.Run("know word", func(t *testing.T) {
		got, _ := dictionary.Search("test")
		want := "this is just a test"

		assertString(t, got, want)
	})

	t.Run("unknown word", func(t *testing.T) {
		_, err := dictionary.Search("unknown")
		want := errorNotFoundWord
		assertError(t, err, want)
	})
}

func assertString(t *testing.T, got, want string) {
	t.Helper()
	if got != want {
		t.Errorf("got '%s' but want '%s' given '%s'", got, want, "test")
	}
}

func assertError(t *testing.T, got, want error) {
	t.Helper()
	if got != want {
		t.Errorf("got error '%s' want '%s' ", got, want)
	}
}

func assertDescription(t *testing.T, dictionary Dictionary, word, description string) {
	t.Helper()

	got, err := dictionary.Search(word)
	if err != nil {
		t.Fatal("should find added work but get an error:", err)
	}
	if description != got {
		t.Errorf("got '%s' but want '%s'", got, description)
	}
}
