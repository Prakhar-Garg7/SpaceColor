from django.db import models
from django.core.validators import RegexValidator, MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User

# Create your models here.
class Combination ( models.Model ) :
    comb_id = models.AutoField(primary_key=True)
    my_name = models.CharField(max_length=20, default="ab",)
    hex_color_validator = RegexValidator(
        regex=r'^#[0-9A-Fa-f]{6}$',
        message='Enter a valid hex color code.'
    )
    first_col = models.CharField(
        max_length=7, 
        validators=[hex_color_validator],
        help_text='Enter a valid hex color code (e.g., #FFFFFF).'
    )
    sec_col = models.CharField(
        max_length=7, 
        validators=[hex_color_validator],
        help_text='Enter a valid hex color code (e.g., #FFFFFF).'
    )
    priority = models.IntegerField(
        default=0
    )

    def __str__(self) :
        return self.first_col


class UserAuthData(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.username