package link

import (
	"golang.org/x/net/html"
	"io"
	"strings"
)

type Link struct {
	Href string
	Text string
}

func Parse(r io.Reader) (links []Link, err error) {
	doc, err := html.Parse(r)
	if err != nil {
		return nil, err
	}
	nodes := linkNodes(doc)
	for _, node := range nodes {
		links = append(links, buildLink(node))
	}
	return links, nil
}

func linkNodes(n *html.Node) (ret []*html.Node) {
	if n.Type == html.ElementNode && n.Data == "a" {
		return []*html.Node{n}
	}
	for c := n.FirstChild; c != nil; c = c.NextSibling {
		ret = append(ret, linkNodes(c)...)
	}
	return ret
}

func buildLink(n *html.Node) (ret Link) {
	for _, attr := range n.Attr {
		if attr.Key == "href" {
			ret.Href = attr.Val
			break
		}
	}
	ret.Text = text(n)
	return ret
}

func text(n *html.Node) (ret string) {
	if n.Type == html.TextNode {
		return n.Data
	}
	if n.Type != html.ElementNode {
		return ""
	}
	for c := n.FirstChild; c != nil; c = c.NextSibling {
		ret += text(c) + ""
	}
	return strings.Join(strings.Fields(ret), " ")
}
