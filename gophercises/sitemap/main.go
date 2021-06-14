package main

import (
	"flag"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"sitemap/link"
	"strings"
)

func main() {
	urlFlag := flag.String("url", "https://gophercises.com", "the url u want to build a sitemap for")
	maxDepth := flag.Int("depth", 3, "the maximum number of links deep to traverse")
	flag.Parse()

	pages := bfs(*urlFlag, *maxDepth)
	for _, p := range pages {
		fmt.Println(p)
	}
}

func bfs(urlStr string, maxDepth int) (ansUrls []string) {
	seen := make(map[string]struct{})
	queue := map[string]struct{}{
		urlStr: struct{}{},
	}

	for i := 0; i <= maxDepth; i++ {
		tempQueue := make(map[string]struct{}, 0)
		for q, _ := range queue {
			if _, ok := seen[q]; ok {
				// 已经存在的
				continue
			}
			seen[q] = struct{}{}
			for _, l := range get(q) {
				tempQueue[l] = struct{}{}
			}
		}
		queue = tempQueue
	}
	for s, _ := range seen {
		ansUrls = append(ansUrls, s)
	}
	return ansUrls
}

func get(urlStr string) []string {
	resp, err := http.Get(urlStr)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	reqUrl := resp.Request.URL
	baseUrl := &url.URL{
		Scheme: reqUrl.Scheme,
		Host:   reqUrl.Host,
	}
	base := baseUrl.String()
	return filter(hrefs(resp.Body, base), withPrefix(base))
	//return  hrefs(resp.Body, base)
}

func hrefs(r io.Reader, base string) (ret []string) {
	links, _ := link.Parse(r)
	for _, l := range links {
		switch {
		case strings.HasPrefix(l.Href, "/"):
			ret = append(ret, base+l.Href)
		case strings.HasPrefix(l.Href, "http"):
			ret = append(ret, l.Href)
		default:
			fmt.Println("invalid url:", l.Href)
		}
	}
	return ret
}

func filter(links []string, keepFn func(string) bool) (ret []string) {
	for _, l := range links {
		if keepFn(l) {
			ret = append(ret, l)
		}
	}
	return ret
}

func withPrefix(pfx string) func(string) bool {
	return func(l string) bool {
		return strings.HasPrefix(l, pfx)
	}
}
