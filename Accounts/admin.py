from django.contrib import admin

from Accounts.models import MyUser
from django.contrib.auth.models import Group
from .models import *
# Register your models here.

admin.site.unregister(Group)
admin.site.register(MyUser)

