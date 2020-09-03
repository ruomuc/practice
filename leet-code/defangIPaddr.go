package main

import (
	"strings"
)

func defangIPaddr(address string) string {
	newAddress := ""
	for i := range address {
		if address[i] == '.' {
			newAddress += "[.]"
		} else {
			newAddress += string(address[i])
		}
	}
	return newAddress
}

func defangIPaddr2(address string) string {
	return strings.Replace(address, ".", "[.]", -1)
}
