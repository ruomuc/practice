#! /bin/bash
files=$(cat $1/test)
echo $files
function read_dir(){
    for file in `ls $1`
    do
        if [ -d $1"/"$file ]
        then
            read_dir $1"/"$file
        else
            if [[ "$files" =~ "$file" ]];then
            	path=$1"/"$file
            	dir=$1
            	newDir=${dir/ocr/ocr-reviewed}
            	newPath=$newDir"/"$file
            	if [ ! -d "$newDir" ];then
            		mkdir -p $newDir
            	fi
            	cp $path $newPath
            fi
        fi
    done
}
#读取第一个参数
read_dir $1