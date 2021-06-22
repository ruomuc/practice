package deck

import (
	"fmt"
	"math/rand"
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

func TestJokers(t *testing.T) {
	want := 2
	cards := New(Jokers(want))
	count := 0
	for _, c := range cards {
		if c.Suit == Joker {
			count++
		}
	}
	if count != want {
		t.Errorf("want %d Jokers but get %d", want, count)
	}
}

func TestFilter(t *testing.T) {
	filter := func(card Card) bool {
		return card.Rank == Two || card.Rank == Three
	}
	cards := New(Filter(filter))
	for _, c := range cards {
		if c.Rank == Two || c.Rank == Three {
			t.Errorf("Expect filter out two and three rank cards")
		}
	}
}

func TestDeck(t *testing.T) {
	cards := New(Deck(3))
	if len(cards) != 13*4*3 {
		t.Errorf("Expected %d but got %d cards", 13*4*3, len(cards))
	}
}

func TestShuffle(t *testing.T) {
	// [40 35 50 0 44 7 1 16 13 4 21 12 23 34 19 11 42 20 17 48 27 9 43 46 47 45 5 49 51 30 41 26 25 32 39 28 37 31 33 10 22 8 6 29 36 18 14 2 15 3 38 24]
	shuffleRand = rand.New(rand.NewSource(0))
	origin := New()
	first := origin[40]
	second := origin[35]

	cards := New(Shuffle)
	if cards[0] != first {
		t.Errorf("Expected the first card is %s ,but get %s.", first, cards[0])
	}
	if cards[1] != second {
		t.Errorf("Expected the second card is %s ,but get %s.", second, cards[1])
	}
}
