#!/bin/bash
source venv/bin/activate
pip install drf-yasg
pip freeze > requirements.txt
