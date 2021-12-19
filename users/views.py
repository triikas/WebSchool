from django.shortcuts import render

def main(request):
    pass
# варианты: авторизация/регистрация/ЛК в зависимости от ситуации

def reg(request):
    return render(request, 'users/registration.html')

def avt(request):
    pass

def lk(request):
    pass