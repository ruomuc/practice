package main

import (
	"cyoa"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	port := flag.Int("p", 3000, "the port of web application")
	fileName := flag.String("f", "gopher.json", "a file with CYOA story")
	flag.Parse()
	fmt.Println(*fileName)

	f, err := os.Open(*fileName)
	if err != nil {
		panic(err)
	}

	story, err := cyoa.JsonStory(f)
	if err != nil {
		panic(err)
	}

	handler := cyoa.NewHandler(story)
	fmt.Printf(" Starting the server on port: %d \n", *port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", *port), handler))
}
