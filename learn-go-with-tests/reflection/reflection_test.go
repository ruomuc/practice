package reflection

import (
	"reflect"
	"testing"
)

type Person struct {
	Name    string
	Profile Profile
}

type Profile struct {
	Age  int
	City string
}

func TestWalk(t *testing.T) {
	cases := []struct {
		Name          string
		Input         interface{}
		ExpectedCalls []string
	}{
		{"Struct with one string field",
			struct {
				Name string
				City string
				Age  int
			}{"Chris", "beijing", 22},
			[]string{"Chris", "beijing"},
		},
		{
			"nested fields",
			Person{
				"Chris",
				Profile{
					22, "beijing",
				},
			},
			[]string{"Chris", "beijing"},
		},
	}

	for _, test := range cases {
		t.Run(test.Name, func(t *testing.T) {
			var got []string
			walk(test.Input, func(input string) {
				got = append(got, input)
			})

			if !reflect.DeepEqual(got, test.ExpectedCalls) {
				t.Errorf("got %v but want %v ", got, test.ExpectedCalls)
			}
		})
	}
}
