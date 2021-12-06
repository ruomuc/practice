#! /bin/bash
buckets=$(qshell buckets)
for bucket in $buckets
  do
    files=$(qshell listbucket $bucket)
    for file in $files
      do
        if [[ $file =~ "." ]]
        then
          echo "downloading...$file"
          qshell get $bucket $file
        fi
      done
  done
