from django.urls import path, include
from . import views
from django.views.generic import RedirectView
urlpatterns = [
    path('', views.main),
    path('registration/', views.reg),
    path('authorization/', views.avt),
    path('account/', views.lk),
    url(r'^favicon\.ico$', RedirectView.as_view(url='/static/users/unnamed.png'), name='favicon'),
]