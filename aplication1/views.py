from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def welcomeView(request):
    return(render(request,"welcomeMenu.html"))