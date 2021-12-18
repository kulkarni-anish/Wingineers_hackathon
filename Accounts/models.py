from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from rest_framework.authtoken.models import Token

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from .manager import MyUserManager



# Create your models here.
class MyUser(AbstractBaseUser, PermissionsMixin):

    email           = models.EmailField(max_length=60,unique=True)
    is_admin        = models.BooleanField(default = False)
    is_active       = models.BooleanField(default = True)
    is_staff        = models.BooleanField(default = False)
    is_superuser    = models.BooleanField(default = False)


    objects = MyUserManager()

    USERNAME_FIELD = 'email'

    # REQUIRED_FIELDS = ['username']   

    class Meta:
        verbose_name = ('user')
        verbose_name_plural = ('users')
        
    def __str__(self):
        return self.email


@receiver(post_save, sender=settings.AUTH_USER_MODEL)       #post_save is the signal
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

class Company(models.Model):
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
    STATUS=(
    ("Retailer","Retailer"),
    ("Wholesaler","Wholesaler"),
    )
    company_name=models.CharField(max_length=200)
    buisness_type=models.CharField(max_length=200,choices=STATUS)
    main_products=models.CharField(max_length=100)
    total_annual_revenue=models.CharField(max_length=100)
    certification=models.ImageField()
    total_employee=models.IntegerField()
    year_esatblished=models.IntegerField()
    registered_date=models.DateTimeField(auto_now_add=True)
    address_main=models.CharField(max_length=255)
    zip_code=models.IntegerField()
    counrty=models.CharField(max_length=100)
    state=models.CharField(max_length=100)
    city=models.CharField(max_length=100)
    def __str__(self):
        return self.company_name

class Order(models.Model):
    company=models.ForeignKey(Company,on_delete=models.CASCADE)
    manufacturer=models.ForeignKey(Manufacturer,on_delete=models.CASCADE)# one manufacturer has to be selected or else we can set default 
    order_date=models.DateTimeField(auto_now_add=True)
    quantity=models.CharField(max_length=100)
    
    def __str__(self):
        return self.company
    class Meta:
        ordering=['order_date']
    

class ManufacturerOrder(models.Model):

    manufacturer=models.ForeignKey(Manufacturer,on_delete=models.CASCADE)
    dispersion_date=models.DateField()
    dispersion_duration=models.IntegerField()# it is the regular duration at which the order will be sent
    discount=models.IntegerField()

    def __str__(self):
        return self.manufacturer.company_name
