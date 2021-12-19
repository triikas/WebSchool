from django.urls import path, include
from . import views
# app_name = 'home'
urlpatterns = [
    path('', views.main),
    path('registration/', views.reg),
    path('authorization/', views.avt),
    path('account/', views.lk),
]