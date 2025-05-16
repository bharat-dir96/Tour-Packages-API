from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes),                      #Path to know all the api endpoints
    path('packages/', views.getpackages),           #Path for GET and POST requests
    path('package/<str:pk>', views.getpackage),     #Path for GET, PUT, DELETE requests by code
]