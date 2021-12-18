from django.contrib import admin

from Accounts.models import MyUser
from django.contrib.auth.models import Group
# Register your models here.

admin.site.unregister(Group)
admin.site.register(MyUser)

