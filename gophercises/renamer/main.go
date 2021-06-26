package main

import (
	"fmt"
	"os"
	"path"
	"strconv"
	"strings"
)

func main() {
	fileName := "birthday_001.txt"
	newName, err := match(fileName, 4)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	fmt.Println(newName)
}

func match(fileName string, total int) (string, error) {
	base, ext := path.Base(fileName), path.Ext(fileName)
	name := strings.TrimSuffix(base, ext)

	pieces := strings.Split(name, "_")
	number, err := strconv.Atoi(pieces[len(pieces)-1])
	name = strings.Join(pieces[0:len(pieces)-1], "_")

	if err != nil {
		return "", fmt.Errorf("%s didn't match", fileName)
	}
	return fmt.Sprintf("%s (%d of %d)%s", strings.Title(name), number, total, ext), nil
}
