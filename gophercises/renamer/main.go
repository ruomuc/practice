package main

import (
	"flag"
	"fmt"
	"os"
	"path/filepath"
	"regexp"
)

var re = regexp.MustCompile("^(.*?) ([0-9]{4}) [(]([0-9]+) of ([0-9]+)[)][.](.+?)$")
var replaceString = "$2 - $1 - $3 of $4.$5"

func main() {
	var mock bool
	var walkDir string

	flag.BoolVar(&mock, "mock", false, "是否模拟执行，模拟执行不会真正重命名文件!")
	flag.StringVar(&walkDir, "dir", "./sample", "需要重命名文件的所在根文件夹路径")
	flag.Parse()
	fmt.Println(mock, walkDir)

	var originFiles []string
	filepath.Walk(walkDir, func(path string, info os.FileInfo, err error) error {
		if info.IsDir() {
			return nil
		}
		if _, err := match(info.Name()); err == nil {
			originFiles = append(originFiles, path)
		}
		return nil
	})

	for _, oldPath := range originFiles {
		dir := filepath.Dir(oldPath)
		fileName := filepath.Base(oldPath)
		newFileName, _ := match(fileName)
		newPath := filepath.Join(dir, newFileName)
		fmt.Printf("mv %s=>%s\n", oldPath, newPath)
		if !mock {
			err := os.Rename(oldPath, newPath)
			if err != nil {
				panic(err)
			}
		}
	}
}

func match(fileName string) (string, error) {
	if !re.MatchString(fileName) {
		return "", fmt.Errorf("%s didn't match", fileName)
	}
	return re.ReplaceAllString(fileName, replaceString), nil
}
