package cyoa

import (
	"encoding/json"
	"html/template"
	"io"
	"log"
	"net/http"
	"strings"
)

var tpl *template.Template

var defaultHandlerTempl = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>{{.Title}}</h1>
{{range .Paragraphs}}
<p>{{.}}</p>
{{end}}
<ul>
    {{range .Options}}
    <li><a href="/{{.Chapter}}">{{.Text}}</a></li>
    {{end}}
</ul>
</body>
</html>
`

func init() {
	tpl = template.Must(template.New("").Parse(defaultHandlerTempl))
}

type Story map[string]Chapter

type Chapter struct {
	Title      string   `json:"title"`
	Paragraphs []string `json:"store"`
	Options    []Option `json:"options"`
}

type Option struct {
	Text    string `json:"text"`
	Chapter string `json:"arc"`
}

func JsonStory(r io.Reader) (Story, error) {
	var story Story
	decoder := json.NewDecoder(r)
	err := decoder.Decode(&story)
	if err != nil {
		return nil, err
	}
	return story, nil
}

func NewHandler(s Story, t *template.Template) http.Handler {
	if t == nil {
		t = tpl
	}
	return handler{s, t}
}

type handler struct {
	s Story
	t *template.Template
}

func (h handler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path := strings.TrimSpace(r.URL.Path)
	if path == "" || path == "/" {
		path = "/intro"
	}
	path = path[1:]

	if chapter, ok := h.s[path]; ok {
		err := tpl.Execute(w, chapter)
		if err != nil {
			log.Printf("%v", err)
			http.Error(w, "Something rong...", http.StatusInternalServerError)
		}
		return
	}
	http.Error(w, "Chapter not found", http.StatusNotFound)
}
