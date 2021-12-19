from copy import error
from django.shortcuts import render

#REST FRAMEWORK
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import status

# MODELS
from .models import *

from Accounts.models import Token
from Accounts.models import MyUser

#Serializers
from .serializers import *

# Create your views here.

class Companyview(generics.ListCreateAPIView):
    queryset=Company.objects.all()
    serializer_class =CompanySerializer
    def post(self,request):
        serializer=CompanySerializer(data=request.data)
        if serializer.is_valid():
            email=serializer.validated_data['email']
            user=MyUser.objects.get(email=email)
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class ManufacturerView(generics.ListCreateAPIView):
    queryset=Manufacturer.objects.all()
    serializer_class =ManufacturerSerializer
    def post(self,request):
        serializer=ManufacturerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class ManufacturerOrderView(generics.ListCreateAPIView):
    queryset=ManufacturerOrder.objects.all()
    serializer_class=ManufacturerOrderSerializer
    def post(self,request):
        serializer=ManufacturerOrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data.id)
        else:
            return Response(serializer.errors)

class OrderView(generics.ListCreateAPIView):
    queryset=Order.objects.all()
    serializer_class=OrderSerializer
    def post(self,request):
        serializer=OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data.id)
        else:
            return Response(serializer.errors)



