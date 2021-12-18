
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

from Accounts.views import Otp_Verification, email_verification_view, registration_view


urlpatterns = [
    path('login',obtain_auth_token),
    path('register', registration_view, name="register"),
    path('verify-otp', Otp_Verification.as_view()),
    path('verify-email',email_verification_view)
]