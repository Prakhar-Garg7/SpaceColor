# Generated by Django 5.0.1 on 2024-05-28 17:39

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("myapp", "0007_combination_priority"),
    ]

    operations = [
        migrations.AlterField(
            model_name="combination",
            name="priority",
            field=models.IntegerField(default=0),
        ),
    ]