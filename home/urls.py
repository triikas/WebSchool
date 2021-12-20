from django.urls import path, include
from . import views
from django.views.generic import RedirectView
urlpatterns = [
    path('', views.home),
    url(r'^favicon\.ico$', RedirectView.as_view(url='/static/home/unnamed.png'), name='favicon'),

]