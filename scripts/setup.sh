#!/bin/bash
source venv/bin/activate
python -m pip install django
django-admin startproject myproject .
python manage.py startapp main
python3 manage.py startapp books
