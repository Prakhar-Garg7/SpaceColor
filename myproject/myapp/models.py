from django.db import models
from django.core.validators import RegexValidator, MinValueValidator, MaxValueValidator

# Create your models here.
class Combination ( models.Model ) :
                                        comb_id = models.AutoField(primary_key=True)
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
                                        angle = models.IntegerField(
                                            validators=[MinValueValidator(0), MaxValueValidator(360)],
                                            help_text='Enter an integer angle between 0 and 360 degrees.'
                                        )
