from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    return HttpResponse("<h1>Welcome to Django!</h1><p>This is your first Django view!</p>")

def about(request):
    return HttpResponse("<h1>About</h1><p>This is a learning project for Django interviews.</p>")
