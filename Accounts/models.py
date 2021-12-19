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
    type            = models.CharField(max_length=140)


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


