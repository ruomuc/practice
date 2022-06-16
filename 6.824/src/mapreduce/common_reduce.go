package mapreduce

import (
	"encoding/json"
	"log"
	"os"
)

func doReduce(
	jobName string, // the name of the whole MapReduce job
	reduceTask int, // which reduce task this is
	outFile string, // write the output here
	nMap int, // the number of map tasks that were run ("M" in the paper)
	reduceF func(key string, values []string) string,
) {

	// 1. 获取键值对，一个key对应多个value
	keyValues := make(map[string][]string)

	for i := 0; i < nMap; i++ {
		fileName := reduceName(jobName, i, reduceTask)

		file, err := os.Open(fileName)
		if err != nil {
			log.Fatal(err)
		}
		defer file.Close()

		// decode json
		dec := json.NewDecoder(file)
		for {
			var kv KeyValue

			err := dec.Decode(&kv)
			if err != nil {
				break
			}

			// 如果key不存在，初始化之
			if _, exists := keyValues[kv.Key]; !exists {
				keyValues[kv.Key] = make([]string, 0)
			}
			keyValues[kv.Key] = append(keyValues[kv.Key], kv.Value)
		}
	}

	// 2.因为一个key对应多个value，合并之
	mergeFileName := mergeName(jobName, reduceTask)
	mergeFile, err := os.Create(mergeFileName)
	if err != nil {
		log.Fatal(err)
	}
	defer mergeFile.Close()

	enc := json.NewEncoder(mergeFile)
	for k, values := range keyValues {
		// reduce 生成新的value
		ret := reduceF(k, values)

		err := enc.Encode(&KeyValue{k, ret})
		if err != nil {
			log.Fatal(err)
		}
	}
}
