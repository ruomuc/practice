package cmd

import (
	"fmt"
	"github.com/spf13/cobra"
	"strconv"
	"task/db"
)

var doCmd = &cobra.Command{
	Use:   "do",
	Short: "Marks a task complete.",
	Run: func(cmd *cobra.Command, args []string) {
		var ids []int
		for _, arg := range args {
			id, err := strconv.Atoi(arg)
			if err != nil {
				fmt.Println("Failed to parse the argument:", arg)
			} else {
				ids = append(ids, id)
			}
		}
		tasks, err := db.GetAllTasks()
		if err != nil {
			fmt.Printf("Something went wrong:\n", err)
		}
		for _, id := range ids {
			if id <= 0 || id > len(tasks) {
				fmt.Printf("Invalid task number:\n", id)
				continue
			}
			task := tasks[id-1]
			err := db.DeleteTask(task.Key)
			if err != nil {
				fmt.Printf("Failed to mark \"%d\" as complete. %s\n", id, err)
			} else {
				fmt.Printf("Marked \"%d\" as complete!\n", id)
			}
		}
	},
}

func init() {
	RootCmd.AddCommand(doCmd)
}
