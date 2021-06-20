package main

import (
	"fmt"
	phoneDB "phone/db"
	"regexp"
)

func main() {
	db, err := phoneDB.Open("mysql", "gophercises_phone")
	must(err)
	defer func() {
		must(db.Close())
	}()

	must(db.DropPhoneNumbersTable())
	must(db.CreatePhoneNumbersTable())
	must(db.SeedData())

	phones, err := db.AllPhones()
	must(err)
	for _, p := range phones {
		fmt.Printf("%+v\n", p)
		number := normalize(p.Number)
		if number != p.Number {
			fmt.Println("Updating or removing ", number)
			exist, err := db.FindPhoneByNumber(number)
			must(err)

			if exist {
				must(db.DeletePhone(p.ID))
			} else {
				p.Number = number
				must(db.UpdatePhone(p))
			}
		} else {
			fmt.Println("No changes required!")
		}
	}
}

func normalize(input string) string {
	res := regexp.MustCompile("\\D")
	return res.ReplaceAllString(input, "")
}

//func normalize(input string) string {
//	var buf bytes.Buffer
//	fmt.Println(input)
//	for _, ch := range input {
//		if ch >= '0' && ch <= '9' {
//			buf.WriteRune(ch)
//		}
//	}
//	return buf.String()
//}

func must(err error) {
	if err != nil {
		panic(err)
	}
}
