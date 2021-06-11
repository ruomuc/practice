package main

import (
	"flag"
	"fmt"
	"io/ioutil"
	"net/http"
	urlshort "url-short"
)

func main() {
	flag.String("yml", "short-url", "a yml file to redirect url")
	flag.Parse()
	mux := defaultMux()
	ymlFile, _ := ioutil.ReadFile("short-url.yml")
	yamlHandler, err := urlshort.YAMLHandler(ymlFile, mux)
	if err != nil {
		panic(err)
	}
	fmt.Println("Starting the server on :8080")
	http.ListenAndServe(":8080", yamlHandler)
}

func defaultMux() *http.ServeMux {
	mux := http.NewServeMux()
	mux.HandleFunc("/", hello)
	return mux
}

func hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello, world!")
}
