from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import UserAuthData, Combination

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
                                            return JsonResponse({'registered': True})
                                        else:
                                            return JsonResponse({'registered': False})


# newUser = UserAuthData(
#                                         username=request.GET.get('username'),
#                                         email=request.GET.get('email'),
#                                         password=request.GET.get('password')
#                                         )
#                                         newUser.save()

def addCombinationUrl ( request ) :
    newComb = Combination(
                                        first_col=request.GET.get('col1'),
                                        sec_col=request.GET.get('col2'),
                                        angle=request.GET.get('currDirec')
    )
    newComb.save()
    return render( request, 'gradient.html' )       