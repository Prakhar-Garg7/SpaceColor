# Generated by Django 5.0.1 on 2024-05-28 09:46

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("myapp", "0004_alter_combination_username"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="combination",
            name="username",
        ),
        migrations.AddField(
            model_name="combination",
            name="my_name",
            field=models.CharField(default="ab", max_length=20),
        ),
    ]