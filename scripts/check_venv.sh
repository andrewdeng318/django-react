#!/bin/bash

echo "当前Python解释器位置："
which python3

echo -e "\nPython版本："
python3 --version

echo -e "\n虚拟环境信息："
if [ -n "$VIRTUAL_ENV" ]; then
    echo "当前在虚拟环境中：$VIRTUAL_ENV"
else
    echo "当前不在虚拟环境中"
fi

echo -e "\n已安装的包："
pip list
