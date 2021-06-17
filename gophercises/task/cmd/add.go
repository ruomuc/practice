package cmd

import (
	"fmt"
	"github.com/spf13/cobra"
	"strings"
	"task/db"
)

var addCmd = &cobra.Command{
	Use:   "add",
	Short: "add a task to you task list",
	Run: func(cmd *cobra.Command, args []string) {
		task := strings.Join(args, " ")
		db.CreatTask(task)
		fmt.Printf("Add new task: \"%s\".\n", task)
	},
}

func init() {
	RootCmd.AddCommand(addCmd)
}
