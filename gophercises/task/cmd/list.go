package cmd

import (
	"fmt"
	"github.com/spf13/cobra"
	"os"
	"task/db"
)

var listCmd = &cobra.Command{
	Use:   "list",
	Short: "list all of you tasks.",
	Run: func(cmd *cobra.Command, args []string) {
		tasks, err := db.GetAllTasks()
		if err != nil {
			fmt.Printf("get task list err:", err)
			os.Exit(1)
		}
		if len(tasks) == 0 {
			fmt.Printf("You have no tasks to complete!\n")
			return
		}
		for i, v := range tasks {
			fmt.Printf("%d. %s\n", i+1, v.Value)
		}
	},
}

func init() {
	RootCmd.AddCommand(listCmd)
}
