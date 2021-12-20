from django.db import models
from django.db.models.fields import DurationField
from django.db.models.fields.files import ImageField
from django.db.models.signals import post_save
from django.dispatch.dispatcher import receiver
from Accounts.models import MyUser
from django.conf import settings
import datetime

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
    certification=models.ImageField(blank=True)
    total_employee=models.IntegerField()
    year_esatblished=models.IntegerField()
    registered_date=models.DateTimeField(auto_now_add=True)
    address_main=models.CharField(max_length=255)
    zip_code=models.IntegerField()
    counrty=models.CharField(max_length=100)
    state=models.CharField(max_length=100)
    city=models.CharField(max_length=100)
    def calculate_exp(self):
        currentDateTime = datetime.datetime.now()
        date = currentDateTime.date()
        year = date.strftime("%Y")
        experience=int(year)-self.year_esatblished
        return experience  


    def __str__(self):
        return self.company_name

    
#MATERIAL/PRODUCT
class Product(models.Model):
    manufacturer_email        = models.EmailField()
    name                = models.CharField(max_length=100)
    image               = ImageField(blank=True, null=True)
    description         = models.CharField(max_length=400)
    dispersion_date     = models.DateField(blank=True, null=True)
    duration            = DurationField(blank=True,null=True)# it is the regular duration at which the order will be sent
    cost_price          = models.IntegerField(null=True)
    sell_price          = models.IntegerField(blank=True,null=True)  #Give choices here
    stock               = models.IntegerField(null=True)
    stock_left          = models.IntegerField(null=True,default=1000)
    upper_limit         = models.IntegerField(default=50)
    lower_limit         = models.IntegerField(default=1000)

    def __str__(self):
        return self.name


class Cart(models.Model):
    company             = models.ForeignKey(Company,on_delete=models.SET_NULL, null=True)
    delivery_date       = models.DateField(blank=True,null=True)
    complete            = models.BooleanField(default=False)
    delivery_address    = models.CharField(max_length=400)

    @property
    def get_cart_total(self):
        productorder = self.productorder_set.all()
        total = sum([item.get_product_total for item in productorder])
        return total 


class CheckingEmail(models.Model):
    email=models.EmailField()

class Club(models.Model):
    status = models.BooleanField(default=False)
    product         = models.ForeignKey(Product,on_delete=models.CASCADE,null=True)

class ProductOrder(models.Model):
    cart            = models.ForeignKey(Cart, on_delete=models.SET_NULL, null=True)
    product         = models.ForeignKey(Product,on_delete=models.CASCADE,null=True)
    date_added      = models.DateField(auto_now_add=True)
    quantity        = models.IntegerField()
    email           = models.EmailField(null=True)
    club            = models.ForeignKey(Club,on_delete=models.CASCADE,null=True)
    @property
    def get_product_total(self):
        total = self.product.sell_price * self.quantity
        return total