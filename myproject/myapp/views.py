from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import UserAuthData, Combination
from django.core import serializers

# Create your views here.
def index ( request ) :
                               return render( request, index.html )       

def gradient ( request ) :
                                        return render( request, 'gradient.html' )       

def register ( request ) :
                               return render( request, 'register.html' )  

def login ( request ) :
                               return render( request, 'login.html' )  

def check_user(request):
                                        username = request.GET.get('username')
                                        email = request.GET.get('email')
                                        password = request.GET.get('password')
                                        if UserAuthData.objects.filter(username=username, email=email, password=password).exists():
                                            return JsonResponse({'registered': True, 'username': username})
                                        else:
                                            return JsonResponse({'registered': False})

def addCombination ( request ) :
    newComb = Combination(
                                        first_col=request.GET.get('col1'),
                                        sec_col=request.GET.get('col2'),
                                        angle=request.GET.get('currDirec'),
                                        my_name=request.GET.get('user_name')
    )
    newComb.save()
    return JsonResponse({'message': 'Combination added successfully'})

def addUser(request):
    newUser = UserAuthData(
                                        username=request.GET.get('username'),
                                        email=request.GET.get('email'),
                                        password=request.GET.get('psw')
    )
    newUser.save()
    return JsonResponse({'message': 'User added successfully'})

def getFavComb(request):
    username = request.GET.get('username')
    combinations = Combination.objects.filter(my_name=username)
    data = [{'first_col': combo.first_col, 'sec_col': combo.sec_col, 'angle': combo.angle} for combo in combinations]
    return JsonResponse({'combinations': data})

def favCombPage ( request ) :
    data = request.GET.get('data') 
    return render ( request, 'favCombPage.html', {'data': data} )