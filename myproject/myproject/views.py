# I created this file - Prakhar
from django.http import HttpResponse
from django.shortcuts import render

def index(request):
                    return render(request, 'index.html')

def gradient(request):
                    return render(request, 'gradient.html')                    