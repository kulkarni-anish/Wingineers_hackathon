# Generated by Django 4.0 on 2021-12-18 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Accounts', '0002_alter_myuser_is_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='myuser',
            name='email_is_verified',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='myuser',
            name='phone_is_verified',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='myuser',
            name='phone_number',
            field=models.CharField(max_length=15, null=True),
        ),
    ]
