#!/bin/bash
# 删除所有 __pycache__ 目录
find . -type d -name "__pycache__" -exec rm -r {} +
# 删除所有 .pyc 文件
find . -name "*.pyc" -delete
