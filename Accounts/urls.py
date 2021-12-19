
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

from Accounts.views import registration_view
from . import views


urlpatterns = [
    path('login/',views.CustomAuthToken().as_view()),
    path('register', registration_view, name="register"),
]