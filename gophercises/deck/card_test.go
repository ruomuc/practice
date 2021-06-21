package deck

import (
	"fmt"
	"testing"
)

func ExampleCard() {
	fmt.Println(Card{Suit: Heart, Rank: Ace})
	// output:
	// Ace of Hearts
}

func TestNew(t *testing.T) {
	cards := New(DefaultSort)
	if len(cards) != 13*4 {
		t.Errorf("Wrong number of card in new deck")
	}
}

func TestDefaultSort(t *testing.T) {
	cards := New(DefaultSort)
	want := Card{Suit: Spade, Rank: Ace}
	if cards[0] != want {
		t.Errorf("Expect Ace of Spades but got :%+v", cards[0])
	}
}

func TestSort(t *testing.T) {
	cards := New(Sort(Less))
	want := Card{Suit: Spade, Rank: Ace}
	if cards[0] != want {
		t.Errorf("Expect Ace of Spades but got :%+v", cards[0])
	}
}
