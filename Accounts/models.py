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
    phone_number    = models.CharField(max_length = 15, null=True)
    is_admin        = models.BooleanField(default = False)
    is_active       = models.BooleanField(default = False)
    is_staff        = models.BooleanField(default = False)
    is_superuser    = models.BooleanField(default = False)
<<<<<<< HEAD
    type            = models.CharField(max_length=140)
=======
    email_is_verified   = models.BooleanField(default=False)
    phone_is_verified   = models.BooleanField(default=False)
    email_otp           = models.CharField(max_length=7,null=True)
    phone_otp           = models.CharField(max_length=7,null=True)
>>>>>>> 38d4ebec90a8e8af02000c58ca19162597690ee1


    objects = MyUserManager()

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = []   

    class Meta:
        verbose_name = ('user')
        verbose_name_plural = ('users')
        
    def __str__(self):
        return self.email


@receiver(post_save, sender=settings.AUTH_USER_MODEL)       #post_save is the signal
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

# @receiver(post_save, sender=settings.AUTH_USER_MODEL) 
# def verify_user(sender, instance=None, created=False, **kwargs):
#     if user

