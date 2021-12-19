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
            return Response(serializer.data.id)
        else:
            return Response(serializer.errors)


class ProductOrderView(generics.ListCreateAPIView):
    queryset=ProductOrder.objects.all()
    serializer_class=ProductOrderSerializer
    def post(self,request):
        serializer=ProductOrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data.id)
        else:
            return Response(serializer.errors)

class CartView(generics.ListCreateAPIView):
    queryset=Cart.objects.all()
    serializer_class=CartSerializer
    def post(self,request):
        serializer=CartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data.id)
        else:
            return Response(serializer.errors)

class Productview(generics.ListCreateAPIView):
    queryset=Company.objects.all()
    serializer_class = ProductSerializer
    def post(self,request):
        serializer=ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            #user= MyUser.objects.get(email=serializers.manufacturer_email)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

