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

class ManuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manufacturer
        fields=['company_name']

class ProductSerializer(serializers.ModelSerializer):
    manufacturer_email = serializers.EmailField()
    #manufacturer = ManuSerializer(source='manufacturer.company_name', many=True)
    #manufacturer = serializers.PrimaryKeyRelatedField(source='manufacturer.company_name', queryset=Manufacturer.objects.all())

    class Meta:
        model = Product
        exclude = ['duration','sell_price','upper_limit','lower_limit','stock_left']

class CartSerializer(serializers.ModelSerializer):
    company = CompanySerializer()
    class Meta:
        model = Cart
        fields ='__all__'

class ProductOrderSerializer(serializers.ModelSerializer):
    cart = CartSerializer()
    class Meta:
        model = ProductOrder
        fields='__all__'

class ManufacturerDetailSerializers(serializers.ModelSerializer):
    class Meta:
        model=Manufacturer
        fields="__all__"

class EmailCheckerSerializer(serializers.ModelSerializer):
    class Meta:
        model=CheckingEmail
        fields="__all__"


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id','name','description','upper_limit','lower_limit','sell_price','stock_left','manufacturer_email']