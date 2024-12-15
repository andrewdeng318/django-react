#!/bin/bash

# 在项目目录中创建虚拟环境
python3 -m venv ./venv

# 在自定义位置创建虚拟环境
python3 -m venv ~/virtualenvs/django_env

# 创建带有特定Python版本的虚拟环境（如果安装了多个Python版本）
# python3.8 -m venv ./venv_py38

# 创建不包含pip的简单虚拟环境
# python3 -m venv --without-pip ./minimal_venv
