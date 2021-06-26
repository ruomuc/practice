package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"path"
	"path/filepath"
	"strconv"
	"strings"
)

func main() {
	dirname := "./sample"
	files, err := ioutil.ReadDir(dirname)

	count := 0
	originNames := make([]string, 0)
	if err != nil {
		panic(err)
	} else {
		for _, file := range files {
			fileName := file.Name()
			if file.IsDir() {
				fmt.Println("Dir:", fileName)
			} else {
				_, err := match(fileName, 0)
				if err == nil {
					count++
					originNames = append(originNames, fileName)
				}
			}
		}
	}

	for _, origin := range originNames {
		originPath := filepath.Join(dirname, origin)
		newName, err := match(origin, count)
		if err != nil {
			fmt.Println(err)
			continue
		}
		newPath := filepath.Join(dirname, newName)
		fmt.Printf("mv %s => %s\n", originPath, newPath)
		err = os.Rename(originPath, newPath)
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
