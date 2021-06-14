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
	flag.Parse()

	pages := get(*urlFlag)
	for _, p := range pages {
		fmt.Println(p)
	}
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
