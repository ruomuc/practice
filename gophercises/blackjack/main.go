package main

import (
	"deck"
	"fmt"
	"strings"
)

func main() {
	cards := deck.New(deck.Deck(3), deck.Shuffle)
	var card deck.Card
	var player, dealer Hand
	for i := 0; i < 2; i++ {
		for _, hand := range []*Hand{&player, &dealer} {
			card, cards = draw(cards)
			*hand = append(*hand, card)
		}
	}

	var input string
	for input != "s" {
		fmt.Println("Player:", player)
		fmt.Println("Dealer:", dealer.DealerString())
		fmt.Println("What will you do? (s)tand or (h)it")
		fmt.Scanf("%s\n", &input)
		switch input {
		case "h":
			card, cards = draw(cards)
			player = append(player, card)
		}
	}
	fmt.Println("==finally hands==")
	fmt.Println("Player:", player)
	fmt.Println("Dealer:", dealer)
}

func draw(cards []deck.Card) (deck.Card, []deck.Card) {
	return cards[0], cards[1:]
}

type Hand []deck.Card

func (h Hand) String() string {
	temp := make([]string, len(h))
	for i := range h {
		temp[i] = h[i].String()
	}
	return strings.Join(temp, ",")
}

func (h Hand) DealerString() string {
	return h[0].String() + " **hidden**"
}
