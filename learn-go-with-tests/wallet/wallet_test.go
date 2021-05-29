package wallet

import (
	"testing"
)

func TestWallet(t *testing.T) {

	t.Run("Deposit", func(t *testing.T) {
		wallet := Wallet{}

		wallet.Deposit(BitCoin(10))
		want := BitCoin(10)

		assertBalance(t, wallet, want)
	})

	t.Run("Withdraw", func(t *testing.T) {
		wallet := Wallet{Balance: BitCoin(20)}

		err := wallet.Withdraw(10)
		want := BitCoin(10)

		assertBalance(t, wallet, want)
		assertNoError(t, err)
	})

	t.Run("Withdraw insufficient funds", func(t *testing.T) {
		startingBalance := BitCoin(20)
		wallet := Wallet{Balance: startingBalance}
		err := wallet.Withdraw(BitCoin(100))

		assertBalance(t, wallet, startingBalance)
		assertError(t, err, insufficientFundsErr)
	})
}

func assertBalance(t *testing.T, wallet Wallet, want BitCoin) {
	got := wallet.GetBalance()
	if got != want {
		t.Errorf("got %s but want  %s", got, want)
	}
}

func assertError(t *testing.T, got error, want error) {
	if got == nil {
		t.Fatal("wanted an error but didnt get one")
	}
	if got != want {
		t.Errorf("got '%s' but want '%s'", got, want)
	}
}

func assertNoError(t *testing.T, got error) {
	if got != nil {
		t.Fatal("got an error but didn't want one")
	}
}
