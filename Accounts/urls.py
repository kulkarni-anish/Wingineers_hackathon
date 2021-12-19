
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

from Accounts.views import Otp_Verification, email_verification_view, registration_view
from Accounts.views import registration_view
from . import views


urlpatterns = [
    path('login/',views.CustomAuthToken().as_view()),
    path('register/', registration_view, name="register"),
    path('verify-otp/', Otp_Verification.as_view()),
    path('verify-email/',email_verification_view),
]