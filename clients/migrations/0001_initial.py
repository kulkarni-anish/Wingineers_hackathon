# Generated by Django 4.0 on 2021-12-19 11:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(default='patwat@gmail.com', max_length=255)),
                ('company_name', models.CharField(max_length=255)),
                ('company_type', models.CharField(choices=[('Retailer', 'Retailer'), ('Wholesaler', 'Wholesaler')], max_length=255)),
                ('address_main', models.CharField(max_length=255)),
                ('zip_code', models.IntegerField()),
                ('counrty', models.CharField(max_length=200)),
                ('state', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Manufacturer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(default='patwat@gmail.com', max_length=255)),
                ('company_name', models.CharField(max_length=200)),
                ('buisness_type', models.CharField(choices=[('Retailer', 'Retailer'), ('Wholesaler', 'Wholesaler')], max_length=200)),
                ('main_products', models.CharField(max_length=100)),
                ('total_annual_revenue', models.CharField(max_length=100)),
                ('certification', models.ImageField(upload_to='')),
                ('total_employee', models.IntegerField()),
                ('year_esatblished', models.IntegerField()),
                ('registered_date', models.DateTimeField(auto_now_add=True)),
                ('address_main', models.CharField(max_length=255)),
                ('zip_code', models.IntegerField()),
                ('counrty', models.CharField(max_length=100)),
                ('state', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_date', models.DateTimeField(auto_now_add=True)),
                ('quantity', models.CharField(max_length=100)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='clients.company')),
                ('manufacturer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='clients.manufacturer')),
            ],
        ),
        migrations.CreateModel(
            name='ManufacturerOrder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dispersion_date', models.DateField()),
                ('last_date_dispersion', models.DateField(default=None)),
                ('discount', models.IntegerField()),
                ('upperLimit', models.IntegerField(default=500)),
                ('lowerLimit', models.IntegerField(default=1000)),
                ('manufacturer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='clients.manufacturer')),
            ],
        ),
    ]
