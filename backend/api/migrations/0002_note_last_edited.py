# Generated by Django 5.0.7 on 2024-08-01 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='last_edited',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
