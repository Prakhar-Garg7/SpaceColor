# Generated by Django 5.0.1 on 2024-05-28 09:33

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("myapp", "0003_combination_username"),
    ]

    operations = [
        migrations.AlterField(
            model_name="combination",
            name="username",
            field=models.CharField(default="a", max_length=20),
        ),
    ]
