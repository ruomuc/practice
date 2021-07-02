package main

import (
	"errors"
	"flag"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"net/url"
	"quiet-HN/hn"
	"sort"
	"strings"
	"sync"
	"time"
)

func main() {
	var port, numStories int
	flag.IntVar(&port, "port", 3000, "server listen port")
	flag.IntVar(&numStories, "num_stories", 30, "the num of top stories to display")
	flag.Parse()

	tpl := template.Must(template.ParseFiles("./index.gohtml"))
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
	sc := storyCache{
		numStories: numStories,
		duration:   10 * time.Second,
	}
	return func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		stories, err := sc.stories()
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
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
	}
}

type storyCache struct {
	numStories     int
	cacheA, cacheB []item
	useA           bool
	expiration     time.Time
	duration       time.Duration
	mutex          sync.Mutex
}

func (s *storyCache) stories() ([]item, error) {
	s.mutex.Lock()
	defer s.mutex.Unlock()
	if time.Now().Sub(s.expiration) < 0 {
		if s.useA {
			return s.cacheA, nil
		} else {
			return s.cacheB, nil
		}
	}
	stories, err := getTopStories(s.numStories)
	if err != nil {
		return nil, err
	}
	s.expiration = time.Now().Add(s.duration)
	if s.useA {
		s.cacheA = stories
		return s.cacheA, nil
	} else {
		s.cacheB = stories
		return s.cacheB, nil
	}
}

func getTopStories(numStories int) ([]item, error) {
	var client hn.Client
	ids, err := client.TopItems()
	if err != nil {
		return nil, errors.New("failed to get top stories")
	}
	var stories []item
	at := 0
	for len(stories) < numStories {
		need := numStories - len(stories)
		stories = append(stories, getStories(ids[at:at+need])...)
		at += need
	}
	return stories, nil
}

func getStories(ids []int) []item {
	var client hn.Client
	n := len(ids)

	type result struct {
		item item
		idx  int
		err  error
	}
	resultChan := make(chan result)
	for i := 0; i < n; i++ {
		go func(id, idx int) {
			hnItem, err := client.GetItem(id)
			if err != nil {
				resultChan <- result{
					idx: idx,
					err: err,
				}
			}
			resultChan <- result{
				item: parseHNItem(hnItem),
				idx:  idx,
				err:  nil,
			}
		}(ids[i], i)
	}

	res := make([]result, 0, n)
	for i := 0; i < n; i++ {
		res = append(res, <-resultChan)
	}
	sort.Slice(res, func(i, j int) bool {
		return res[i].idx < res[j].idx
	})

	stories := make([]item, 0, n)
	for _, r := range res {
		if r.err != nil {
			continue
		}
		if isStoryLink(r.item) {
			stories = append(stories, r.item)
		}
	}
	return stories
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
