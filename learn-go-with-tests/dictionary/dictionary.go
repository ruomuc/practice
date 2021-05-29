package dictionary

type Dictionary map[string]string
type DictionaryError string

const (
	errorNotFoundWord = DictionaryError("could not find the word")
	errorExistWord    = DictionaryError("already exist word")
)

func (dictionary Dictionary) Add(word, description string) error {
	_, err := dictionary.Search(word)
	switch err {
	case errorNotFoundWord:
		dictionary[word] = description
	case nil:
		return errorExistWord
	default:
		return err
	}
	return nil
}

func (dictionary Dictionary) Search(word string) (string, error) {
	s, ok := dictionary[word]
	if !ok {
		return "", errorNotFoundWord
	}
	return s, nil
}

func (e DictionaryError) Error() string {
	return string(e)
}
