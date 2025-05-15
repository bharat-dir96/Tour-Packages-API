from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes),
    path('packages/', views.getpackages),
    path('package/<str:pk>', views.getpackage),
]