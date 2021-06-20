package main

import "testing"

func TestNormalize(t *testing.T) {
	testcases := []struct {
		input string
		want  string
	}{
		{"123456789", "123456789"},
		{"1234567-890", "1234567890"},
		{"(123), 456 7892", "1234567892"},
		{"123 - 456 - 7894", "1234567894"},
		{"12345@67892", "1234567892"},
	}

	for _, tc := range testcases {
		t.Run(tc.input, func(t *testing.T) {
			got := normalize(tc.input)
			if got != tc.want {
				t.Errorf("got %s but want %s", got, tc.want)
			}
		})
	}
}
