from django.shortcuts import render
from django.http import HttpResponse
from .models import UserAuthData

# Create your views here.
def index ( request ) :
                               return render( request, index.html )       

def gradient ( request ) :
                                        newUser = UserAuthData(
                                        username=request.GET.get('username'),
                                        email=request.GET.get('email'),
                                        password=request.GET.get('password')
)
                                        newUser.save()
                                        return render( request, 'gradient.html' )       

def register ( request ) :
                               return render( request, 'register.html' )  