# Generated by Django 4.0 on 2021-12-18 15:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0004_company_token_manufacturer_token'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='token',
            field=models.CharField(max_length=122),
        ),
    ]
