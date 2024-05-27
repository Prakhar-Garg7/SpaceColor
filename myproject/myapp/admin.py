from django.contrib import admin

# Register your models here.
from .models import Combination
from .models import UserAuthData

admin.site.register(Combination)
admin.site.register(UserAuthData)