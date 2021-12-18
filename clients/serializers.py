from .models import *
from rest_framework import serializers


class CompanySerializer(serializers.ModelSerializer):
    email=serializers.EmailField()
    class Meta:
        model=Company
        fields='__all__'
        #exclude=['user']

class ManufacturerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Manufacturer
        fields='__all__'


class ManufacturerOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model=ManufacturerOrder
        fields='__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model=Order
        fields='__all__'