package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os/exec"
	"time"
)

var lastDeployTime time.Time
var password *string
var shellPath *string

func main() {
	password = flag.String("p", "", "webhook password")
	shellPath = flag.String("s", "", "shell path")
	flag.Parse()
	// 启动http服务器，等待webhook调用
	http.HandleFunc("/gitee/blog/deploy", doDeploy)
	err := http.ListenAndServe(fmt.Sprintf(":%d", 8088), nil)
	if err != nil {
		log.Fatal("http ListenAndServe fail:", err)
	}
}

// 这是只是简单地调用一个shell脚本
// 部署功能步骤都在shell脚本里
func doDeploy(w http.ResponseWriter, r *http.Request) {

	var body map[string]string
	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&body)

	if body["password"] != *password {
		fmt.Printf("%s: 密码错误: %s \n", time.Now().Format("2006-01-02 15:04:05"), body["password"])
		return
	}

	if time.Now().Sub(lastDeployTime) < 120*time.Second {
		fmt.Printf("%s: 部署操作冷却中...最后部署时间: %v \n", time.Now().Format("2006-01-02 15:04:05"), lastDeployTime)
		return
	}
	lastDeployTime = time.Now()

	cmd := exec.Command("/bin/bash", "-c", *shellPath)
	output, err := cmd.Output()
	if err != nil {
		fmt.Printf("Execute shell failed: %+v, commands: %s", err, string(output))
	}
}
