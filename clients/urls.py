from django.contrib import admin
from django.urls import path, include

from . import views
from .views import CartView, ProductOrderView, Productview

urlpatterns=[
    path('',views.Companyview.as_view()),
    path('manufacturer/',views.ManufacturerView.as_view()),

    path('order/',ProductOrderView.as_view()),
    path('cart/',CartView.as_view()),
    path('product/',Productview.as_view()),
    path('manufacturerdetails/',views.ManufacturerDetails.as_view()),
    path('emailchecker/',views.EmailChecker.as_view())
]