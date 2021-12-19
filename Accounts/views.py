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
from rest_framework.authtoken.views import ObtainAuthToken

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


            send_mail(tk=token,user=user,html='',
                text='Here is your OTP',
                subject='User Verification',
                from_email='djangorest3@gmail.com',
                to_emails=[user.email])

            send_otp(user.phone_number, user)

        else:
            data = serializer.errors
        return Response(data)

<<<<<<< HEAD
class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        })


=======
@api_view(['POST', ])
#def email_verification_view(request,tk):
def email_verification_view(request):
    if request.method == 'POST':
        # token = tk
        # print(tk)
        # user = Token.objects.get(key=token).user
        # print(user.is_active)
        # user.is_active = True
        # user.save()
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

        return JsonResponse({'Response' : 'Email successfully Verified'})


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


class Otp_Verification(APIView):

    
    def post(self, request):
        try:
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
                    return Response({'status': 200, 'message': 'OTP verified and user also verified'})
                
                return Response({'status': 200, 'message': 'OTP verified'})
            else:
                return Response({'status': 403, 'message': 'OTP is incorrect'})

        except Exception as e:
            print(e)
        return Response({'status': 404, 'message': 'something is wrong'})


##Following is for resending otp
    # def patch(self,request):
    #     try:
    #         data = request.data

    #         if not MyUser.objects.filter(phone_number = data['phone_number']).exists():
    #             return Response({'status': 404, 'message': 'No user found'})

    #         if send_otp(data['phone_number']):
    #             return Response({'status': 200, 'message':'new OTP sent'})
    #         else:
    #             return Response({'status': 404, 'message': 'try after some time'})
    #     except Exception as e:
    #         print(e)
>>>>>>> 38d4ebec90a8e8af02000c58ca19162597690ee1
