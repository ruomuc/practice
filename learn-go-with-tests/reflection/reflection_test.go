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
	t.Run("test string,struct,array and slice", func(t *testing.T) {
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
			{
				"Pointers to things",
				&Person{
					"Chris",
					Profile{33, "shanghai"},
				},
				[]string{"Chris", "shanghai"},
			},
			{"Slices",
				[]Profile{
					{33, "xian"},
					{44, "chengdu"},
				},
				[]string{"xian", "chengdu"},
			},
			{"Arrays",
				[2]Profile{
					{33, "xian"},
					{44, "chengdu"},
				},
				[]string{"xian", "chengdu"}},
		}

		for _, test := range cases {
			t.Run(test.Name, func(t *testing.T) {
				var got []string
				walk(test.Input, func(input string) {
					got = append(got, input)
				})

				if !reflect.DeepEqual(got, test.ExpectedCalls) {
					t.Errorf("testname: %s, got %v but want %v ", test.Name, got, test.ExpectedCalls)
				}
			})
		}
	})

	t.Run("test map", func(t *testing.T) {
		aMap := map[string]string{
			"Foo": "bar",
			"Baz": "boz",
		}

		var got []string
		walk(aMap, func(input string) {
			got = append(got, input)
		})

		assertContains(t, got, "bar")
		assertContains(t, got, "boz")
	})
}

func assertContains(t *testing.T, got []string, want string) {
	t.Helper()
	contains := false
	for _, x := range got {
		if x == want {
			contains = true
			break
		}
	}
	if !contains {
		t.Errorf("expected %+v to contains '%s' but it didin't ", got, want)
	}
}
