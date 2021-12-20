from copy import error
from django.shortcuts import render
import datetime

#REST FRAMEWORK
from rest_framework.response import Response
from rest_framework.serializers import Serializer
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
            print(serializer.data)
            prod_id = serializer.data['id']
            prod=Product.objects.get(id=prod_id)

            prod.stock_left = prod.stock
            prod.sell_price = prod.cost_price*110/100

            prod.duration   = datetime.timedelta(days=30)

            r1= range(1,100)
            r2= range(100,500)
            r3= range(500,10000)
            if prod.stock in r1:
                prod.lower_limit = 1
                prod.upper_limit = 10
            elif prod.stock in r2:
                prod.lower_limit = 10
                prod.upper_limit = 50
            elif prod.stock in r3:
                prod.lower_limit = 50
                prod.upper_limit = 100
            else:
                prod.lower_limit = 0
                prod.upper_limit = 0

            prod.save()

            return Response(serializer.data)
        else:
            return Response(serializer.errors)

