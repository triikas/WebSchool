from django.urls import path, include
from . import views
from django.contrib.auth import views as vs
urlpatterns = [
    path('', views.main),
    path('registration/', views.reg),
    path('authorization/', vs.LoginView.as_view(template_name='users/avt.html')),
    path('out/', vs.LogoutView.as_view(template_name='users/lk.html'),name='out'),
    path('lk/', views.lk, name='lk'),

]