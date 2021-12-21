from copy import error
from django.http.response import JsonResponse
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
            serializer.save()
            company = Company.objects.get(email=email)
            print(company)
            print(email)

            cart = Cart.objects.create(company = company)
            cart.save()
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


class ProductOrderView(generics.ListCreateAPIView):
    queryset=ProductOrder.objects.all()
    serializer_class=ProductOrderSerializer
    def get(self,request):
        order=ProductOrder.objects.all()
        return Response(order)
    def post(self,request):
        #Send quantity and prod_id
        serializer=ProductOrderSerializer(data=request.data)
        
        if serializer.is_valid():
            email=serializer.validated_data['email']
            product=serializer.validated_data['product']  #email sent from frontend
            company = Company.objects.get(email = email)
            cart_obj = Cart.objects.get(company = company)
            serializer.save()
            ProductOrder.objects.update(email=email, cart_id=cart_obj.id)
            #iDHAR ERROR AAEGA if there are multiple productorders with the same email

            print(product)
            product_id = Product.objects.get(name = product)
            print(product_id)
            #if not Club.objects.filter(product = product_id):
            
            print('hello')
            club_obj = Club.objects.create(product = product_id)
            print(club_obj)
            club_obj_id = Club.objects.get(product = product_id)
            #ProductOrder.objects.update(email=email, club_id=club_obj_id.id)
            for clubs in Club.objects.all():
                if(clubs.product==club_obj.product):
                    ProductOrder.objects.update(email=email,club_id=clubs.id)
                    club_obj.delete()
                    print("Op")
                else:
                    pass


            return Response(serializer.data)
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

class ProductSerializerView(generics.ListCreateAPIView):
    def post(self,request):
        serializer=ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user=MyUser.objects.get(email=serializer.email_manufacturer)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class ManufacturerDetails(generics.ListCreateAPIView):
    queryset=Manufacturer.objects.all()
    serializer_class = ManufacturerDetailSerializers
    def post(self,request):
        print(request.data)
        return JsonResponse("Hello")
        
class EmailChecker(generics.ListCreateAPIView):
    queryset=CheckingEmail.objects.all() 
    serializer_class= EmailCheckerSerializer
    def post(self,request):
        serializer=EmailCheckerSerializer(data=request.data) 
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer['email'])
            manufacturer=Manufacturer.objects.get(email=serializer.data['email'])
            serializer.data['manufacturer']=manufacturer
            datas={}
            datas['address']=manufacturer.address_main
            datas['experience']=manufacturer.calculate_exp()
            return Response(datas)
        else:
            return Response(serializer.errors)


class ProductListView(generics.ListAPIView):
    queryset=Product.objects.all()
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductListSerializer(products, many=True)
        return Response(serializer.data)


class OrderView(generics.ListCreateAPIView):
    serializer_class=OrderSerializer
    queryset=Order.objects.all()
    def post(self,request):
        serializer=OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            product_names=[]
            total_type={}
            many_orders=[]
            arr=[]
            company_names=[]
            orders=Order.objects.all()
            # Quantity Total based on product
            for order in orders:
                product_names.append(order.product_name)
                company_names.append(order.company_name)
            diff_type_prod_name=list(dict.fromkeys(product_names))
            for names in diff_type_prod_name:
                if len(Order.objects.filter(product_name=names))>1:
                    print("op")
                    many_orders=(Order.objects.filter(product_name=names))
                    #print(many_orders)
                    for some in many_orders:
                        arr.append(some.quantity)
                    total_type[names]=sum(arr)
                    arr=[]
                else:
                    for ord in Order.objects.filter(product_name=names):
                        total_type[names]=ord.quantity

            # CART BASED ON  COMPANY_NAME
            arrr=[]
            total_typess={}
            diff_type_comp_name=list(dict.fromkeys(company_names))
            print(diff_type_comp_name)
            for comp_name in diff_type_comp_name:
                print(comp_name)
                if len(Order.objects.filter(company_name=comp_name))>1:
                    many_companies=Order.objects.filter(company_name=comp_name)
                    print(len(many_companies))
                    for many in many_companies:
                        #print(many)
                        arrr.append(many.product_name)
                
                    total_typess[comp_name]=arrr
                    arrr=[]
                else:
                    for comp in Order.objects.filter(company_name=comp_name):
                        total_typess[comp_name]=comp.product_name
            print(total_typess)
            return Response(total_type)



class OrderData(generics.ListCreateAPIView):
    queryset=Order.objects.all()
    serializer_class=EmailCheckerSerializer
    def post(self,request):
        serializer=EmailCheckerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            email=serializer.data['email']
            orders=Order.objects.all()
            product_names=[]
            total_type={}
            arr=[]
            products=Product.objects.filter(manufacturer_email=email)
            #print(products)
            for product in products:
                product_names.append(product.name)
            #print(product_names)
            # Quantity Total based on product
                print(product_names)
                for name in product_names:
                    print(name)
                    if len(Order.objects.filter(product_name=name))>1:
                        print("op")
                        many_orders=(Order.objects.filter(product_name=name))
                        #print(many_orders)
                        for some in many_orders:
                            arr.append(some.quantity)
                        total_type[name]=sum(arr)
                        arr=[]
                    else:
                        for ord in Order.objects.filter(product_name=name):
                            total_type[name]=ord.quantity
                            return Response(total_type)
                        print(total_type)
                        
                return Response(total_type)
        return Response(serializer.errors)
    

        
