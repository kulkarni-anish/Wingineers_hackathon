from django.shortcuts import render

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

            send_mail(tk=token,html='',
                text='Here is your Confirmation',
                subject='User Verification',
                from_email='djangorest3@gmail.com',
                to_emails=[user.email])

        else:
            data = serializer.errors
        return Response(data)

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


