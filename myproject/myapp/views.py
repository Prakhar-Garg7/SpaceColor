from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index ( request ) :
                               return render( request, index.html )       

def gradient ( request ) :
                               return render( request, 'gradient.html' )       

def register ( request ) :
                               return render( request, 'register.html' )  