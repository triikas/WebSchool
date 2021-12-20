from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('lessons/', include('lessons.urls')),
    path('user/', include('users.urls')),
    url(r'^favicon\.ico$', RedirectView.as_view(url='/static/unnamed.png'), name='favicon'),
]
