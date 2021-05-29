package wallet

import (
	"errors"
	"fmt"
)

type BitCoin int

type Wallet struct {
	Balance BitCoin
}

var insufficientFundsErr = errors.New("cant withdraw, insufficient funds")

func (w *Wallet) Deposit(amount BitCoin) {
	w.Balance = amount
}

func (w *Wallet) GetBalance() BitCoin {
	return w.Balance
}

func (w *Wallet) Withdraw(amount BitCoin) error {
	if amount > w.Balance {
		return insufficientFundsErr
	}
	w.Balance -= amount
	return nil
}

func (b BitCoin) String() string {
	return fmt.Sprintf("%d BTC", b)
}
