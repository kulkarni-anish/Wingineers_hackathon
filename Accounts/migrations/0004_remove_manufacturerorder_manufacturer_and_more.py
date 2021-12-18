# Generated by Django 4.0 on 2021-12-18 14:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Accounts', '0003_company_manufacturer_order_manufacturerorder'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='manufacturerorder',
            name='manufacturer',
        ),
        migrations.RemoveField(
            model_name='order',
            name='company',
        ),
        migrations.RemoveField(
            model_name='order',
            name='manufacturer',
        ),
        migrations.DeleteModel(
            name='Company',
        ),
        migrations.DeleteModel(
            name='Manufacturer',
        ),
        migrations.DeleteModel(
            name='ManufacturerOrder',
        ),
        migrations.DeleteModel(
            name='Order',
        ),
    ]
