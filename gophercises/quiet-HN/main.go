package main

import (
	"flag"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"net/url"
	"quiet-HN/hn"
	"strings"
	"time"
)

func main() {
	var port, numStories int
	flag.IntVar(&port, "port", 3000, "server listen port")
	flag.IntVar(&numStories, "num_stories", 30, "the num of top stories to display")
	flag.Parse()

	tpl := template.Must(template.ParseFiles("./index.html"))
	http.HandleFunc("/", handler(numStories, tpl))
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), nil))
}

type item struct {
	hn.Item
	Host string
}

type templateData struct {
	Stories []item
	Time    time.Duration
}

func handler(numStories int, tpl *template.Template) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		var client hn.Client
		ids, err := client.TopItems()
		if err != nil {
			http.Error(w, "failed to get top stories", http.StatusInternalServerError)
			return
		}

		var stories []item
		for _, id := range ids {
			hnItem, err := client.GetItem(id)
			if err != nil {
				continue
			}
			item := parseHNItem(hnItem)
			if isStoryLink(item) {
				stories = append(stories, item)
				if len(stories) >= numStories {
					break
				}
			}
		}

		data := templateData{
			Stories: stories,
			Time:    time.Now().Sub(start),
		}
		err = tpl.Execute(w, data)
		if err != nil {
			http.Error(w, "Failed to process the template", http.StatusInternalServerError)
			return
		}
	})
}

func isStoryLink(item item) bool {
	return item.Type == "story" && item.URL != ""
}

func parseHNItem(hnItem hn.Item) item {
	ret := item{Item: hnItem}
	URL, err := url.Parse(ret.URL)
	if err == nil {
		ret.Host = strings.TrimPrefix(URL.Hostname(), "www.")
	}
	return ret
}
