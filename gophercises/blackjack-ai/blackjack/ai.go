package blackjack

import (
	"deck"
	"fmt"
)

type AI interface {
	Results(hand [][]deck.Card, dealer []deck.Card)
	Play(hand []deck.Card, dealer deck.Card) Move
	Bet(shuffled bool) int
}

type dealerAI struct{}

func (d dealerAI) Results(hand [][]deck.Card, dealer []deck.Card) {
	panic("implement me")
}

func (d dealerAI) Play(hand []deck.Card, dealer deck.Card) Move {
	dealerScore := Score(hand...)
	if dealerScore <= 16 || (dealerScore == 17 && Soft(hand...)) {
		return MoveHit
	} else {
		return MoveStand
	}
}

func (d dealerAI) Bet(shuffled bool) int {
	panic("implement me")
}

func HumanAI() AI {
	return humanAI{}
}

type humanAI struct {
}

func (ai humanAI) Bet(shuffled bool) int {
	if shuffled {
		fmt.Println("The deck was just shuffled.")
	}
	fmt.Println("What would you like to bet?")
	var bet int
	fmt.Scanf("%d\n", &bet)
	return bet
}

func (ai humanAI) Play(hand []deck.Card, dealer deck.Card) Move {
	for {
		fmt.Println("Player", hand)
		fmt.Println("Dealer", dealer)
		fmt.Println("What will you do? (h)it, (s)tand, (d)ouble")
		var input string
		fmt.Scanf("%s\n", &input)
		switch input {
		case "h":
			return MoveHit
		case "s":
			return MoveStand
		case "d":
			return MoveDouble
		default:
			fmt.Println("Invalid option", input)
		}
	}
}

func (ai humanAI) Results(hand [][]deck.Card, dealer []deck.Card) {
	fmt.Println("==Finally Hands==")
	fmt.Println("Player", hand)
	fmt.Println("Dealer", dealer)
}
