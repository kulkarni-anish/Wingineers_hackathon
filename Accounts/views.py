from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from Accounts.serializers import RegistrationSerializer
from rest_framework.authtoken.models import Token
from .serializers import *
from Accounts.utils import send_mail, send_otp
import random

#REST FRAMEWORK
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

#sending mails
from Accounts.utils import send_mail


#serializers
from Accounts.serializers import RegistrationSerializer
from .serializers import *

#models
from .models import *

# Create your views here.

@api_view(['POST', ])
def registration_view(request):

    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            data['response'] = 'successfully registered new user.'
            data['email'] = user.email
            token = Token.objects.get(user=user).key
            data['token'] = token
            data['phone_number'] = user.phone_number
            data['type'] = user.type

            send_mail(user=user,html='',
                text='Here is your OTP',
                subject='User Verification',
                from_email='djangorest3@gmail.com',
                to_emails=[user.email])

            send_otp(user.phone_number, user)

        else:
            data = serializer.errors
        return Response(data)

@api_view(['POST', ])
def email_verification_view(request):
    if request.method == 'POST':
        data = request.data
        user = MyUser.objects.get(email_otp = data['email_otp'])
        otp = data['email_otp']
        if user.email_otp==otp:
            user.email_is_verified = True
            user.save()
            if user.phone_is_verified == True:
                user.is_active = True
                user.save()
                return JsonResponse({'status': 200, 'message': 'Email verified and user also verified'})
            return JsonResponse({'status': 200, 'message': 'Email successfully verified'})
        else:
            return JsonResponse({'status': 403, 'message': 'OTP is incorrect'})

        


# class RegisterView(APIView):
#     def post(self, request):
#         try:
#             serializer = RegistrationSerializer(data = request.data)

#             if not serializer.is_valid():
#                 return Response({'status': 403, 'errors': serializers.errors})
            
#             serializer.save()

#             return Response({'status': 200, 'message': 'OTP is sent o your email'})

#         except Exception as e:
#             print(e)
#             return Response({'status': 404, 'message': 'something is wrong'})


# class Otp_Verification(APIView):

#     def post(self, request):
#         try:
#             data = request.data
#             user = MyUser.objects.get(phone_number = data['phone_number'])
#             otp = data['phone_otp']
#             print(otp)
#             if user.phone_otp==otp:
#                 user.phone_is_verified = True
#                 user.save()
#                 if user.email_is_verified == True:
#                     user.is_active = True
#                     user.save()
#                     return Response({'status': 200, 'message': 'OTP verified and user also verified'})
                
#                 return Response({'status': 200, 'message': 'OTP verified'})
#             else:
#                 return Response({'status': 403, 'message': 'OTP is incorrect'})

#         except Exception as e:
#             print(e)
#         return Response({'status': 404, 'message': 'something is wrong'})

@api_view(['POST', ])
def number_verification_view(request):
    if request.method == 'POST':
        data = request.data
        user = MyUser.objects.get(phone_number = data['phone_number'])
        otp = data['phone_otp']
        print(otp)
        if user.phone_otp==otp:
            user.phone_is_verified = True
            user.save()
            if user.email_is_verified == True:
                user.is_active = True
                user.save()
                return JsonResponse({'status': 200, 'message': 'Mobile number verified and user also verified'})
            return JsonResponse({'status': 200, 'message': 'Mobile number successfully verified'})
        else:
            return JsonResponse({'status': 403, 'message': 'OTP is incorrect'})


