from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import views as vs
class RegForm(UserCreationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','type':'text'}), required=True)
    email = forms.EmailField(required=True, widget=forms.TextInput(attrs={'class':'form-control','type':'email'}))
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control','type':'password'}), required=True)
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control','type':'password'}), required=True)
    class Meta():
        model = User
        fields = ['username','email','password1','password2']
# class AvtForm(vs.LoginView):
#     username = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','type':'text'}), required=True)
#     password = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control','type':'password'}), required=True)
#     class Meta():
#         model = User
#         fields = ['username','password']
