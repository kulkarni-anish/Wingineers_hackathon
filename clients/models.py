from django.db import models
from Accounts.models import MyUser
from django.conf import settings

# Create your models here.
class Company(models.Model):
    email=models.EmailField(max_length=255,default="patwat@gmail.com")
    TYPES= (
    ("Retailer","Retailer"),
    ("Wholesaler","Wholesaler"),
    )
    company_name=models.CharField(max_length=255)
    company_type=models.CharField(max_length=255,choices=TYPES)
    #registered_date=models.DateTimeField(auto_now_add=True)
    address_main=models.CharField(max_length=255)
    zip_code=models.IntegerField()
    counrty=models.CharField(max_length=200)
    state=models.CharField(max_length=100)
    city=models.CharField(max_length=100)
    def __str__(self):
        return self.company_name
"""
Manufacturer_name
Business_type
Main products
Total Annual Revenue
Certification
Country address
Total employee
Year established
"""

class Manufacturer(models.Model):
    email=models.EmailField(max_length=255,default="patwat@gmail.com")
    company_name=models.CharField(max_length=200)
    main_products=models.CharField(max_length=100)
    total_annual_revenue=models.CharField(max_length=100)
    total_employee=models.CharField(max_length=255)
    year_esatblished=models.CharField(max_length=255)
    registered_date=models.DateTimeField(auto_now_add=True)
    address_main=models.CharField(max_length=255)
    zip_code=models.IntegerField()
    counrty=models.CharField(max_length=100)
    state=models.CharField(max_length=100)
    city=models.CharField(max_length=100)
    def __str__(self):
        return self.company_name

# TO BE DISCUSSED
class Order(models.Model):
    #company_id=models.IntegerField(default=0)
    #manufacturer_id=models.IntegerField(default=0)
    company=models.ForeignKey(Company,on_delete=models.CASCADE)
    manufacturer=models.ForeignKey(Manufacturer,on_delete=models.CASCADE)# one manufacturer has to be selected or else we can set default 
    order_date=models.DateTimeField(auto_now_add=True)
    quantity=models.CharField(max_length=100)
    def __str__(self):
        return self.company
    #class Meta:
        #ordering=['order_date']
    

class ManufacturerOrder(models.Model):
    manufacturer=models.ForeignKey(Manufacturer,on_delete=models.CASCADE)
    dispersion_date=models.DateField()
    last_date_dispersion=models.DateField(default=None)# it is the regular duration at which the order will be sent
    discount=models.IntegerField()
    upperLimit=models.IntegerField(default=500)
    lowerLimit=models.IntegerField(default=1000)

    def __str__(self):
        return self.manufacturer.company_name