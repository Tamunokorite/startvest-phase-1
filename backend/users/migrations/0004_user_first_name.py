# Generated by Django 3.1.7 on 2021-03-30 09:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20210310_1657'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='first_name',
            field=models.CharField(blank=True, max_length=254, null=True),
        ),
    ]
