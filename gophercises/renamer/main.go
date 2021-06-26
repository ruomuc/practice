package main

import (
	"fmt"
	"os"
	"path"
	"path/filepath"
	"strconv"
	"strings"
)

type file struct {
	name string
	path string
}

func main() {
	dirname := "./sample"
	var originNames []file
	filepath.Walk(dirname, func(path string, info os.FileInfo, err error) error {
		if info.IsDir() {
			return nil
		}
		fileName := info.Name()
		if _, err := match(fileName, 0); err == nil {
			originNames = append(originNames, file{
				name: fileName,
				path: path,
			})
		}
		return nil
	})

	for _, origin := range originNames {
		var newFile file
		var err error
		newFile.name, err = match(origin.name, 0)
		if err != nil {
			fmt.Printf("Error match: %s\n", err)
			continue
		}
		newFile.path = filepath.Join(dirname, newFile.name)
		fmt.Printf("mv %s => %s\n", origin.path, newFile.path)
		err = os.Rename(origin.path, newFile.path)
		if err != nil {
			panic(err)
		}
	}
}

// rename xx_number.ext => Xx (number of number).ext
// example: birthday_001.txt => Birthday (1 of 4).txt
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
