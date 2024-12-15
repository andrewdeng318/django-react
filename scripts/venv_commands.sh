#!/bin/bash

# 创建虚拟环境
python3 -m venv venv

# 激活虚拟环境
source venv/bin/activate

# 查看已安装的包
pip list

# 安装requirements.txt中的依赖
pip install -r requirements.txt

# 生成requirements.txt
pip freeze > requirements.txt

# 退出虚拟环境
deactivate
