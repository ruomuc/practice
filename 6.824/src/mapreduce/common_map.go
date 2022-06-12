package mapreduce

import (
	"encoding/json"
	"hash/fnv"
	"io/ioutil"
	"log"
	"os"
)

func doMap(
	jobName string, // the name of the MapReduce job
	mapTask int, // which map task this is
	inFile string,
	nReduce int, // the number of reduce task that will be run ("R" in the paper)
	mapF func(filename string, contents string) []KeyValue,
) {
	// 1. 读取文件内容
	contents, err := ioutil.ReadFile(inFile)
	if err != nil {
		panic(err)
	}

	// 2. 执行mapF，生成键值对
	kvs := mapF(inFile, string(contents))

	// 3.创建用于执行reduce的临时文件
	for i := 0; i < nReduce; i++ {
		// 生成reduce文件名称
		rName := reduceName(jobName, mapTask, i)

		rFile, err := os.Create(rName)
		if err != nil {
			log.Fatal(err)
		}
		defer rFile.Close()

		enc := json.NewEncoder(rFile)
		for _, kv := range kvs {

			if ihash(kv.Key)%nReduce == i {
				err := enc.Encode(&kv)
				if err != nil {
					log.Fatal(err)
				}
			}
		}
	}
}

func ihash(s string) int {
	h := fnv.New32a()
	h.Write([]byte(s))
	return int(h.Sum32() & 0x7fffffff)
}
