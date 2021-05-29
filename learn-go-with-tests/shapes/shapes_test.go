package shapes

import "testing"

func TestPerimeter(t *testing.T) {
	rectangle := Rectangle{10.11, 12.22}
	got := Perimeter(rectangle)
	want := 20.22 + 24.44
	if got != want {
		t.Errorf("got %.2f but want %.2f", got, want)
	}
}

func TestArea(t *testing.T) {

	//checkArea := func(t *testing.T, shape Shape, want float64) {
	//	t.Helper()
	//	got := shape.Area()
	//	if got != want {
	//		t.Errorf("got %.2f but want %.2f", got, want)
	//	}
	//}

	areaTests := []struct {
		name  string
		shape Shape
		want  float64
	}{
		{"Rectangle", Rectangle{12, 6}, 72.0},
		{"Circle", Circle{10}, 314.1592653589793},
		{"Triangle", Triangle{12, 6}, 36.10},
	}

	for _, at := range areaTests {
		t.Run(at.name, func(t *testing.T) {
			got := at.shape.Area()
			if got != at.want {
				t.Errorf("%#v got %.2f but want %.2f", at.shape, got, at.want)
			}
		})
	}

	//t.Run("test Rectangle Area", func(t *testing.T) {
	//	rectangle := Rectangle{10.0, 12.0}
	//	want := 120.0
	//	checkArea(t, rectangle, want)
	//})
	//
	//t.Run("test Circle Area", func(t *testing.T) {
	//	circle := Circle{10}
	//	want := 314.1592653589793
	//	checkArea(t, circle, want)
	//})
}
