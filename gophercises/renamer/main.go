package main

import (
	"flag"
	"fmt"
	"os"
	"path"
	"path/filepath"
	"sort"
	"strconv"
	"strings"
)

func main() {
	var mock bool
	var walkDir string

	flag.BoolVar(&mock, "mock", false, "是否模拟执行，模拟执行不会真正重命名文件!")
	flag.StringVar(&walkDir, "dir", "./sample", "需要重命名文件的所在根文件夹路径")
	flag.Parse()
	fmt.Println(mock, walkDir)

	originDirs := make(map[string][]string)
	filepath.Walk(walkDir, func(path string, info os.FileInfo, err error) error {
		if info.IsDir() {
			return nil
		}
		fileName := info.Name()
		curDir := filepath.Dir(path)
		if m, err := match(fileName); err == nil {
			// 使用这个key的原因是：
			// 同一文件夹中的不同文件，名称相差太大
			// 比如：nested/birthday_008.txt 和 nested/n_008.txt 不应该在一组
			key := filepath.Join(curDir, fmt.Sprintf("%s%s", m.base, m.ext))
			originDirs[key] = append(originDirs[key], fileName)
		}
		return nil
	})

	for key, files := range originDirs {
		n := len(files)
		dir := filepath.Dir(key)
		sort.Strings(files)
		for i, fileName := range files {
			res, _ := match(fileName)
			newFileName := fmt.Sprintf("%s-%d of %d%s", res.base, (i + 1), n, res.ext)
			oldPath := filepath.Join(dir, fileName)
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
}

type matchResult struct {
	base string
	idx  int
	ext  string
}

// rename xx_number.ext => Xx (number of number).ext
// example: birthday_001.txt => Birthday (1 of 4).txt
func match(fileName string) (*matchResult, error) {
	base, ext := path.Base(fileName), path.Ext(fileName)
	name := strings.TrimSuffix(base, ext)

	pieces := strings.Split(name, "_")
	number, err := strconv.Atoi(pieces[len(pieces)-1])
	name = strings.Join(pieces[0:len(pieces)-1], "_")

	if err != nil {
		return nil, fmt.Errorf("%s didn't match", fileName)
	}
	return &matchResult{
		base: strings.Title(name),
		idx:  number,
		ext:  ext,
	}, nil
}
